// Copies the Three.js r128 files the app needs from node_modules into www/vendor (no CDN at runtime).
const fs=require('fs'),p=require('path');
const out='www/vendor',base='node_modules/three/';
fs.mkdirSync(out,{recursive:true});
['build/three.min.js','examples/js/libs/mmdparser.min.js','examples/js/loaders/TGALoader.js','examples/js/loaders/MMDLoader.js','examples/js/controls/OrbitControls.js','examples/js/controls/TransformControls.js','examples/js/animation/CCDIKSolver.js']
 .forEach(f=>fs.copyFileSync(base+f,p.join(out,p.basename(f))));
console.log('vendor files copied');
