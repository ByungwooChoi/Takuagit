import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
function Test1_Q2(){

    const [yourName, setYourName] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [generatedSentence, setGeneratedSentence] = useState('');

    return (
        <div className="App">
          <Header />
          <h1>Test1_Q2 내 최애의 병크는 띠용?</h1>
          <label>
            당신의 이름:
            <input type="text" value={yourName} onChange={(e) => setYourName(e.target.value)} />
          </label>
          <label>
            최애의 이름:
            <input type="text" value={characterName} onChange={(e) => setCharacterName(e.target.value)} />
          </label>
          <button><Link to={{pathname:'test1_q2_result', state:{yourName : yourName, characterName : characterName}}}>시작하기</Link></button>
          {/* {generatedSentence && <p>{generatedSentence}</p>} */}
        </div>
      );
}

export default Test1_Q2;