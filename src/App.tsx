import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {MessageDto} from "./dto/message.dto";
import * as dotenv from "dotenv";
dotenv.config();

function App() {

  const [backMessage, setBackMessage] =  useState<string>('');

  async function getMessage() : Promise<void> {

    fetch( `${process.env.REACT_APP_API_URL}/message`, {
    method: "GET",
    headers: {'Content-Type': 'application/json'},
    }).then( async (value: Response) => {
      const response : MessageDto = await value.json();
      setBackMessage(response.message);

    }).catch((er) => {
      alert(er);
    });

  }

  useEffect(() => {
    getMessage();

  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src="logo-helyx.png" className="App-logo" alt="logo" />
        <p>
          Message from back : {backMessage}
        </p>

      </header>
    </div>
  );
}

export default App;
