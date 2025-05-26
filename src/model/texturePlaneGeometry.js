import * as THREE from 'three';
import img from './image.jpg';

const geometry = new THREE.PlaneGeometry(100, 100);
const uvs = new Float32Array([
    0, 0.5,
    0.5, 0.5,
    0, 0,
    0.5, 0
]);

geometry.attributes.uv = new THREE.BufferAttribute(uvs, 2);
geometry.translate(20, 0, 0);
const loader = new THREE.TextureLoader();

const texture = loader.load(img);

const material = new THREE.MeshBasicMaterial({
    map: texture,
});

const TextureObj = new THREE.Mesh(geometry, material);

console.log(TextureObj);


export default TextureObj;
