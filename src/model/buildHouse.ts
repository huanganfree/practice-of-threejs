import * as THREE from 'three';


const geometry = new THREE.BoxGeometry( 4000, 1000, 3000 );

const material = new THREE.MeshLambertMaterial( { color: new THREE.Color('grey'), wireframe: false } );

const buildHouseMesh = new THREE.Mesh( geometry, material );



export default buildHouseMesh;