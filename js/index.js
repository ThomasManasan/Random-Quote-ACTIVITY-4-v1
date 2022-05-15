// for the quote preferences 	 
var quoteAPI = 'https://type.fit/api/quotes';
// var btn1 = document.querySelector('.new-quote');
// var btn2 = document.querySelector('.copyQuote');



function getQuote(){
   fetch(quoteAPI)
  .then(res => res.json()) 
  .then(data => JSON.stringify(data[Math.floor(Math.random(data)  * data.length)]))
  .then(data2 => displayQuote(`"${JSON.parse(data2).text}" 
  -${JSON.parse(data2).author}`));
}


 		function displayQuote(quote){
	    var quoteText = document.querySelector('.quote-text')
	    quoteText.textContent = quote;
	}

 newQuoteButton = document.querySelector('.new-quote');

newQuoteButton.addEventListener('click', getQuote);
getQuote();



document.getElementById('copy-text-btn').onclick = function(){
navigator.clipboard.writeText(document.getElementById('quote-text').innerText)
.then(function(){
	console.log('text has been copied')

})

}








