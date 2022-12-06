var images = ["imgs/SlideShow/1.jpg", "imgs/SlideShow/2.jpg", "imgs/SlideShow/3.jpg", "imgs/SlideShow/4.jpg", "imgs/SlideShow/5.jpg"];
var i = 0;
var img = document.getElementById("img");
var pic = 0;



function Next() {


    i++;

    img.src = images[i];




    if (i = images.length - 1) {
        img.src = "6.jpg";
    }


}

function previous() {
    i--;


    img.src = images[i];



    if (i = 0) {
        img.src = "1.jpg";
    }

}
var pic = 0;
function play() {
    if (i = images.length - 1) {
        i = 0;

        pic = setInterval(function () {

            img.src = images[i];
            i++;
        }, 1000)
    }


    else if (i = 0) {
        clearInterval(pic);


    }



}


function stop() {
    clearInterval(pic);
}
