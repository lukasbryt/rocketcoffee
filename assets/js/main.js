document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('#menu-toggle');
    const menu = document.querySelector('#menu');
  
    menuToggle.addEventListener('click', function() {
        console.log("funciona")
      menu.classList.toggle('.show');
    });
  });
  
  const body = document.querySelector("body");
  const navbar = document.querySelector(".navbar");
  const menu = document.querySelector(".menu-list");
  const menuBtn = document.querySelector(".menu-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
    body.classList.add("disabledScroll");
  }
  cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    body.classList.remove("disabledScroll");
  }
