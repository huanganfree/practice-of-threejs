import * as THREE from 'three';

const p1 = new THREE.Vector3(-100, 0, 0);
const p2 = new THREE.Vector3(50, 100, 0);
const p3 = new THREE.Vector3(100, 0, 100);
const p4 = new THREE.Vector3(100, 0, 0);

const curve = new THREE.CubicBezierCurve3(p1, p2, p3, p4); // 创建贝塞尔曲线

const geometry = new THREE.TubeGeometry( curve, 20, 20, 18, false );

const material = new THREE.MeshBasicMaterial( { color: 'orange', wireframe: true } );
const tubeMesh = new THREE.Mesh( geometry, material );

const geometry2 = new THREE.BufferGeometry();



export default tubeMesh;