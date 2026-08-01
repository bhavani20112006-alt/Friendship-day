/*function openSurprise() {
    window.location.href = "memories.html";
}

const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg"
];

let i = 0;

setInterval(() => {
    const img = document.getElementById("slider");

    if(img){
        i++;
        if(i >= photos.length) i = 0;
        img.src = photos[i];
    }

}, 2500);

function nextPage(){
    alert("💌 Letter Page coming in Part 3!");
}*/
/*const photos = [
    "trio.jpeg",
    "trio1.jpeg",
    "trio2.jpeg",
    "trio3.jpeg"
];

let index = 0;

setInterval(() => {
    index = (index + 1) % photos.length;
    document.getElementById("slider").src = photos[index];
}, 3000);*/

// ======================
// PHOTO SLIDESHOW
// =====================
//=

function openSurprise() {

    document.getElementById("memories").scrollIntoView({
        behavior: "smooth"
    });

}

const photos = [
    "memories/trio.jpeg",
    "memories/trio1.jpeg",
    "memories/trio2.jpeg",
    "memories/trio3.jpeg"
];
const captions = [
    "❤️ The day our friendship became stronger.",
    "😂 Three idiots, one unforgettable memory.",
    "📸 Smiles we'll never forget.",
    "🤝 Friends forever, no matter what."
];

let index = 0;

setInterval(() => {

    const img = document.getElementById("slider");

    if(img){

        index = (index + 1) % photos.length;

        img.style.opacity = 0;

        setTimeout(()=>{

            img.src = photos[index];

            img.style.opacity = 1;

            const msg=document.getElementById("caption");
            if(msg){
                msg.innerHTML=captions[index];
            }

        },400);

    }

},3000);

// ======================
// FLOATING HEARTS
// ======================

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

},400);
function toggleMusic() {
    const music = document.getElementById("bgMusic");

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
