
import * as THREE from 'three';

const shape = new THREE.Shape();

shape.moveTo(0, 0);
shape.lineTo(0, 200);
shape.lineTo(150, 300);
shape.lineTo(300, 200);
shape.lineTo(300, 0);

const geometry = new THREE.ShapeGeometry(shape);
const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color('lightgrey'), 
    side: THREE.DoubleSide,
});

const mesh = new THREE.Mesh(geometry, material);


export default mesh;