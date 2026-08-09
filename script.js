const createFloatingHearts = (container, count = 18) => {
  if (!container) return;

  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("div");
    heart.className = "heart-float";
    heart.textContent = Math.random() > 0.4 ? "💖" : "❤️";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${4 + Math.random() * 4}s`;
    heart.style.animationDelay = `${Math.random() * 0.8}s`;

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 8500);
  }
};

const createConfetti = (container, count = 90) => {
  if (!container) return;

  const colors = ["#fb7185", "#f59e0b", "#fde68a", "#e11d48", "#ffffff"];

  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${2.5 + Math.random() * 2.5}s`;
    piece.style.transform = `translateY(-20px) rotate(${Math.random() * 360}deg)`;

    container.appendChild(piece);

    setTimeout(() => piece.remove(), 5200);
  }
};

const initLandingPage = () => {
  const cake = document.getElementById("cakeContainer");
  if (!cake) return;

  const flame = document.getElementById("flame");
  const glow = document.querySelector(".cake-glow");
  const wishMessage = document.getElementById("wishMessage");
  const confettiContainer = document.getElementById("confettiContainer");
  const heartsContainer = document.getElementById("heartsContainer");
  const audio = document.getElementById("bdaySong");

  let started = false;

  const startSurprise = () => {
    if (started) return;
    started = true;

    cake.classList.add("celebrating");
    flame?.classList.add("sparkle");
    glow?.classList.add("active");

    if (audio) {
      audio.volume = 0.9;

      audio.play().catch(() => {
        console.log("Autoplay blocked until user interaction is fully available.");
      });
    }

    createConfetti(confettiContainer, 120);
    createFloatingHearts(heartsContainer, 24);

    wishMessage?.classList.remove("hidden");

    requestAnimationFrame(() => {
      wishMessage?.classList.add("show");
    });

    setTimeout(() => {
      window.location.href = "memories.html";
    }, 4000);
  };

  cake.addEventListener("click", startSurprise);

  cake.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      startSurprise();
    }
  });
};

const initTypewriter = () => {
  const target = document.getElementById("typewriterText");
  if (!target) return;

  const letter = `Dear Radhika Di,

Life changes, people grow, and responsibilities increase, but one thing will never change — my respect and love for you.

You have always been my guide, protector, and biggest supporter. Thank you for every sacrifice, every scolding that made me better, and every smile that gave me confidence.

On your birthday, I don’t just wish you happiness. I wish you peace in your heart, strength in difficult moments, success in your dreams, and endless reasons to smile every day.

You are not just my sister — you are my blessing.

Happy Birthday, Di.

— Priyesh ❤️`;

  let index = 0;

  const cursor = document.createElement("span");
  cursor.className = "typewriter-cursor";

  const type = () => {
    if (index <= letter.length) {
      target.textContent = letter.slice(0, index);
      target.appendChild(cursor);
      index += 1;
      setTimeout(type, 24);
    }
  };

  type();
};

const initContinueButton = () => {
  const button = document.getElementById("continueCelebration");

  button?.addEventListener("click", () => {
    window.location.href = "celebration.html";
  });
};

const initBalloonGame = () => {
  const balloons = document.querySelectorAll(".balloon");
  const scoreValue = document.getElementById("scoreValue");

  if (!balloons.length || !scoreValue) return;

  let score = 100;

  balloons.forEach((balloon) => {
    balloon.addEventListener("click", () => {
      if (balloon.classList.contains("pop")) return;

      balloon.classList.add("pop");

      score = Math.min(1000, score + 10);
      scoreValue.textContent = score;

      setTimeout(() => {
        balloon.classList.remove("pop");
      }, 1200);
    });
  });
};

const initBlessingWheel = () => {
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
    "Endless Smiles",
  ];

  let currentRotation = 0;

  button.addEventListener("click", () => {
    button.disabled = true;

    const index = Math.floor(Math.random() * blessings.length);
    const segment = 360 / blessings.length;
    const extraRotation = 360 * 5 + (360 - index * segment - segment / 2);

    currentRotation += extraRotation;
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    result.textContent = "✨ Sending a beautiful blessing to Di...";

    setTimeout(() => {
      result.textContent = `May this blessing stay with Radhika Di forever 🌸 — ${blessings[index]}`;
      button.disabled = false;
    }, 4100);
  });
};

const initFinalSurprise = () => {
  const openButton = document.getElementById("finalSurpriseButton");
  const overlay = document.getElementById("finalOverlay");
  const closeButton = document.getElementById("closeOverlayButton");
  const hearts = document.getElementById("overlayHearts");

  if (!openButton || !overlay || !closeButton) return;

  openButton.addEventListener("click", () => {
    overlay.classList.add("show");
    createFloatingHearts(hearts, 32);
  });

  closeButton.addEventListener("click", () => {
    overlay.classList.remove("show");
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.classList.remove("show");
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initLandingPage();
  initTypewriter();
  initContinueButton();
  initBalloonGame();
  initBlessingWheel();
  initFinalSurprise();
});
