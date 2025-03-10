// Import required modules
const readline = require('readline');

/**
 * Greets the user by name and shows current date/time
 * @param {string} name - User's name
 */
function greetUser(name) {
    // Get current date and time
    const now = new Date();
    const dateTimeStr = now.toLocaleString(); // Format for readability

    // Display greeting and timestamp
    console.log(`\nHello, ${name}!`);
    console.log(`Current date and time: ${dateTimeStr}`);
}

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Main execution with error handling
console.log("Hello, World!"); // Initial greeting

rl.question('Please enter your name: ', (input) => {
    try {
        const name = input.trim();

        // Validate input
        if (!name) {
            throw new Error('Name cannot be empty');
        }

        greetUser(name);
    } catch (error) {
        console.error(`\nError: ${error.message}`);
        console.log('Please restart the program and enter a valid name.');
    } finally {
        rl.close();
    }
});