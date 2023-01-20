var e1 = document.getElementById("k");
var e2 = document.getElementById("kk");

var quotes = 
[ 

{
    quote:'"You miss 100% of the shots you do not take."',
    name:"--Wayne Gretzy"
},
{
    quote:'"The best revenge is massive success."',
    name:"--Frank Sinatra"
},
{
    quote:'"Do not take life too seriously. You will not get out alive."',
    name:"--Elbert Hubbard"
},
{
    quote:'"It is not what happens to you, but how you react to it that matters."',
    name:"--Epictetus"
},
{
    quote:'"Resentment is like drinking poison and waiting for your enemies to die."',
    name:"--Nelson Mandela"
}
];

function getQuote()
{
   var i = Math.floor(Math.random() * quotes.length);
    e1.innerHTML = quotes[i].quote;
    e2.innerHTML = quotes[i].name;
}