import * as THREE from 'three';

const geometry = new THREE.BufferGeometry();

const vertices = new Float32Array([
    0, 0, 0,
    100, 100, 0,
    100, 0, 0,
    0, 0,100
]);
const attribute = new THREE.BufferAttribute(vertices, 3);
geometry.attributes.position = attribute;

const material = new THREE.LineBasicMaterial({
    color: new THREE.Color('orange'),
    // size: 10
});
const line = new THREE.LineSegments(geometry, material); // 使用几何体和材质创建点模型

export default line;
