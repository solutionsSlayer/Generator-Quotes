// Constants
const quoteText = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#author');
const newQuote = document.querySelector('#new-quote');
const quoteContainer = document.querySelector('#quote-container');
const loaderContainer = document.querySelector('.loader-container');

// Get Quote from API
async function getQuote() {
    loaderContainer.style.display = 'block';
    quoteContainer.style.display = 'none';

    try {
        const res = await fetch('http://localhost:3000/random/quotes');
        const data = await res.json();

        loaderContainer.style.display = 'none';
        quoteContainer.style.display = 'block';
        
        // Quote text condition
        if(data.quoteText !== '') {
            quoteText.innerHTML = data.quoteText;
        } else {
            quoteText.innerHTML = 'No quote.'
        }

        // Quote author condition
        if(data.quoteAuthor !== '') {
            quoteAuthor.innerHTML = data.quoteAuthor;
        } else {
            quoteAuthor.innerHTML = 'Unknown'
        }
        console.log(data);
    } catch (err) {
        getQuote();
        console.log('Error: ', err, err.message, err.stacktrace);
    }
}

newQuote.addEventListener('click', () => {
    getQuote();
});

// On Load
getQuote();

