let startMenus
let DDMenuRefr



document.addEventListener("DOMContentLoaded", function() {
  
  // Get all elements with the class name 'start-menu'
  startMenus = document.getElementsByClassName('start-menu');
  const borderRadius = window.getComputedStyle(startMenus[0]).getPropertyValue('border-radius');

  console.log("gathered all start-menus");
  for(let i =0; i<startMenus.length; i++){
    startMenus[i].addEventListener('click', function(){

      let _dropDown = startMenus[i].nextElementSibling;
      console.log(_dropDown.textContent);
      if(_dropDown == DDMenuRefr){
        if(DDMenuRefr.style.display === 'none'){
          DDMenuRefr.style.display = 'block';
          startMenus[i].style.borderBottomLeftRadius = '0';
          startMenus[i].style.borderBottomRightRadius = '0';
          DDMenuRefr.style.borderBottomLeftRadius = borderRadius;
          DDMenuRefr.style.borderBottomRightRadius = borderRadius;
        } 
        else{
          DDMenuRefr.style.display = 'none';
          startMenus[i].style.borderRadius = borderRadius;
        }
      }else{
        if(DDMenuRefr){
          DDMenuRefr.style.display = 'none';
          startMenus[i].style.borderRadius = borderRadius;
        } 
        DDMenuRefr = _dropDown;
        DDMenuRefr.style.display = 'block';
        startMenus[i].style.borderBottomLeftRadius = '0';
        startMenus[i].style.borderBottomRightRadius = '0';
        DDMenuRefr.style.borderBottomLeftRadius = borderRadius;
        DDMenuRefr.style.borderBottomRightRadius = borderRadius;
      }

    });
  }
});