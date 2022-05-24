export const anim = () =>{
    const collection = document.getElementsByClassName('anim');
    for(var i=0;i<collection.length;i++){
      collection[i].classList.add('anim-def');
    }
}
export const animList2 =()=>{
  const collection = document.getElementsByClassName('animF');
  var arr = [];
  setTimeout(()=>{
    for(var x =0;x<collection.length;x++){
      if(!collection[x].classList.contains("anim-def") && collection[x].classList.contains("anim4")){
        collection[x].style.opacity = 1;
        arr.push(collection[x]);
      }
    }
    let i = 0;
    var interval = setInterval(()=>{
      
      if(i<arr.length){
        arr[i].classList.add('anim-def');
        arr[i].classList.remove("anim4");
        i++;
      }
      else{
        clearInterval(interval);
      }
    },50);
  },50);
}
export const animListF = ()=>{
  const collection = document.getElementsByClassName('animF');
  var arr = [];
  setTimeout(()=>{
    for(var x =0;x<collection.length;x++){
      if(!collection[x].classList.contains("anim-def")){
        arr.push(collection[x]);
      }
    }
    let i = 0;
    var interval = setInterval(()=>{
      
      if(i<arr.length){
        arr[i].classList.add('anim-def');
        arr[i].classList.remove("anim4");
        i++;
      }
      else{
        clearInterval(interval);
      }
    },50);
  },50);
}
export const animList = ()=>{
  const collection = document.getElementsByClassName('anim');
  var arr = [];
  setTimeout(()=>{
    for(var x =0;x<collection.length;x++){
      if(!collection[x].classList.contains("anim-def")){
        arr.push(collection[x]);
      }
    }
    let i = 0;
    var interval = setInterval(()=>{
      
      if(i<arr.length){
        arr[i].classList.add('anim-def');
        arr[i].classList.remove("anim4");
        i++;
      }
      else{
        clearInterval(interval);
      }
    },50);
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
