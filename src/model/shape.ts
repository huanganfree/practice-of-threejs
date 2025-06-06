
import * as THREE from 'three';

const heartShape = new THREE.Shape();

heartShape.moveTo(25, 25);

const geometry = new THREE.ShapeGeometry( heartShape );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial());


export default mesh;