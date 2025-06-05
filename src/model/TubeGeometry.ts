import * as THREE from 'three';

const p1 = new THREE.Vector3(-100, 0, 0);
const p2 = new THREE.Vector3(50, 100, 0);
const p3 = new THREE.Vector3(100, 0, 100);
const p4 = new THREE.Vector3(100, 0, 0);

const curve = new THREE.CubicBezierCurve3(p1, p2, p3, p4); // 创建三维贝塞尔曲线

const geometry = new THREE.TubeGeometry( curve, 20, 20, 18, false ); // 通过三维贝塞尔曲线，创建管道几何体

const material = new THREE.MeshBasicMaterial( { color: 'orange', wireframe: true } ); // 创建材质

const tubeMesh = new THREE.Mesh( geometry, material );


const geometry2 = new THREE.BufferGeometry();

geometry2.setFromPoints([p1, p2, p3, p4]); // 设置几何体的顶点

const material2 = new THREE.PointsMaterial({
    color: new THREE.Color('blue'),
    size: 10
});

const points = new THREE.Points(geometry2, material2);
const line = new THREE.Line(geometry2, new THREE.LineBasicMaterial({ })); // 创建线条

tubeMesh.add(points, line); // 将点添加到管道网格中

export default tubeMesh;