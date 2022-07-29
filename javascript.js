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