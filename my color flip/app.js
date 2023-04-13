const colors = ["green","red", "black",  "rgba(133,122,200)"];
const color = document.querySelector(".color")
const btn = document.getElementById("btn")
addEventListener("click", function(){
    const randomNum = getRnadomNum();
    document.body.style.backgroundColor = colors[randomNum]
color.textContent = colors[randomNum]
})
function getRnadomNum() {
   return Math.floor(Math.random() * colors.length)
}
