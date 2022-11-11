let scene, camera, renderer, sphere;

function init() {

    scene = new THREE.Scene();

    // camera arguments are (camera fov in degrees, aspect ratio, near plane clipping distance, far plane clipping distance)
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 16);
    const texture = new THREE.TextureLoader().load('textures/globe.jpeg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 5;
};

function animate() {
    requestAnimationFrame(animate);

    sphere.rotation.x -= 0.001;
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();