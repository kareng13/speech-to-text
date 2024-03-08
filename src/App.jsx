import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Button } from 'bootstrap';

function App() {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    setIsListening(true);
    const recognition = new window.webkitSpeechRecognition(); 
    recognition.lang = 'es-ES'; 
    recognition.onresult = event => {
      setTranscript(event.results[0][0].transcript);
    };
    recognition.start(); 
  };

  const stopListening = () => {
    setIsListening(false);
  };

  return (
    <div className='section_speech'>
      <div className='container_speech'>
        <div className='content_speech'>
      <h3 className='title_speech mb-4'>Speech to text</h3>
          <h6 className='mb-4'>Presiona el microfono y empieza a hablar</h6>
      <p>{transcript}</p>
        <div className='icon_speech'>
          <div className='icon_speech_content'>
            <button className='btn_icons' id='icon_item1' onClick={startListening} disabled={isListening}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>
</svg></button>
<button className='btn_icons' id='icon_item2' onClick={stopListening} disabled={!isListening}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bootstrap-reboot" viewBox="0 0 16 16">
  <path d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 1 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.8 6.8 0 0 0 1.16 8z"/>
  <path d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324z"/>
</svg></button>
        </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;

