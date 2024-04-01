window.addEventListener('DOMContentLoaded', () => {
  var options = {
    zone: document.getElementById('joystick-container'),
    mode: 'static',
    position: { left: '30%', bottom: '15%' },
    restOpacity: 1,
    color: '#1d1d1d',
  };

  var clicked = 0;

  var manager = nipplejs.create(options);
  var cursorObj = document.getElementById('cursorObj');
var highlightBox = document.getElementById('highlight-box')
  var mouseButton = document.getElementById('mouseObj');
  var clickableElements = document.getElementsByClassName('clickable');

  function isClickable() {
    for (var i = 0; i < clickableElements.length; i++) {
      var elementRect = clickableElements[i].getBoundingClientRect();
      var cursorObjRect = cursorObj.getBoundingClientRect();

      if (
        cursorObjRect.left < elementRect.right &&
        cursorObjRect.right > elementRect.left &&
        cursorObjRect.top < elementRect.bottom &&
        cursorObjRect.bottom > elementRect.top
      ) {
        return true;
      }
    }

    return false;
  }
  var isButtonHeld = false;
  function handleButtonClick() {
    clicked++;
    if (clicked === 1){
      console.log("Mouse Down")
    }
    if (clicked == 2) {
      isButtonHeld = true;
      console.log('Holding Mouse');
    }
    if (clicked >= 3) {
      isButtonHeld = false;
      clicked = 0;
      console.log('Mouse Up');
    }
  }
  mouseButton.addEventListener('click', handleButtonClick);


  manager.on('move', (evt, data) => {
    var angle = data.angle.radian;
    var magnitude = data.distance / 25;

    var xDisplacement = magnitude * Math.cos(angle);
    var yDisplacement = magnitude * Math.sin(angle);


    var currentLeft = parseFloat(cursorObj.style.left) || 0;
    var currentTop = parseFloat(cursorObj.style.top) || 0;

    var newLeft = currentLeft + xDisplacement;
    var newTop = currentTop - yDisplacement;

    var screenWidth = window.screen.width - cursorObj.offsetWidth;
    var screenOffsetY = window.screen.height - window.innerHeight;
    var screenHeight = window.screen.height - cursorObj.offsetHeight - screenOffsetY;

    if (newLeft >= 0 && newLeft <= screenWidth) {
      cursorObj.style.left = newLeft + 'px';
    }

    if (newTop >= 0 && newTop <= screenHeight) {
      cursorObj.style.top = newTop + 'px';
    }
    if  (isButtonHeld = true) {
highlightBox.size = highlightBox.size + 5;
    }
  });
  var joystickBack = document.querySelector('#joystick-container').querySelector('#nipple_0_0').querySelector('.back');;
  var joystickFront = document.querySelector('#joystick-container').querySelector('#nipple_0_0').querySelector('.front')

  if (joystickBack && joystickFront) {
    joystickBack.style.borderRadius = '16px';
    joystickFront.style.borderRadius = '16px';
  }
});