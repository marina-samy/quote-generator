import './App.css';
import React, {useState} from 'react';
import { TwitterShareButton, FacebookShareButton, WhatsappShareButton } from 'react-share';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaClone } from "react-icons/fa";

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
      
      <div className='box'>
      <div className='square' style={{"--i":"0"}}></div>
      <div className='square' style={{"--i":"1"}}></div>
      <div className='square' style={{"--i":"2"}}></div>
      <div className='square' style={{"--i":"3"}}></div>
      <div className='square' style={{"--i":"4"}}></div>
      <div className="container">
      <h2>Quote Of The Day</h2>
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        

        <div className='row'>

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
      <FaClone onClick={copy} className="copy" />
      </div>

      <div className="btn">
      <button onClick={generateQuote}>New Quote</button>
    </div>
    
      </div>
      </div>
      </div>
    </>
  )
}


export default App;
