
import * as THREE from 'three';

const houseGroup = new THREE.Group();

// 房子的墙
const shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.lineTo(0, 200);
shape.lineTo(150, 300);
shape.lineTo(300, 200);
shape.lineTo(300, 0);

// 孔洞（必须在生成几何体之前添加到shape上）
const hole = new THREE.Path();
hole.moveTo(100, 50);
hole.lineTo(200, 50);
hole.lineTo(200, 100);
hole.lineTo(100, 100);
shape.holes.push(hole);

const geometry = new THREE.ExtrudeGeometry(shape, { depth: 10, bevelEnabled: true });
const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color('lightgrey'),
    side: THREE.DoubleSide,
});
const sideWall = new THREE.Mesh(geometry, material);

const sideWall2 = sideWall.clone()
sideWall2.translateZ(300)


// 房子的底板
const geometryBottom = new THREE.BoxGeometry(300, 10, 300);

geometryBottom.translate(150, 5, 150); // 将底板移动到合适的位置
const materialBottom = new THREE.MeshBasicMaterial({ color: new THREE.Color('grey') });
const houseBottomGeometryMesh = new THREE.Mesh(geometryBottom, materialBottom);

houseGroup.add(sideWall);
houseGroup.add(sideWall2);
houseGroup.add(houseBottomGeometryMesh);

houseGroup.position.set(0, 0, 0);
houseGroup.scale.set(0.65, 0.65, 0.65);

export default houseGroup;