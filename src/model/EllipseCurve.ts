import * as THREE from 'three';

const arc = new THREE.EllipseCurve(0, 0, 100, 100, 0, Math.PI * 1, false);

const pointsList = arc.getPoints(120); // { x: 100, y: 0 }


const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(pointsList);

// *** 点材质
// const material = new THREE.PointsMaterial({
//     color: new THREE.Color('orange'),
//     size: 5
// });
// *** 点材质

// *** 线材质
// const ellipseCurve = new THREE.Points(geometry, material);
const material = new THREE.LineBasicMaterial({
    color: new THREE.Color('orange')
});

const line = new THREE.Line(geometry, material);

console.log(line);

export default line;


