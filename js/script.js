console.log("script.js connected!");

// Store answers
const userAnswers = {};

// Track clicks
const questionBlocks = document.querySelectorAll(".question-block");
questionBlocks.forEach((block, index) => {
    const buttons = block.querySelectorAll(".answer-btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Save answer
            userAnswers[index] = button.dataset.answer;

            // Highlight selected button
            buttons.forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
        });
    });
});

// Show result
document.getElementById("show-result").addEventListener("click", () => {
    let yesCount = Object.values(userAnswers).filter(a => a === "A").length;

    let result = "";
    if (yesCount >= 3) result = "You are adventurous and outgoing!";
    else if (yesCount === 2) result = "You are balanced and flexible!";
    else result = "You are relaxed and calm!";

    document.getElementById("result-text").textContent = result;
    document.getElementById("result-container").style.display = "block";
});