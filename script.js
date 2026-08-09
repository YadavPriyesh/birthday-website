// =========================================
// Floating Hearts
// =========================================
function createFloatingHearts(container, count = 18) {
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-float";
    heart.textContent = Math.random() > 0.4 ? "💖" : "❤️";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }
}

// =========================================
// Confetti
// =========================================
function createConfetti(container, count = 80) {
  if (!container) return;

  const colors = ["#fb7185", "#f59e0b", "#fde68a", "#e11d48"];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = 2 + Math.random() * 3 + "s";

    container.appendChild(piece);

    setTimeout(() => piece.remove(), 5000);
  }
}

// =========================================
// Cake Page
// =========================================
function initLandingPage() {
  const cake = document.getElementById("cakeContainer");
  if (!cake) return;

  const flame = document.getElementById("flame");
  const wishMessage = document.getElementById("wishMessage");
  const nextPageWrapper = document.getElementById("nextPageWrapper");
  const confettiContainer = document.getElementById("confettiContainer");
  const heartsContainer = document.getElementById("heartsContainer");
  const audio = document.getElementById("bdaySong");

  let started = false;

  cake.addEventListener("click", function () {
    if (started) return;
    started = true;

    cake.classList.add("celebrating");
    if (flame) flame.classList.add("sparkle");

    // Play song
    if (audio) {
      audio.currentTime = 0;
      audio.volume = 1;
      audio.play().catch(err => console.log(err));
    }

    createConfetti(confettiContainer, 120);
    createFloatingHearts(heartsContainer, 24);

    if (wishMessage) {
      wishMessage.classList.remove("hidden");
      wishMessage.classList.add("show");
    }

    // Show next button only
    setTimeout(() => {
      if (nextPageWrapper) {
        nextPageWrapper.classList.remove("hidden");
        nextPageWrapper.classList.add("show");
      }
    }, 2500);
  });
}
// =========================================
// Final Surprise Overlay
// =========================================
const initFinalSurprise = () => {
  const openButton = document.getElementById("finalSurpriseButton");
  const overlay = document.getElementById("finalOverlay");
  const closeButton = document.getElementById("closeOverlayButton");
  const hearts = document.getElementById("overlayHearts");

  // Agar overlay ya close button nahi mila to function stop
  if (!overlay || !closeButton) return;

  // Open overlay
  if (openButton) {
    openButton.addEventListener("click", () => {
      overlay.classList.add("show");

      if (hearts) {
        createFloatingHearts(hearts, 32);
      }
    });
  }

  // Close overlay
  closeButton.addEventListener("click", () => {
    overlay.classList.remove("show");
  });

  // Close when clicking outside the card
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.classList.remove("show");
    }
  });
};





// =========================================
// Typewriter
// =========================================
function initTypewriter() {
  const target = document.getElementById("typewriterText");
  if (!target) return;

 const letter = `
Dear Radhika Di,

    Wishing you a very Happy Birthday! 🎂✨

    I just want to remind you that you are capable of achieving
    much more than you think. You have always worked hard, stayed
    patient, and handled responsibilities with strength and maturity.

    ──────────────────────
          ✨ YOUR NEXT 5 YEARS ✨
    ──────────────────────

    The next 5 years are going to be very important for you.
    I truly believe that everything will fall into place.

        🚀  Your career will grow
        🎯  Your goals will become reality
        💪  Your confidence will become stronger
        🌟  Your hard work will bring success

    Step by step, sab ho jayega. Keep learning, keep growing,
    and never doubt yourself.

    Challenges may come sometimes, but they will only make you
    stronger and more successful. One day you will look back and
    realize that all the effort was worth it.

    ──────────────────────
            🌸 MY WISHES 🌸
    ──────────────────────

        ✓  Keep progressing in your career 🚀
        ✓  Stay healthy and confident 🌸
        ✓  Travel, explore, and enjoy life ✨
        ✓  Achieve every goal you have set for yourself 🎯

    I am confident that the coming years will bring success,
    happiness, stability, and many new opportunities for you.
    Your best chapter is still ahead. 💫

    Happy Birthday, Di! 🌸

    Keep shining, keep winning, and remember —

        ✨ THE NEXT 5 YEARS WILL CHANGE
           EVERYTHING FOR THE BETTER ✨

                                             — Priyesh ❤️
`;

  let index = 0;

  function type() {
    if (index <= letter.length) {
      target.textContent = letter.slice(0, index);
      index++;
      setTimeout(type, 20);
    }
  }

  type();
}

// =========================================
// Balloon Game
// =========================================
function initBalloonGame() {
  const balloons = document.querySelectorAll(".balloon");
  const scoreValue = document.getElementById("scoreValue");

  if (!balloons.length || !scoreValue) return;

  let score = 100;

  balloons.forEach(balloon => {
    balloon.addEventListener("click", () => {
      score += 10;
      scoreValue.textContent = score;
      balloon.classList.add("pop");

      setTimeout(() => balloon.classList.remove("pop"), 1000);
    });
  });
}

// =========================================
// Blessing Wheel
// =========================================
function initBlessingWheel() {
  const wheel = document.getElementById("blessingWheel");
  const button = document.getElementById("spinWheelButton");
  const result = document.getElementById("wheelResult");

  if (!wheel || !button || !result) return;

  const blessings = [
    "Happiness",
    "Good Health",
    "Success",
    "Peace",
    "Prosperity",
    "Travel",
    "Family Joy",
    "Endless Smiles"
  ];

  let rotation = 0;

  button.addEventListener("click", () => {
    button.disabled = true;

    const randomIndex = Math.floor(Math.random() * blessings.length);
    rotation += 360 * 5 + randomIndex * 45;

    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
      result.textContent = "🌸 " + blessings[randomIndex] + " for Radhika Di!";
      button.disabled = false;
    }, 4000);
  });
}

// =========================================
// Page Song
// =========================================
function initPageSong() {
  const pageSong = document.getElementById("pageSong");
  if (!pageSong) return;

  pageSong.volume = 0.5;

  pageSong.play().catch(() => {
    document.addEventListener("click", () => {
      pageSong.play();
    }, { once: true });
  });
}

// =========================================
// Start Everything
// =========================================
document.addEventListener("DOMContentLoaded", function () {
  initLandingPage();
  initTypewriter();
  initBalloonGame();
  initBlessingWheel();
  initPageSong();
});
