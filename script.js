const text = ["Cloud Enthusiast", "Software Developer", "Future Data Scientist"];
let i = 0, j = 0, current = "", isDeleting = false;
const typing = document.querySelector(".typing");

function type(){
  if(i < text.length){
    if(!isDeleting && j <= text[i].length){
      current = text[i].slice(0, j++);
    } else if(isDeleting && j >= 0){
      current = text[i].slice(0, j--);
    }

    typing.innerHTML = current;

    if(j === text[i].length){
      isDeleting = true;
    }
    if(isDeleting && j === 0){
      isDeleting = false;
      i++;
    }
    if(i === text.length) i = 0;
  }
  setTimeout(type, isDeleting ? 80 : 120);
}
type();
