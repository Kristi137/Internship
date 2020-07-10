function showul (event) {
    event.stopPropagation();
    let nextul = event.target.nextElementSibling;
    if(nextul.style.display == "block") {
      nextul.style.display = "none"; 
    } else {
      nextul.style.display = "block";
    }
  }

