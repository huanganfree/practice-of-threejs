import * as THREE from 'three';
import img from './image.jpg';

const geometry = new THREE.SphereGeometry(100);

const loader = new THREE.TextureLoader();

const texture = loader.load(img);

const material = new THREE.MeshBasicMaterial({
    map: texture,
});

const Texture = new THREE.Mesh(geometry, material);

export default Texture;
