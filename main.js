var userBoard = new Array();
userBoard[0] = new Array(1,2,3,3,3);
userBoard[1] = new Array(2,3,5,4,1);
userBoard[2] = new Array(5,4,3,4,2);
userBoard[3] = new Array(4,2,1,5,3);
userBoard[4] = new Array(3,5,4,2,1);
// var boardLength = userBoard.length;

var app = new Vue({
    el: '#app',
    data: {
      message: ''
    } 
      ,
      data() {
        return {
            counter: 0,
            message: 'broken11',
            userBoard: userBoard
        }
    }
        
  })



  // var userBoard = new Array(1,2,3,1,2,3,3,2,1)

