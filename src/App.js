import './App.css';
import React, {useState} from 'react';
import { TwitterShareButton, FacebookShareButton, WhatsappShareButton } from 'react-share';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const App = () => {
  const url = "https://api.quotable.io/random";
  const appId = '1461423604685837';
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  const shareBtn = window.location.href;
  const faceBtn = "https://www.facebook.com/";

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>


        <div className='icons'>
        <TwitterShareButton title={quote.content} url={shareBtn} separator=" Found In ">
        <FaTwitter className='icon tweet'/>
      </TwitterShareButton>
      <FacebookShareButton quote={quote.content} url={faceBtn} appId={appId}>
      <FaFacebook className='icon face' />
      </FacebookShareButton>
      <WhatsappShareButton title={quote.author + " once said: " + quote.content} url={shareBtn} separator=" Found In ">
        <FaWhatsapp className='icon whats' />
      </WhatsappShareButton>
      </div>
      </div>
    </>
  )
}


export default App;
