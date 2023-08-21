const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
// const threadsBtn = document.getElementById('threads');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];
// show loader
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
//hide loader
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}
// show new  Quote
function newQuote() {
    loading();
    // pick a random quote from api quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //    check if Author field is blank and replace it with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknow';
    }
    else {
        authorText.textContent = quote.author;
    }
    // check quote length to determine styling
    if (quote.text.length > 130) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');

    }
    // set quote hide loader

    quoteText.textContent = quote.text;
    complete();
}

// Get Quotes From API

async function getQuotes() {
    loading();
    const apiURl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) { }
    // catch error here

}

// tweer Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//thread Quote
// function threadQuote(){
//     const threadUrl= `https://thread.com/intent/thread?text=${quoteText.textContent} - ${authorText.textContent}`;
//     window.open(threadUrl,'_blank');
// }

// event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
// threadsBtn.addEventListener('click',threadQuote);


//on load
getQuotes();
