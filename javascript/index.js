var prev = window.pageYOffset;
window.onscroll = function(){
  var curr = window.pageYOffset;
  console.log(curr);
  if(curr > prev){
    document.querySelector("#navigation-bar").style.top ="-130px";
  }else{
    document.querySelector("#navigation-bar").style.top = "0px";
  }
  
}
