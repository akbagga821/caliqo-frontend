import sharp from 'sharp';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const logoPath = join(root, 'public', 'caliqo_logo.png');
const outPath = join(root, 'public', 'favicon.png');

await sharp(logoPath).resize(32, 32).png().toFile(outPath);

console.log('Generated public/favicon.png');
