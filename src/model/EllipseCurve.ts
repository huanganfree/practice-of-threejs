import * as THREE from 'three';

const arc = new THREE.EllipseCurve(0, 0, 100, 50)

const pointsList = arc.getPoints(20); // { x: 100, y: 0 }


const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(pointsList);

const material = new THREE.PointsMaterial({
    color: new THREE.Color('orange'),
    size: 5
});

const ellipseCurve = new THREE.Points(geometry, material);

console.log(ellipseCurve);

export default ellipseCurve;


