import React from "react";

const fetchQuotes = async () => {
  let quotes = await fetch("https://dummyjson.com/quotes");
  quotes = await quotes.json();

  return quotes.quotes;
};

const Quotes = async () => {
  let quotes = await fetchQuotes();
  console.log(quotes);
  return (
    <div className="container mt-4">
      {quotes.map((quote) => (
        <div>
          <p>Auther : {quote.author}</p>
          <p>Quote : {quote.quote}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Quotes;
