// LeetSpeak Converter
// Developed by Savio Xavier

function convertToLeet() {
  // User input string
  var str = document.querySelector("#regular-text").value;

  // System output string
  var result = document.querySelector("#result");

  var type = document.getElementById("leet-type").value;

  var chars = {};

  if (type == "sp") {
    chars = {
      a: "@",
      b: "ß",
      c: "©",
      d: "D",
      e: "€",
      f: "ƒ",
      g: "G",
      h: "#",
      i: "!",
      j: "ĵ",
      k: "₭",
      l: "ʅ",
      m: "ʍ",
      n: "π",
      o: "ø",
      p: "₱",
      q: "ℚ",
      r: "₹",
      s: "$",
      t: "Ŧ",
      u: "Ü",
      v: "▼",
      w: "ω",
      x: "×",
      y: "¥",
      z: "ẕ",
    };

    str.toLowerCase();

    var convertResult = str.replace(
      /[abcdefghijklmnopqrstuvwxyz]/g,
      (m) => chars[m]
    );

    result.textContent = convertResult;
  } else if (type == "num") {
    chars = {
      a: "4",
      e: "3",
      i: "1",
      o: "0",
      s: "5",
    };
    str.toLowerCase();

    var convertResult = str.replace(/[aeios]/g, (m) => chars[m]);

    result.textContent = convertResult;
  }
}

setInterval(convertToLeet, 10);

// TypeIt code --START--

var textSpeed = 20;

var introText =
  "Leet, also known as eleet or leet-speak, is another alphabet for the English language that is used mostly on the internet. It uses various combinations of ASCII characters to replace Latinate letters.";

var secondText =
  "For example, leet spellings of the word leet include 1337 and l33t. It is used on the internet in forums, chat rooms and online games.";

// Defines a new TypeIt instance; 'Types' a specified string and customizes it manually by using other methods (pause(), break() etc.) as opposed to default values; afterComplete deletes cursor after completion

new TypeIt("#heading", {
  speed: textSpeed,
  waitUntilVisible: true,
  afterComplete: function (step, instance) {
    instance.destroy();
  },
})
  .pause(2000)
  .type("LeetSpeak")
  .go();

new TypeIt("#intro", {
  speed: textSpeed,
  waitUntilVisible: true,
  lifeLike: true,
  afterComplete: function (step, instance) {
    instance.destroy();
  },
})
  .pause(2500)
  .type(introText)
  .break()
  .break()
  .pause(800)
  .type(secondText)
  .go();

var footerText =
  "Developed by Savio Xavier. Find me on <a href='https://github.com/savioxavier'target='_blank'>GitHub</a>";

new TypeIt("#footer-text", {
  speed: textSpeed,
  afterComplete: function (step, instance) {
    instance.destroy();
  },
})
  .pause(10000)
  .type(footerText)
  .go();

// TypeIt code --END--

// Theme changer

let root = document.documentElement;

// Function changes the CSS variables textcol and bgcol (text color and background color, respectively.) All theme colors are from Opera GX

function tp(textColor, bgColor) {
  root.style.setProperty("--textcol", textColor);
  root.style.setProperty("--bgcol", bgColor);
}

var theme = "Hackerman"; // H4CK3RM4N, if you're feeling leety

var tname = document.getElementById("click-to-change");

function changeTheme() {
  if (theme == "Hackerman") {
    theme = "Coming Soon";
  } else if (theme == "Coming Soon") {
    theme = "Vaporwave";
  } else if (theme == "Vaporwave") {
    theme = "Lambda";
  } else if (theme == "Lambda") {
    theme = "Hackerman";
  }

  if (theme == "Hackerman") {
    tp("#33ff4e", "#213123");
  } else if (theme == "Coming Soon") {
    tp("#fdf008", "#004852");
  } else if (theme == "Vaporwave") {
    tp("#47ffe7", "#3c153a");
  } else if (theme == "Lambda") {
    tp("#ff9900", "#262c2a");
  }
  tname.textContent = `< ${theme} >`;
}

tname.textContent = `< ${theme} >`;

// Toggles theme everytime the theme 'button' is clicked

tname.addEventListener("click", changeTheme);

// You know the rules and so I
// I know it's annoying, but I really had to do it

function getRickrolled() {
  var rickrollText =
    "W3'r3 n0 5tr4ng3r5 t0 l0v3\nY0u kn0w th3 rul35 4nd 50 d0 I\nA full c0mm1tm3nt'5 wh4t I'm th1nk1ng 0f\nY0u w0uldn't g3t th15 fr0m 4ny 0th3r guy\n\nI ju5t w4nn4 t3ll y0u h0w I'm f33l1ng\nG0tt4 m4k3 y0u und3r5t4nd\n\nN3v3r g0nn4 g1v3 y0u up\nN3v3r g0nn4 l3t y0u d0wn\nN3v3r g0nn4 run 4r0und 4nd d353rt y0u\nN3v3r g0nn4 m4k3 y0u cry\nN3v3r g0nn4 54y g00dby3\nN3v3r g0nn4 t3ll 4 l13 4nd hurt y0u\n\nW3'v3 kn0wn 34ch 0th3r f0r 50 l0ng\nY0ur h34rt'5 b33n 4ch1ng but y0u'r3 t00 5hy t0 54y 1t\nIn51d3 w3 b0th kn0w wh4t'5 b33n g01ng 0n\nW3 kn0w th3 g4m3 4nd w3'r3 g0nn4 pl4y 1t\n\nAnd 1f y0u 45k m3 h0w I'm f33l1ng\nD0n't t3ll m3 y0u'r3 t00 bl1nd t0 533\n\nN3v3r g0nn4 g1v3 y0u up\nN3v3r g0nn4 l3t y0u d0wn\nN3v3r g0nn4 run 4r0und 4nd d353rt y0u\nN3v3r g0nn4 m4k3 y0u cry\nN3v3r g0nn4 54y g00dby3\nN3v3r g0nn4 t3ll 4 l13 4nd hurt y0u\n\nN0, I'm n3v3r g0nn4 g1v3 y0u up\nN0, I'm n3v3r g0nn4 l3t y0u d0wn\nN0, I'll n3v3r run 4r0und 4nd hurt y0u\nN3v3r, 3v3r d353rt y0u\n\nW3'v3 kn0wn 34ch 0th3r f0r 50 l0ng\nY0ur h34rt'5 b33n 4ch1ng but\n\nN3v3r g0nn4 g1v3 y0u up\nN3v3r g0nn4 l3t y0u d0wn\nN3v3r g0nn4 run 4r0und 4nd d353rt y0u\nN3v3r g0nn4 m4k3 y0u cry\nN3v3r g0nn4 54y g00dby3\nN3v3r g0nn4 t3ll 4 l13 4nd hurt y0u\n\nN0, I'm n3v3r g0nn4 g1v3 y0u up\nN0, I'm n3v3r g0nn4 l3t y0u d0wn\nN0, I'll n3v3r run 4r0und 4nd hurt y0u\nI'll n3v3r, 3v3r d353rt y0u";

  console.log(rickrollText);
  console.log("Themes from Opera GX");
  console.log("Intro from https://en.wikipedia.org/wiki/Leet");
}

getRickrolled();
