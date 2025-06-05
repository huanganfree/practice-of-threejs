
import * as THREE from 'three';

import img from '../assets/time.png';

const loader = new THREE.TextureLoader();

const texture = loader.load(img);

texture.colorSpace = THREE.SRGBColorSpace;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1, 2); // 设置纹理重复次数

const geometry = new THREE.CylinderGeometry(15, 15, 200, 32, 32, true);
const material = new THREE.MeshBasicMaterial({
    // color: 'orange',
    side: THREE.DoubleSide,
    wireframe: false,
    map: texture,
});
const cylinder = new THREE.Mesh(geometry, material);


export default cylinder;