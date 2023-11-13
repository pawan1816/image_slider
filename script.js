let flag=0;

function controller(x){
    flag+=x;
    slideshow(flag); 
}
slideshow(flag);


function slideshow(num){
    let slides =document.getElementsByClassName('silde');
    if(num==slides.length){
        flag=0;
        num=0;
    }
    else if(num<0){
        flag=slides.length-1;
        num=slides.length-1;
    }
    for(let y of slides){
        y.style.display="none";
    }
    slides[num].style.display="block";
}