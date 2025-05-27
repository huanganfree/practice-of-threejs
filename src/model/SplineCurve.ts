import * as THREE from 'three';

const arr = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(100, 0),
    new THREE.Vector2(100, 100),
    new THREE.Vector2(0, 100),
    new THREE.Vector2(0, 0)
]

const sc = new THREE.SplineCurve(arr);

const pointsList = sc.getPoints(100);


const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(pointsList);

const material = new THREE.LineBasicMaterial({
    color: new THREE.Color('orange')
});

const splineCurve = new THREE.Line(geometry, material);


console.log(splineCurve);

export default splineCurve;


