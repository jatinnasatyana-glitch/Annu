let pages = [
  {
    title: "Hey Khushi ❤️",
    text: "Jab tum meri life me aayi, sab kuch dheere-dheere khubsurat ho gaya…",
    photo: "images/khushi1.jpg"
  },
  {
    title: "That Smile 😊",
    text: "Tumhari smile meri sabse favourite cheez hai.",
    photo: "images/khushi2.jpg"
  },
  {
    title: "Beautiful You 🌸",
    text: "Tum bina try kiye hi perfect ho.",
    photo: "images/khushi3.jpg"
  },
  {
    title: "Us ❤️",
    text: "Hum saath ho to duniya thodi aur achhi lagti hai.",
    photo: "images/us1.jpg"
  },
  {
    title: "My Favourite Memory 🫶",
    text: "Ye moments mere dil ke bohot paas hain.",
    photo: "images/us2.jpg"
  },
  {
    title: "Always & Forever 💍",
    text: "I love you Khushi ❤️ aaj, kal aur hamesha.",
    photo: "images/us3.jpg"
  }
];

let i = 0;
let musicStarted = false;

function nextPage() {
  if (!musicStarted) {
    document.getElementById("bgm").play();
    musicStarted = true;
  }

  document.getElementById("title").innerText = pages[i].title;
  document.getElementById("text").innerText = pages[i].text;
  document.getElementById("photo").src = pages[i].photo;

  i++;
  if (i >= pages.length) i = 0;
}
function playMusic() {
  let music = document.getElementById("bgm");
  music.volume = 0.7;
  music.play();
}