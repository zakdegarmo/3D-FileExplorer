import { readFileSync } from 'fs';
import { join } from 'path';

export default async function handler(req) {
  const html = readFileSync(join(__dirname, '3D-FileExplorer.html'), 'utf8');
  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html' },
  });
}