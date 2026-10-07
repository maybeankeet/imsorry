function showLove() {

  document.getElementById("message").style.display = "block";

  for (let i = 0; i < 30; i++) {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
      (20 + Math.random() * 30) + "px";

    heart.style.zIndex = "100";

    document.body.appendChild(heart);

    heart.animate(
      [
        {
          transform: "translateY(0)",
          opacity: 1
        },
        {
          transform: "translateY(-110vh)",
          opacity: 0
        }
      ],
      {
        duration: 3000 + Math.random() * 3000
      }
    );

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
}