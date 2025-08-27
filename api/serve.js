export default async function handler(req) {
  const fs = require('fs');
  const path = require('path');

  const filePath = path.join(process.cwd(), '3D-FileExplorer.html');

  try {
    const html = fs.readFileSync(filePath, 'utf8');
    return new Response(html, {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    });
  } catch (err) {
    return new Response(`Error loading HTML: ${err.message}`, {
      status: 500,
    });
  }
}