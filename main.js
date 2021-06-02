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
  
  function createBoard() {
    for (let i = 0; i < 25; i++) {  // 5 x 5
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
})
  