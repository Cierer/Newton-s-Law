// Tracks number of attempts made by the user
let attempts = 0;

// Function triggered when user clicks "Submit"
function calculate(): void {

    // Get values from input fields and convert to numbers
    const vi = Number((document.getElementById("vi") as HTMLInputElement).value);
    const a = Number((document.getElementById("a") as HTMLInputElement).value);
    const t = Number((document.getElementById("t") as HTMLInputElement).value);
    const userAnswer = Number((document.getElementById("answer") as HTMLInputElement).value);

    // Send data to backend API
    fetch("http://localhost:3000/api/final-velocity", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // Convert data into JSON format
        body: JSON.stringify({ vi, a, t, userAnswer, attempts })
    })
    .then(res => res.json()) // Convert response to JSON
    .then(data => {
        // Update attempts count from server response
        attempts = data.attempts;

        // Display message (correct/incorrect) on UI
        document.getElementById("result")!.innerText = data.message;
    });
}
