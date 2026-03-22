let music = false;

const mingming = [
  "mingyu/1.jpg","mingyu/2.jpg","mingyu/3.jpg","mingyu/4.jpg",
  "mingyu/5.jpg","mingyu/6.jpg","mingyu/7.jpg","mingyu/8.jpg",
  "mingyu/9.jpg","mingyu/10.jpg","mingyu/11.jpg","mingyu/12.jpg",
  "mingyu/13.jpg","mingyu/14.jpg","mingyu/15.jpg","mingyu/16.jpg",
  "mingyu/17.jpg","mingyu/18.jpg","mingyu/19.jpg","mingyu/20.jpg",
  "mingyu/21.jpg","mingyu/22.jpg","mingyu/23.jpg","mingyu/24.jpg",
  "mingyu/25.jpg","mingyu/26.jpg","mingyu/27.jpg","mingyu/28.jpg",
  "mingyu/29.jpg","mingyu/30.jpg","mingyu/31.jpg","mingyu/32.jpg",
  "mingyu/33.jpg"
];

const texts = [
  'NYAHAHAHAHAHA🤣',
  'LJ na masama pakiramdam🤒',
  'MWEHEHEHEHEHE😈',
  'MAY SAKIT YARN🤪',
  'Uy buhay ka pa pala 😭',
  'Gumising ka na LJ uwu👉👈',
  'Ayan na siya oh, main character 😌',
  'Nagising na ang alamat 😱',
  'Certified tigasin 🤡',
  'Di ka pa napapagod? 😭',
  'Gising ka pa? Himala 😱',
  'Baka LJ yarnn Lebron James 👑',
  'Gayahin moko healthy living 😆',
];

const container = document.querySelector(".container");

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function changeBackground() {
  container.style.background = randomColor();
}

setInterval(changeBackground, 200);

function floatingMingming() {
  const img = document.createElement("img");
  const p = document.createElement("p");
  
  const randomImg = Math.floor(Math.random() * mingming.length);
  const randomText = Math.floor(Math.random() * texts.length);
  img.src = mingming[randomImg];
  p.textContent = texts[randomText];

  img.className = "floating";
  p.className = "floating";

  const randomXimg = Math.random() * window.innerWidth;
  const randomXtext = Math.random() * window.innerWidth;
  img.style.left = `${randomXimg}px`;
  p.style.left = `${randomXtext}px`;

  img.style.top = `${window.innerHeight}px`;
  p.style.top = `${window.innerHeight}px`;

  document.body.appendChild(img);
  document.body.appendChild(p);

  img.addEventListener("animationend", () => img.remove());
  p.addEventListener("animationend", () => p.remove());
}

setInterval(floatingMingming, 500);

function overlay(){
  document.body.insertAdjacentHTML("beforebegin", `
      <div class="overlay">
        <div class="gift-box">
          <div class="bow"></div>
          <h2>Open it jijay! <br> NYAHAHAHAHA</h2>
          <button class="play">Open</button>
        </div>
      </div>
  `); 

  document.querySelector(".play").addEventListener("click", playMusic);
}

function playMusic(){

  document.querySelector(".overlay").remove();
  const vid = document.querySelector(".svt-mp4");

  if(music)
    return;

  vid.muted = false;
  vid.volume = 1;
  vid.play();

  setTimeout(() => {
    vid.classList.add("show");
    vid.style.display = "flex";
    addGif();
  }, 15000);

  music = true;
}

function addGif(){
  document.body.insertAdjacentHTML("beforebegin", `
      <img class="gif1" src="doggo1.gif">
      <img class="gif2" src="cats1.gif">
      <img class="gif3" src="cat2.gif">
      <img class="gif4" src="mingyu-dance.gif">
      <img class="gif5" src="doggo2.gif">
  `); 
  const gif1 = document.querySelector(".gif1");
  const gif2 = document.querySelector(".gif2");
  const gif3 = document.querySelector(".gif3");
  const gif4 = document.querySelector(".gif4");
  const gif5 = document.querySelector(".gif5");

  setTimeout(() => {
    gif1.style.opacity = 1;
  }, 3000);

  setTimeout(() => {
    gif2.style.opacity = 1;
  }, 5500);

  setTimeout(() => {
    gif3.style.opacity = 1;
  }, 16000);

  setTimeout(() => {
    gif4.style.opacity = 1;
  }, 13000);

  setTimeout(() => {
    gif5.style.opacity = 1;
  }, 8000);

  setTimeout(() => {
    [gif1, gif2, gif3, gif4, gif5].forEach(g => g.classList.add("dance"));
  }, 20000)

}

overlay();
