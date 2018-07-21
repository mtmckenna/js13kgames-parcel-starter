const fs = require('fs');
const archiver = require('archiver');

const distDir = process.cwd() + '/dist';
const output = fs.createWriteStream(distDir + '/zipped/game.zip');
const archive = archiver('zip', { zlib: { level: 9 } });

archive.pipe(output);
archive.file(distDir + '/inlined/index.html', { name: 'index.html' });

archive.finalize();