let square = {
    color: white,
    border: line, //css
    counter: 0
    };
    let table = []
    function turnRed() {
    square.color = red;
    };
    function createTable () {
    for (let x = 1; x < 238; x+= 14) {
    for (let y = 1; y < 238; y+= 14) {
    this.add(square)
    square.counter++
    table.push(square)
    }
    }
    };

    $('square.counter').click(function() {
        turnRed()
      });

 

    
