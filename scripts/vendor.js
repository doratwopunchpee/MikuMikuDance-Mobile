const fs = require('fs');
const path = require('path');

const files = [
  {
    src: 'node_modules/three/build/three.min.js',
    dest: 'www/vendor/three.min.js'
  },
  {
    src: 'node_modules/three/examples/js/controls/OrbitControls.js',
    dest: 'www/vendor/OrbitControls.js'
  },
  {
    src: 'node_modules/three/examples/js/loaders/MMDLoader.js',
    dest: 'www/vendor/MMDLoader.js'
  },
  {
    src: 'node_modules/mmd-parser/build/mmdparser.min.js',
    dest: 'www/vendor/mmdparser.min.js'
  }
];

const destDir = path.join(__dirname, '../www/vendor');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

files.forEach(file => {
  const srcPath = path.join(__dirname, '..', file.src);
  const destPath = path.join(__dirname, '..', file.dest);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file.src} -> ${file.dest}`);
  } else {
    console.warn(`File not found: ${file.src}`);
  }
});
