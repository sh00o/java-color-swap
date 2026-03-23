const text = document.getElementById("text");

document.onkeydown = (e) => {
  if (e.key === "c") {
    text.style.color = "cyan";
  }
};
