document.addEventListener('DOMContentLoaded', () => {
  const userBoard = document.querySelector('.b0-board')
  const blocks = []
  var resetId
  var savedToReset = []  // or to destroy -- sirve para destruir tambien
  
  const colors = [
      '#FF71EA', // pink
      '#FFE964', // yellow
      '#28E5FF', // bright light blue
      '#B4FFE2', // light emerald
      '#A0FF33', // lime
    ]
  const colorsActive = ''
  
  function createBoard() {
    for (let i = 0; i < 49; i++) {  // 5 x 5
      const block = document.createElement('button')
      block.setAttribute('id', i)
      block.setAttribute('class', 'button')
      let colorLoad = Math.floor(Math.random() * colors.length)
      block.style.backgroundColor = colors[colorLoad]
      userBoard.appendChild(block)
      blocks.push(block)
    }
  }
  createBoard()

  let blockIsSelected
  let colorOfSelectedBlock
  // let setBackgroundToSelected
  let outerRim = document.querySelector('.b0-outer-rim')

  blocks.forEach(block => block.addEventListener('click', blockSelection))
 

  function blockSelection() {
    blockIsSelected = parseInt(this.id)
    colorOfSelectedBlock = this.style.backgroundColor
    console.log(blockIsSelected,colorOfSelectedBlock)  // testing
    // this.style.backgroundColor = colorsActive
    this.setAttribute('class', 'has-background-light button is-loading' )
    // save id to reset in case user wants, guardo en array para deselect
    // se puede usar tambien para ver los id de bloques a destruir
    // falta agregar una tecla para completar la seleccion y que se destruyan los bloques

    resetId = blockIsSelected
    savedToReset.push(resetId)
    for (let index = 1; index < 6; index++) {
      savedToReset[index] = resetId
     
    }
  }


  outerRim.addEventListener('click', deselectionOut)

  for (let index = 0; index < savedToReset.length; index++) {
    console.log('hola', savedToReset[index]) // testeando borrar despues
   }
   // deselect - reset function vuelven a su color original
  function deselectionOut() {
    for (let index = 0; savedToReset.length; index++) {
      const element = savedToReset[index]
    document.getElementById(element).removeAttribute('class','has-background-light button is-loading' )
   }
    
  }

})
  