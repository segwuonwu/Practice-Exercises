var colors = [
    '#c94c24', //orange
    '#268bd2', //blue
    '#c4226f', //pink
    '#859835', //lime
    '#6d73c2', //purple
    '#37a198', //green
    '#da3637', //red
    '#f0ad4e', //yellow
];

function makeBoxes (howMany) {
    var colorAmt = colors.length;
    var currColor = 0;
    var myElement;
    var myNode = document.querySelector('.boxes')

    for(let i=0; i< howMany; i++){
        myElement = document.createElement('div');
        myElement.className = 'box';
        myElement.style = 'background-color: ' + colors[currColor];
        myNode.appendChild(myElement);

        currColor === colorAmt-1 ? currColor = 0 : currColor++;
    }

    myNode.addEventListener('click', function(e){
        e.target.parentNode.removeChild(e.target);
    }, false);
}

makeBoxes(20);