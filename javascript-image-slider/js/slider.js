console.clear();
var totalImg = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"];
var imgTag = document.querySelector("img");
var count = 0;  
//console.log(totalImg.length);

function next(){
    count++
      if(count >= totalImg.length){
        count = 0;
        imgTag.src = totalImg[count];
      }
      else{
        imgTag.src = totalImg[count];
      }
}


function prev(){

    count--
    if(count < 0){
      count = totalImg.length - 1;
      imgTag.src = totalImg[count];
    }
    else{
      imgTag.src = totalImg[count];
    }
}