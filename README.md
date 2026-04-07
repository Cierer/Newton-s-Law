# Newton-s-Law
The Newton’s Law Calculator is a full-stack web application that helps users calculate and verify final velocity using a basic physics formula. It combines frontend and backend technologies to create an interactive learning tool where users input initial velocity, acceleration, and time, then submit their calculated answer for validation.

The frontend is built using HTML, CSS, and TypeScript (compiled to JavaScript). It provides a simple user interface with input fields and a submit button. When the user clicks submit, a TypeScript function collects the input values, converts them into numbers, and sends them to the backend using the Fetch API. The frontend also tracks the number of attempts and displays feedback returned from the server dynamically.

The backend is developed using Node.js with the Express.js framework and written in TypeScript. It exposes an API endpoint that receives user input, calculates the correct final velocity using the formula vf = vi + at, and compares it to the user’s answer. The server includes logic to track the number of attempts and limits users to three tries. After three incorrect attempts, the correct answer is displayed.

Additional technologies include CORS middleware to enable communication between the frontend and backend, and JSON for data exchange.
