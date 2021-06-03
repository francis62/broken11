document.addEventListener('DOMContentLoaded', () => {
  const userBoard = document.querySelector('.b0-board')
  const blocks = []
  var resetId
  var savedToReset = []  // or to destroy -- sirve para destruir tambien
  var savedToDestroy = []
  var blockColor
  const savedColorsToShow = []
  const colors = [
      '#FF71EA', // pink rosa
      '#FFE964', // yellow amarillo
      '#28E5FF', // bright light blue celeste
      '#B4FFE2', // light emerald
      '#A0FF33', // lime lima verda
    ]
  const colorsActive = '' // no se esta usando
  let blockIsSelected  // blockSelection()
  let colorOfSelectedBlock // blockSelection()
  let outerRim = document.querySelector('.b0-outer-rim') // blockSelection() deselectionOut()
  outerRim.addEventListener('click', deselectionOut)
  let destroyButton = document.querySelector('.b0-destroy-ok') // completeSelection()
  destroyButton.addEventListener('click', completeSelection) // completeSelection()
  let refreshButton = document.querySelector('.b0-refresh')  // refreshBoard()
  refreshButton.addEventListener('click', refreshBoard) // refreshBoard()
  var colorOfButton = document.querySelector('.b0-color-display')
  
  function refreshBoard() {
    location.reload()
  }


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
  blocks.forEach(block => block.addEventListener('click', blockSelection))
  blocks.forEach(block => block.addEventListener('click', showBlockColor))
  

  function blockSelection() {
    blockIsSelected = parseInt(this.id)
    colorOfSelectedBlock = this.style.backgroundColor
    console.log(blockIsSelected,colorOfSelectedBlock)  // testing
    this.removeAttribute('class','b0-destroy-queue is-disabled' )
    this.setAttribute('class', 'has-background-light button is-loading' )
    
    // save id to reset in case user wants, guardo en array para deselect
    // se puede usar tambien para ver los id de bloques a destruir
    // falta agregar una tecla para completar la seleccion y que se destruyan los bloques

    resetId = blockIsSelected
    blockColor = colorOfSelectedBlock
    savedToReset.push(resetId)
    savedToDestroy.push(resetId)
    savedColorsToShow.push(blockColor)
    // for (let index = 1; index < 6; index++) {
    //   savedToReset[index] = resetId
    //   savedToDestroy[index] = resetId
    //   savedColorsToShow[index] = blockColor
    // }

  }

   // deselect - reset function vuelven a su color original
  function deselectionOut() { // reset button
    
    for (let index = 0; savedToReset.length; index++) {
      const element = savedToReset[index]
    document.getElementById(element).removeAttribute('class','has-background-light button is-loading' )
    
    savedToDestroy.pop()
   }
   savedToReset.pop()
  }
  

  function completeSelection() { // ok button

    for (let index = 0; savedToDestroy.length; index++) {
      const element = savedToDestroy[index]
      const toBeDestroyed = document.getElementById(element)
      // toBeDestroyed.remove()
      toBeDestroyed.removeAttribute('class','has-background-light button is-loading' )
      toBeDestroyed.setAttribute('class','b0-destroy-queue button is-disabled ')    
      savedToReset.pop()
   }
   savedToDestroy.pop()
  }

  

  function showBlockColor() { // color button
    let bckGrndClr = (savedColorsToShow.length) - 1
    colorOfButton.style.backgroundColor = savedColorsToShow[bckGrndClr]

    console.log('0: ', savedColorsToShow[0])
    console.log('test: ', bckGrndClr)


    for (let index = 0; index < savedColorsToShow.length; index++) {
      const element = savedColorsToShow[index];
      // console.log('showBlockColor: ', element)
      
    }
  }

})
  