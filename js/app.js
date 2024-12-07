// Selección de elementos clave
//let target = document.getElementById("target");
let scoreText = document.querySelector("#scoreText");

let score = 0; // Puntaje inicial
let maxScore = 4;
let target = 0;

const dianas = [
  {x: 0, y:0, z:-30},
  {x: 0, y:0, z:30},
  {x: 30, y:0, z:0},
  {x: -30, y:0, z:0},
  {x: 20, y:0, z:20}
]

window.addEventListener("load", initScene)

function initScene(){
  let orbits = document.querySelectorAll('#orbit')
  console.log("Se añade el target")
  console.log(orbits.values)
  orbits.forEach(orbita =>{
    dianas.forEach(diana=>{
      target  = document.createElement("a-entity");
      target.setAttribute("geometry", {primitive: "circle", radius: 0.15})
      target.setAttribute("material", {shader: "flat", src: "#diana"})
      target.setAttribute("position", "0 1 0" )
      target.setAttribute("shootable","")
      target.setAttribute("class","clickable")
      target.addEventListener("click", onclick)
      target.object3D.position.set(diana.x, diana.y, diana.z)
      orbita.appendChild(target)
      
    console.log("Se ha añadido el target")
    })
  })

}

function onclick(){
  console.log("Click");
}

// Función para registrar un nuevo componente a nuestra escena: shootable
    AFRAME.registerComponent('shootable',{
        init: function(){
            this.el.addEventListener('click',()=>{
              if(score != maxScore)
              {
                console.log('Diana clickeada!')
                document.querySelector('[text]').setAttribute('value', `${++score}/5 dianas golpeadas`)
              }
              else{
                document.querySelector('[text]').setAttribute('value', `ENHORABUENA! JUEGO TERMINADO`)
                this.el.parentNode.removeChild(this.el)      
              }  
            })
        }
    })

  
