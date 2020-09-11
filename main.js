const btn = document.querySelector("#toggle-menu");
const nav = document.querySelector("nav");
const toTop = document.querySelector("#top-button");


btn.onclick = () =>{
    nav.classList.toggle("showing-nav")
}



window.addEventListener("scroll", () => {
  if (window.pageYOffset > (window.visualViewport.height / 2 )) {
    toTop.classList.add("visible");
  } else {
    toTop.classList.remove("visible");
  }
})

