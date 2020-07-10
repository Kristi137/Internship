function showul (event) {
    event.stopPropagation();
    let nextul = event.target.nextElementSibling;
    if(nextul.style.display == "block") {
      nextul.style.display = "none"; 
    } else {
      nextul.style.display = "block";
    }
  }

  let modal = document.querySelector(".modal");
  let trigger = document.querySelectorAll(".trigger");
  let closeButton = document.querySelector(".close-button");
  
  trigger.forEach(function(el){
    el.addEventListener("click", function() {
      modal.classList.toggle("show-modal");
      let modalContent = document.querySelector('.modal-content');
      let oldImg = document.querySelector('.oldImg');
      let url = el.src;
      url = url.replace('/150/', '/600/');
      let newImg = document.createElement('img');
      newImg.src = url;
      newImg.id = 'newImg';
      modalContent.appendChild(newImg);		
    });
  });
  closeButton.addEventListener("click", function() {
    modal.classList.toggle("show-modal");
    let modalContent = document.querySelector('.modal-content');
    let myImg = document.querySelector('#newImg');
    modalContent.removeChild(myImg);
  });
  window.addEventListener("click", function(event) {
        if (event.target === modal) {
        modal.classList.toggle("show-modal");
        let modalContent = document.querySelector('.modal-content');
        let myImg = document.querySelector('#newImg');
        modalContent.removeChild(myImg);
    }
  });