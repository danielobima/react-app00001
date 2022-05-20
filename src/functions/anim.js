export const anim = () =>{
    const collection = document.getElementsByClassName('anim');
    for(var i=0;i<collection.length;i++){
      collection[i].classList.add('anim-def');
    }
}
export const animList = ()=>{
  const collection = document.getElementsByClassName('anim');
  let i = 0;
  var interval = setInterval(()=>{
    
    if(i<collection.length){
      collection[i].classList.add('anim-def');
      i++;
    }
    else{
      clearInterval(interval);
    }
  },50);
}
export const scrollListener = (callBack) =>{
  window.onscroll = function() {myFunction()};

  function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      callBack(true);
    } else {
      callBack(false);
    }
  }
}
