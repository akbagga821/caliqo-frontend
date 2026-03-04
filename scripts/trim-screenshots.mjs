#!/usr/bin/env node
/**
 * Trims uniform black (or very dark) borders from screenshot PNGs
 * so only the app window content remains.
 */
import sharp from 'sharp';
import { readdir, readFile, writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCREENSHOTS_DIR = join(__dirname, '..', 'public', 'screenshots');

// Consider pixel as "border" if all RGB components are below this
const BLACK_THRESHOLD = 25;

async function getContentBounds(imagePath) {
  const { data, info } = await sharp(imagePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const isBlack = r <= BLACK_THRESHOLD && g <= BLACK_THRESHOLD && b <= BLACK_THRESHOLD;
      if (!isBlack) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (minX > maxX || minY > maxY) return null;
  return {
    left: minX,
    top: minY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
  };
}

async function trimImage(imagePath) {
  const bounds = await getContentBounds(imagePath);
  if (!bounds) {
    console.warn('No content bounds found for', imagePath);
    return;
  }
  const outPath = imagePath.replace(/\.png$/, '.trimmed.png');
  await sharp(imagePath)
    .extract(bounds)
    .toFile(outPath);
  const buf = await readFile(outPath);
  await writeFile(imagePath, buf);
  await unlink(outPath);
  console.log('Trimmed:', imagePath, '→', bounds.width, 'x', bounds.height);
}

async function main() {
  const files = await readdir(SCREENSHOTS_DIR);
  const pngs = files.filter((f) => f.endsWith('.png'));
  for (const name of pngs) {
    await trimImage(join(SCREENSHOTS_DIR, name));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
