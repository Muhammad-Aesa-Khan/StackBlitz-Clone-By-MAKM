let userHasScrolled = false;  
window.onscroll = (e) => {  
  userHasScrolled = true;
  let scroll = this.scrollY;
    console.log(scroll);
  if(scroll !== 0)
  {
    document.getElementById('navbar-sticky').style.backgroundColor= "#0e1013f3";
  }
  else
  {
    document.getElementById('navbar-sticky').style.backgroundColor= "#1c1f258a";
  }

}


let card1 = document.getElementById("card1").addEventListener("mouseover", mouseOver);;
function mouseOver()
{
  document.getElementById('readthe').classList.add('background-color-blue');
}

card1 = document.getElementById("card1").addEventListener("mouseout", mouseOut);;
function mouseOut()
{
  document.getElementById('readthe').classList.remove('background-color-blue');
}