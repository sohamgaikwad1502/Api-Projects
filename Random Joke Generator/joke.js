const jokeContainer = document.querySelector('.joke');
const setupContainer = document.querySelector('.setup');
 
const deliveryContainer = document.querySelector('.delivery');


const btn = document.querySelector('.get-random');
const url = "https://v2.jokeapi.dev/joke/Any";


let getJoke = () => {
    
    fetch(url)
    .then(data => data.json())
    .then(item => {
        if(item.setup)
        {
            
            setupContainer.textContent = `${item.setup}`;
            deliveryContainer.textContent = "Wait for it..."
            setTimeout(() => {deliveryContainer.textContent = `${item.delivery}`},2500);
            
        }
        else 
        {
            deliveryContainer.textContent = "";
            jokeContainer.textContent = `${item.joke}`;
        }
    });
};

btn.addEventListener("click",getJoke);



