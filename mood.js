

const moodSlider = document.getElementById("moodSlider");
const emoji = document.getElementById("emoji");
const moodText = document.getElementById("moodText");
const quoteBubble = document.getElementById("quoteBubble");

const moodMap = {
  0: {
    emoji: "😢",
    text: "Really Sad",
    quote: "It’s okay to have bad days, sweetpea. Even clouds rain to bloom flowers 🌧️🌸"
  },
  1: {
    emoji: "😔",
    text: "A bit Down",
    quote: "Gentle reminder: you’re doing the best you can and that’s enough 💛"
  },
  2: {
    emoji: "😐",
    text: "Okay",
    quote: "Even just surviving today is brave. Proud of you 🌷"
  },
  3: {
    emoji: "😊",
    text: "Pretty Good",
    quote: "Keep shining softly, you warm the world just by being 🌞"
  },
  4: {
    emoji: "🤩",
    text: "Super Happy!",
    quote: "Bottle this joy and dance with it forever! ✨💃"
  }
};

moodSlider.addEventListener("input", () => {
  const value = moodSlider.value;
  emoji.textContent = moodMap[value].emoji;
  moodText.textContent = moodMap[value].text;

  emoji.classList.add("pop-emoji");

  setTimeout(() => {
    emoji.classList.remove("pop-emoji");
  }, 400);

  // Wait a second, then hide slider and show quote
  setTimeout(() => {
    moodSlider.style.display = "none";
    moodText.style.display = "none";
    quoteBubble.textContent = moodMap[value].quote;
    quoteBubble.classList.remove("hidden");
    quoteBubble.style.display = "block";
  }, 600);
});
