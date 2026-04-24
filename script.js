const today = new Date().getDay(); // 0=Sunday

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    const day = parseInt(btn.dataset.day);

    if (day === today) {
        btn.classList.add("active");
    }
});

tsParticles.load("particles", {
  particles: {
    number: { value: 200 },
    color: { value: "#ffffff" },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 1,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.3
    }
  },

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "attract"
      }
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4
      }
    }
  }
});