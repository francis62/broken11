document.addEventListener('DOMContentLoaded', () => {
  const userBoard = document.querySelector('.b0-board')
  const blocks = []
  
  const colors = [
      '#FF71EA', // pink
      '#FFE964', // yellow
      '#28E5FF', // bright light blue
      '#B4FFE2', // light emerald
      '#A0FF33', // lime
    ]
  const colorsActive = '#fff'
  
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


  blocks.forEach(block => block.addEventListener('click', blockSelection))
  

  function blockSelection() {
    blockIsSelected = parseInt(this.id)
    colorOfSelectedBlock = this.style.backgroundColor
    console.log(blockIsSelected,colorOfSelectedBlock)  // testing
    this.style.backgroundColor = colorsActive
  }


})
  