// 🎵 Music (Universal)
const music = document.getElementById("bgMusic");

function startMusic() {
  if (music.paused) {
    music.play().catch(()=>{});
  }
}

document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });

// 🌌 Enter Universe
document.getElementById("enterBtn").addEventListener("click", function() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
});

// 💞 Love Counter
const startDate = new Date("January 25, 2025 21:30:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("loveCounter").innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}, 1000);

// 💌 Typing
const text = "Happy Birthday Gayatri 💖 You are my universe, my peace, my forever.";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typedText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
typeWriter();

// 🎂 Cake + Confetti
document.getElementById("cake").addEventListener("click", function() {
  document.getElementById("wishText").innerText = "Make a Wish My Love ✨";
  launchConfetti();
});

// 🎆 Confetti
function launchConfetti() {
  for(let i=0;i<50;i++){
    let conf = document.createElement("div");
    conf.style.position="fixed";
    conf.style.width="10px";
    conf.style.height="10px";
    conf.style.background="hotpink";
    conf.style.top=Math.random()*window.innerHeight+"px";
    conf.style.left=Math.random()*window.innerWidth+"px";
    conf.style.borderRadius="50%";
    conf.style.animation="fadeOut 2s forwards";
    document.body.appendChild(conf);
    setTimeout(()=>conf.remove(),2000);
  }
}

// 🔐 Secret
document.getElementById("secretBtn").addEventListener("click", function() {
  const pass = prompt("Enter Password:");
  if(pass === "0607") {
    document.getElementById("secretMessage").classList.remove("hidden");
  } else {
    alert("Wrong Password 💔");
  }
});

// 🌌 Animated Stars (Canvas)
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<120;i++){
  stars.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: Math.random()*2
  });
}

function animateStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="white";
  stars.forEach(star=>{
    ctx.beginPath();
    ctx.arc(star.x,star.y,star.size,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animateStars);
}

animateStars();
