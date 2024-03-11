import React, { useState } from 'react';
import cat from './images/taku_cat.png';
import { useLocation } from 'react-router-dom';
import Header from './Header';
function Test1_Q1_result(){
    const location = useLocation();
    if (!location.state) {
        // state가 없는 경우, 예외 처리 또는 기본값 사용
        console.error('No state found in location.');
        return null; // 또는 다른 처리 방법을 선택하세요.
      }
    const {yourName, characterName} = location.state;
    const generateSentence = () => {
        const days = ['일주일',
        '1분 30초',
        '30일',
        '5초',
        '1년',
        '30년',
        '5년',
        '자연사',
        '5분',
        '15일',
        '10년',
        '30분'];

        const randomIndex = Math.floor(Math.random() * days.length);
        let sendText = `${yourName}은(는) ${characterName}와 좀비 아포칼립스에서 ${days[randomIndex]} 생존할 수 있습니다.`
        let sendUrl = "devpad.tistory.com/"; // 전달할 URL
        window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
    };

    return (
        <div className='Test1_Q1_result'>
            <Header />
            <h1>Test1_Q1 최애와 좀비 아포칼립스에 떨어졌다. 얼마나 생존할 수 있을까?</h1>
            <img src={cat} width='300px' alt="Dinosaur" />
            <button onClick={generateSentence}>트위터로 결과 확인</button>
        </div>
    );
}

export default Test1_Q1_result;