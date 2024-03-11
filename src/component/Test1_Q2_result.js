import React, { useState } from 'react';
import cat from './images/taku_cat.png';
import { useLocation } from 'react-router-dom';
import Header from './Header';

function Test1_Q2_result(){
    const location = useLocation();
    if (!location.state) {
        // state가 없는 경우, 예외 처리 또는 기본값 사용
        console.error('No state found in location.');
        return null; // 또는 다른 처리 방법을 선택하세요.
      }
    const {yourName, characterName} = location.state;
    const generateSentence = () => {
        const b = ['마1약 병크',
        '라이브 방송 중 쌍욕 시전',
        '홍대에서 이성과 술자리 사진이 유출됨',
        '일진이던 학창 시절 과거 폭로',
        '음주운전',
        '술 먹고 나체로 환경미화',
        '인스타 스타에게 디엠으로 플러팅 멘트를 보냄',
        '실수로 여캠BJ 영상에 좋아요를 누름',
        '클럽에서 이성과 뜨겁게 키스하는 영상이 유출됨',
        '화장실에서 볼일 본 후 손을 씻지 않았다는 목격담',
        '실내 흡연',
        '길빵 사진 유출',
        '버블 사진에 여자 목소리',
        '배경화면에 여자 실루엣',
        '넷째 손가락에 주기적으로 끼는 반지',
        '민초파라고 밝혔으나 민초 먹고 입을 헹구는 모습 포착',
        '멤버와 기싸움',
        '콘서트장에서 여자친구를 향해 하트를 날리다 알계가 폭로'];

        const randomIndex = Math.floor(Math.random() * b.length);
        
        let sendText = `${yourName}님의 ${characterName}의 병크는 ${b[randomIndex]}입니다.`
        let sendUrl = "devpad.tistory.com/"; // 전달할 URL
        window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
    };

    return (
        <div className='Test1_Q1_result'>
            <Header />
            <h1>Test1_Q2 내 최애의 병크는?</h1>
            <img src={cat} width='300px' alt="Dinosaur" />
            <button onClick={generateSentence}>트위터로 결과 확인</button>
        </div>
    );
}

export default Test1_Q2_result;