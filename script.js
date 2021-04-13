const container=document.querySelector(".container");
const left=document.querySelector(".left ")
const right=document.querySelector(".right")

left.addEventListener("mouseover",function()
{
      container.classList.add("left-hover")
})
left.addEventListener("mouseleave",function()
{
      container.classList.remove("left-hover")
})
right.addEventListener("mouseover",function()
{
      container.classList.add("right-hover")
})
right.addEventListener("mouseleave",function()
{
      container.classList.remove("right-hover")
})
