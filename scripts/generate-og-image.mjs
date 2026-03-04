import sharp from 'sharp';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const logoPath = join(root, 'public', 'caliqo_logo.png');
const outPath = join(root, 'public', 'og-image.png');

const W = 1200;
const H = 630;

// Dark background matching site (#0a0b0d)
const bg = Buffer.alloc(W * H * 4);
const [r, g, b] = [10, 11, 13];
for (let i = 0; i < W * H * 4; i += 4) {
  bg[i] = r;
  bg[i + 1] = g;
  bg[i + 2] = b;
  bg[i + 3] = 255;
}

const bgImage = sharp(bg, { raw: { width: W, height: H, channels: 4 } });

// Logo at ~320px width, centered
const logoSize = 320;
const logo = await sharp(logoPath).resize(logoSize, logoSize).toBuffer();

const left = Math.round((W - logoSize) / 2);
const top = Math.round((H - logoSize) / 2);

await bgImage
  .composite([{ input: logo, left, top }])
  .png()
  .toFile(outPath);

console.log('Generated public/og-image.png');
