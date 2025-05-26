import * as THREE from 'three';
import img from './image.jpg';

const geometry = new THREE.SphereGeometry(100);

const loader = new THREE.TextureLoader();

const texture = loader.load(img);
texture.wrapT = THREE.RepeatWrapping;


const material = new THREE.MeshBasicMaterial({
    map: texture,
});

const TextureObj = new THREE.Mesh(geometry, material);

console.log(TextureObj);


export default TextureObj;
