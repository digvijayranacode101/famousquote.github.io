const btn = document.querySelector('.button')
const quote = document.querySelector('.actualQuote')
const person = document.querySelector('.person')
const allQuotes =[
    {
        name:'Nelson Mandela',
        theQuote:'"The greatest glory in living lies not in never falling, but in rising every time we fall."'
    },
    {
        name:'Walt Disney',
        theQuote:'"The way to get started is to quit talking and begin doing."'
    },
    {
        name:'Eleanor Roosevelt',
        theQuote:'"If life were predictable it would cease to be life, and be without flavor."'
    },
    {
        name:'John Lennon',
        theQuote:'"Life is what happens when you\'re busy making other plans."'
    },
    {
        name:'Franklin D. Roosevelt',
        theQuote:'"When you reach the end of your rope, tie a knot in it and hang on."'
    },
    {
        name:'Robert Louis Stevenson',
        theQuote:'"Don\'t judge each day by the harvest you reap but by the seeds that you plant."'
    },
    {
        name:'Aristotle',
        theQuote:'"It is during our darkest moments that we must focus to see the light."'
    },
    {
        name:'Anne Frank',
        theQuote:'"Whoever is happy will make others happy too."'
    },
    {
        name:'Maya Angelou',
        theQuote:'"You will face many defeats in life, but never let yourself be defeated."'
    },
    {
        name:'Vincent van Gogh',
        theQuote:'"I would rather die of passion than of boredom."'
    }
]

btn.addEventListener('click',giveQuote);
Quote=''
function giveQuote(){
 let number = Math.floor(Math.random()*allQuotes.length)
 
console.log(number)
 Quote = allQuotes[number].theQuote
 quote.innerHTML = Quote
 Person=allQuotes[number].name
 person.innerHTML = Person
}
