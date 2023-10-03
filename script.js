const button1 = document.querySelector(".dice1");
const button2 = document.querySelector(".dice2");
button1.addEventListener("click", function(){roll(button1)});
button2.addEventListener("click",function(){roll(button2)});
function roll(a)
{
const value = Math.floor(Math.random()*6+1);
a.textContent=value;
}
