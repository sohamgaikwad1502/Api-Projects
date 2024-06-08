const quote = document.getElementById('quote');
const author = document.getElementById('author');
const button = document.getElementById('Get-Quote');
const url = 'https://api.quotable.io/random';

button.addEventListener('click' , getQuote);
window.addEventListener('load',getQuote);

function getQuote()
{
    fetch(url)
    .then((data) => data.json())
    .then((item) => 
    {
      author.innerText = item.author;
      quote.innerText = item.content;
        
    }
    );
};


