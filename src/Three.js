import React from 'react';
import * as THREE from 'three';

export default function Three() {
  React.useEffect(() => {
    const canvasWrapper = document.querySelector('.canvas-wrapper');
    console.log('canvasWrapper: ', canvasWrapper);
    if (!!canvasWrapper) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGL1Renderer();
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh( geometry, material );
      const camera = new THREE.PerspectiveCamera(75, canvasWrapper.offsetWidth / window.innerHeight, 0.1, 1000);
      renderer.setSize(canvasWrapper.offsetWidth, window.innerHeight);
      camera.position.z = 5;
      canvasWrapper.appendChild(renderer.domElement);
      scene.add(cube);
    
      function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
      }
      animate();
    }
    return () => {
      console.log('Component will unmount.')
    }
  });

  return (
    <div className="canvas-wrapper"></div>
  );
}