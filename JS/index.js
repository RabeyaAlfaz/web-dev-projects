document.getElementById('nav').style.backgroundImage = "url(Multimedia/uni.jpeg)";
document.getElementById('nav').style.height= "500px";
document.getElementById('nav').style.backgroundRepeat= "no-repeat";
document.getElementById('nav').style.backgroundSize= "cover";


const mainSecondBtn = () =>
{
    const mainBtn = document.querySelectorAll(".main-btn");
    for (let i = 0; i < mainBtn.length; i++) {
        mainBtn[i].style.color = "white";
    }
}
