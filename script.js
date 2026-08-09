const createFloatingHearts = (container, count = 18) => {
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");

    heart.className = "heart-float";
    heart.textContent = Math.random() > 0.5 ? "💖" : "❤️";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${4 + Math.random() * 4}s`;

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }
};

const createConfetti = (container, count = 100) => {
  if (!container) return;

  const colors = ["#fb7185", "#f59e0b", "#fde68a", "#e11d48", "#ffffff"];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${2 + Math.random() * 3}s`;

    container.appendChild(piece);

    setTimeout(() => piece.remove(), 5000);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const cake = document.getElementById("cakeContainer");

  if (cake) {
    const flame = document.getElementById("flame");
    const wishMessage = document.getElementById("wishMessage");
    const nextPageWrapper = document.getElementById("nextPageWrapper");
    const confettiContainer = document.getElementById("confettiContainer");
    const heartsContainer = document.getElementById("heartsContainer");
    const audio = document.getElementById("bdaySong");

    let started = false;

    const startSurprise = async () => {
      if (started) return;
      started = true;

      flame?.classList.add("sparkle");

      // THIS PART FIXES THE SONG ISSUE
      if (audio) {
        try {
          audio.currentTime = 0;
          await audio.play();
          console.log("Birthday song started successfully 🎵");
        } catch (error) {
          console.error("Song could not play:", error);
          alert(
            "Please make sure birthday.mp3 is present in the same folder as index.html"
          );
        }
      }

      createConfetti(confettiContainer, 120);
      createFloatingHearts(heartsContainer, 24);

      wishMessage?.classList.remove("hidden");

      setTimeout(() => {
        nextPageWrapper?.classList.remove("hidden");
      }, 2000);
    };

    cake.addEventListener("click", startSurprise);
  }

  // Balloon game
  const balloons = document.querySelectorAll(".balloon");
  const scoreValue = document.getElementById("scoreValue");

  if (balloons.length && scoreValue) {
    let score = 100;

    balloons.forEach((balloon) => {
      balloon.addEventListener("click", () => {
        score += 10;
        scoreValue.textContent = score;
      });
    });
  }

  // Blessing wheel
  const wheelButton = document.getElementById("spinWheelButton");
  const wheelResult = document.getElementById("wheelResult");

  if (wheelButton && wheelResult) {
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

    wheelButton.addEventListener("click", () => {
      const blessing =
        blessings[Math.floor(Math.random() * blessings.length)];

      wheelResult.textContent =
        `May this blessing stay with Radhika Di forever 🌸 — ${blessing}`;
    });
  }

  // Final surprise
  const surpriseButton = document.getElementById("finalSurpriseButton");
  const finalMessage = document.getElementById("finalMessage");

  surpriseButton?.addEventListener("click", () => {
    finalMessage?.classList.remove("hidden");
    createFloatingHearts(document.body, 30);
  });
});
