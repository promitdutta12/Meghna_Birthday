let scene=new THREE.Scene()

let camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

let renderer=new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)

document.getElementById("globe").appendChild(renderer.domElement)

let geometry=new THREE.SphereGeometry(5,32,32)

let texture=new THREE.TextureLoader().load("images/photo1.jpg")

let material=new THREE.MeshBasicMaterial({map:texture})

let sphere=new THREE.Mesh(geometry,material)

scene.add(sphere)

camera.position.z=10

function animate(){

requestAnimationFrame(animate)

sphere.rotation.y+=0.01

renderer.render(scene,camera)

}

animate()
