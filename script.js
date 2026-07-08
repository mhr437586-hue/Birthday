const gift = document.getElementById("giftBox");
const music = document.getElementById("bgMusic");
const surprise = document.getElementById("surprise");

gift.addEventListener("click", function () {
music.play();
    gift.style.display = "none";

    document.querySelector(".click").style.display = "none";

    surprise.classList.remove("hidden");
launchConfetti();

launchConfetti();
for(let i=0;i<15;i++){
    setTimeout(createFirework, i * 250);
}

});
const typing = document.getElementById("typing");

const text = "🎉 Happy Birthday Dear Hubby 💙 🎉";

let i = 0;

gift.addEventListener("click", function () {

    typing.innerHTML = "";

    i = 0;

    const timer = setInterval(() => {

        typing.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(timer);

        }

    }, 90);

});
function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💙";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*3)+"s";

heart.style.fontSize=(18+Math.random()*20)+"px";

document.getElementById("hearts-container").appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(createHeart,400);
function createBalloon(){

const balloon=document.createElement("div");

balloon.className="balloon";

const colors=["🎈","🎈","🎈"];

balloon.innerHTML=colors[Math.floor(Math.random()*colors.length)];

balloon.style.left=Math.random()*100+"vw";

balloon.style.animationDuration=(8+Math.random()*5)+"s";

document.getElementById("balloons-container").appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},13000);

}

setInterval(createBalloon,1200);
function launchConfetti(){

const colors=[
"#00BFFF",
"#1E90FF",
"#87CEFA",
"#FFFFFF",
"#4FC3F7"
];

for(let i=0;i<120;i++){

const piece=document.createElement("div");

piece.className="confetti";

piece.style.left=Math.random()*100+"vw";

piece.style.background=colors[Math.floor(Math.random()*colors.length)];

piece.style.animationDuration=(3+Math.random()*3)+"s";

document.getElementById("confetti-container").appendChild(piece);

setTimeout(()=>{

piece.remove();

},6000);

}

}
function shootingStar(){

const star=document.createElement("div");

star.className="shooting-star";

star.style.top=Math.random()*40+"vh";

star.style.left=(70+Math.random()*30)+"vw";

document.getElementById("shooting-stars").appendChild(star);

setTimeout(()=>{

star.remove();

},3000);

}

setInterval(shootingStar,2500);
const loveBtn=document.getElementById("loveBtn");

const popup=document.getElementById("lovePopup");

const closeBtn=document.getElementById("closePopup");

loveBtn.addEventListener("click",()=>{

popup.classList.remove("hidden");

});

closeBtn.addEventListener("click",()=>{

popup.classList.add("hidden");

});
function createFirework(){

const firework=document.createElement("div");

firework.className="firework";

firework.style.left=Math.random()*100+"vw";

firework.style.top=(10+Math.random()*60)+"vh";

document.getElementById("fireworks").appendChild(firework);

setTimeout(()=>{

firework.remove();

},1500);

}