let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"The best way to find yourself in the service of others"`,
        person: `Mahtma Gandhi`
    },
    {
        quote: `"The only true wisdom is in knowing you know nothing.`,
        person: `Socrates`
    },
    {
        quote: `Success is not final, failure is not fatal: it is the courage to continue that counts."`,
        person: `Winston Churchill`
    },
    {
        quote: `"We cannot solve our problems with the same thinking we used when we created them."`,
        person: `Albert Einstein`
    },
    {
        quote: `"Believe you can and you're halfway there." `,
        person: ` Theodore Roosevelt`
    },
]; 

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    console.log('btn clicked');
})