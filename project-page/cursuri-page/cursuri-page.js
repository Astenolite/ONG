let startMenus
let DDMenuRefr

document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with the class name 'start-menu'
  startMenus = document.getElementsByClassName('start-menu');
  console.log("gathered all start-menus");
  for(let i =0; i<startMenus.length; i++){
    startMenus[i].addEventListener('click', function(){

      let _dropDown = startMenus[i].nextElementSibling;
      console.log(_dropDown.textContent);
      if(_dropDown == DDMenuRefr){
        if(DDMenuRefr.style.display === 'none')
          DDMenuRefr.style.display = 'block';
        else{
          DDMenuRefr.style.display = 'none';
        }
      }else{
        if(DDMenuRefr){
          DDMenuRefr.style.display = 'none';
        } 
        DDMenuRefr = _dropDown;
        DDMenuRefr.style.display = 'block';
      }

    });
  }
});