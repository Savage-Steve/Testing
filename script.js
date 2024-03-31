window.addEventListener('DOMContentLoaded', () => {
  var options = {
    zone: document.getElementById('joystick-container'),
    mode: 'static',
    position: { left: '30%', bottom: '15%' },
    restOpacity: 1,
    color: '#1d1d1d',
  };

  var manager = nipplejs.create(options);

  manager.on('move', (evt, data) => {
  var angle = data.angle.radian;
  var magnitude = data.distance / 5;

  var xDisplacement = magnitude * Math.cos(angle);
  var yDisplacement = magnitude * Math.sin(angle);
    
  var cursorObj = document.getElementById('cursorObj');
  var currentLeft = parseFloat(cursorObj.style.left) || 0;
  var currentTop = parseFloat(cursorObj.style.top) || 0;

  // Calculate the new position
  var newLeft = currentLeft + xDisplacement;
  var newTop = currentTop - yDisplacement;

  // Get the screen dimensions
  var screenWidth = window.screen.width - cursorObj.offsetWidth;
  var screenOffsetY = window.screen.height - window.innerHeight;
  var screenHeight = window.screen.height - cursorObj.offsetHeight - screenOffsetY;

  // Ensure the object stays within the screen bounds
  if (newLeft >= 0 && newLeft <= screenWidth) {
    cursorObj.style.left = newLeft + 'px';
  }
  
  if (newTop >= 0 && newTop <= screenHeight) {
    cursorObj.style.top = newTop + 'px';
  }

  console.log(cursorObj.style.left, cursorObj.style.top);
});
  var joystickBack = document.querySelector('#joystick-container').querySelector('#nipple_0_0').querySelector('.back');;
  var joystickFront = document.querySelector('#joystick-container').querySelector('#nipple_0_0').querySelector('.front')

  if (joystickBack && joystickFront) {
    joystickBack.style.borderRadius = '16px';
    joystickFront.style.borderRadius = '16px';
  }
});
