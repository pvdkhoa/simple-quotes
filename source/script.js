// Array of quotes
const quotes = [
    "\"The future belongs to those who believe in the beauty of their dreams.\" - Eleanor Roosevelt",
    "\"Life is 10% what happens to us and 90% how we react to it.\" - Charles R. Swindoll",
    "\"The only limit to our realization of tomorrow will be our doubts of today.\" - Franklin D. Roosevelt",
    "\"Believe you can and you're halfway there.\" - Theodore Roosevelt",
    "\"The best time to plant a tree was 20 years ago. The second best time is now.\" - Chinese Proverb",
    "\"The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.\" - Joel Brown",
    "\"Opportunities don't happen. You create them.\" - Chris Grosser",
    "\"The only way to do great work is to love what you do.\" - Steve Jobs",
    "\"Innovation distinguishes between a leader and a follower.\" - Steve Jobs",
    "\"Your time is limited, don't waste it living someone else's life.\" - Steve Jobs",
    "\"Stay hungry, stay foolish.\" - Steve Jobs",
    "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\" - Winston Churchill",
    "\"The way to get started is to quit talking and begin doing.\" - Walt Disney",
    "\"Don't be afraid to give up the good to go for the great.\" - John D. Rockefeller"

  ];
  
const generateRandomQuote = function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
  
const generateButton = document.getElementById("generateBtn");
generateButton.addEventListener("click", generateRandomQuote);