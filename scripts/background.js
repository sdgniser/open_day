// properties
var density = 4;
var spread_over_length = 50;

var number_of_leaves = density * spread_over_length;
var scene = new THREE.Scene();

//camera
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer({ antialis: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

// incase of resize of window the animation 'window' is also to resize
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// leaf generating function at random location
var add_leaf = function() {
  // this has to be wrt the html file
  var url = "3D/leaf/leaf.gltf";

  // loading gltf file (importing leaf)
  var gltfLoader = new THREE.GLTFLoader();
  gltfLoader.load(url, function(gltf) {
    var mesh = gltf.scene;
    // random position
    mesh.position.x = Math.random() * 20 - 10;
    mesh.position.y = Math.random() * 20 - 10;
    mesh.position.z = -Math.random() * spread_over_length;
    // random orientation
    mesh.rotation.x = Math.random() * (2 * Math.PI);
    mesh.rotation.y = Math.random() * (2 * Math.PI);
    mesh.rotation.z = Math.random() * (2 * Math.PI);
    scene.add(mesh);
  });
};

// spreading around the leaves
for (var i = 0; i < number_of_leaves; i++) {
  add_leaf();
}

// light 1
var light = new THREE.PointLight(0xffffff, 2, 1000);
light.position.set(0, 0, -20);
scene.add(light);

// light 2
var light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(10, 10, 20);
scene.add(light);

// loading into the html page
document.body.appendChild(renderer.domElement);

var go_forward = 0;
// render function
var render = function() {
  //moving the camera through this
  if (go_forward < spread_over_length) {
    go_forward += 1;
    camera.position.z -= 1;
    light.position.z -= 1;
  } else {
    if (go_forward === 2 * spread_over_length) {
      go_forward = 0;
    }
    go_forward += 1;
    camera.position.z += 1;
    light.position.z += 1;
  }

  // rendering
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

render();
