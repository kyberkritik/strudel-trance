import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Handle root path
  if (req.url === '/') {
    req.url = '/index.html';
  }

  // Resolve file path
  let filePath = path.join(__dirname, req.url);

  // Get file extension
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeType = mimeTypes[extname] || 'application/octet-stream';

  // Check if file is in node_modules (for dependencies)
  if (req.url.includes('node_modules') || req.url.includes('@strudel')) {
    filePath = path.join(__dirname, 'node_modules', req.url.replace('/node_modules/', ''));
  }

  // Read and serve file
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`, 'utf-8');
      }
    } else {
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`🎵 Strudel server running at http://localhost:${PORT}/`);
  console.log(`Press Ctrl+C to stop the server`);
});
