import React, { useState } from 'react';
import Header from './Header';

function Test2() {
    const [page, setPage] = useState(0);
    //본인 이름과 최애 이름입력
    const [yourName, setYourName] = useState('');
    const [characterName, setCharacterName] = useState('');

    const questionList = [
        {q: [`${characterName}가 반려동물을 키운다면, 어울리는 반려동물은?`],
        a:[{type : 'G', text : '“산책가자 주인!” 따수운 강아지'},
            {type : 'G', text : '“신경 꺼" 얌전한 고양이'}]},
        {q: [`${characterName}가 나에게 사랑한다고 전할 때, 어떻게 말할까?`],
        a:[{type : 'G', text : '아날로그식 편지'},
            {type : 'G', text : '핸드폰으로 카톡'}]},
        {q: [`${characterName}가 나에게 생일선물을 준다면, 어떤 선물을 줄까?`],
        a:[{type : 'G', text : '백화점에서 사 온 티파니 반지'},
            {type : 'G', text : '정성 가득 수제 케이크'}]},
        {q: [`사귀고 나서 처음 내가 ${characterName}의 손을 잡았을 때 ${characterName}의 행동은?`],
        a:[{type : 'E', text : '빠져나가지 못하게 깍지를 껴온다'},
            {type : 'I', text : '소중하고 조심스럽게 손을 맞잡아온다'}]},
        {q: [`내가 악몽을 꾸었을 때, ${characterName}가 날 다독여주는 방식은?`],
        a:[{type : 'G', text : '묵묵히 곁을 지켜주며 안아준다'},
            {type : 'G', text : '무섭지 않도록 잠들 때 까지 말을 걸어준다'}]},
        {q: [`내가 다른 남자와 술 마시는 걸 목격한 ${characterName}, ${characterName}의 반응은?`],
        a:[{type : 'A', text : '웃으며 내 손을 잡지만 남자의 신상정보를 낱낱이 조사한다'},
            {type : 'B', text : '내 시선을 회피하며 질투하는 마음을 속으로 꾹 누른다'}]},
        {q: [`흰 교복 셔츠가 젖어버린 나, ${characterName}의 행동은?`],
        a:[{type : 'X', text : '무덤덤한 얼굴로 교복 겉옷 덮어주기'},
            {type : 'Y', text : '새빨개진 토마토 얼굴로 담요 꽁꽁 싸매주기'}]},
        {q: [`혐관에 빠진 최애와 나, 지금 ${characterName}의 머릿속은?`],
        a:[{type : 'C', text : '진심으로 널 어떻게 고통스럽게 죽여줄까?'},
            {type : 'G', text : '지금 너에게 미움받더라도 사실 너에게 말할 수 없는 사정이 있어'}]},
        {q: ['테스트 끝! 결과 확인 ㄱㄱ'],
        a: [{type:'', text:'결과확인'}]}
    ]

    const [mbtiList, setMbtiList] = useState([
        {name: 'E', count:0}, {name: 'I', count:0}, {name: 'A', count:0},
        {name: 'B', count:0}, {name: 'X', count:0}, {name: 'Y', count:0}, {name: 'C', count:0}
    ])

    const handleCKAnswer = (type, idx) => {
        let ls = mbtiList;
        for(let i=0;i<ls.length;i++){
            if(ls[i].name===type){
                ls[i].count++;
            }
        }

        setMbtiList(ls);
        setPage(page+1);
        if(idx+1 === questionList.length) setMbti()
    }
    
    const [mbtiContents, setMbtiContents] = useState([])

    function setMbti(){
        let mc = [
            {mbti:'EAX', contents: ['집착광공홀릭'], phrase:['나에게 집착해 주세요']},
            {mbti:'EBX', contents: ['능글남 러버'], phrase:['타고난 센스로 날 놀려먹는']},
            {mbti:'EAY', contents: ['츤데레 러버'], phrase:['서툴고 조금은 이기적이어도 괜찮아']},
            {mbti:'EBY', contents: ['첫사랑재질 홀릭'], phrase:['소년미 낭낭한 학창 시절 그이']},
            {mbti:'IAX', contents: ['계략남 러버'], phrase:['착한 얼굴에 그렇지 못한 속내']},
            {mbti:'IBX', contents: ['갓벽남 홀릭'], phrase:['이보다 완벽할 수 없다']},
            {mbti:'IAY', contents: ['순애남 홀릭'], phrase:['온 평생 나만 사랑하는']},
            {mbti:'IBY', contents: ['너드남 러버'], phrase:['다마고치의 맛']},
            {mbti:'C', contents: ['사이코 홀릭'], phrase:['광기의 늪에 빠져 돌아버린']}
        ]

        let IorE = 
            mbtiList.find(function(data){return data.name === 'E'}).count >
            mbtiList.find(function(data){return data.name === 'I'}).count?'E':'I'
        let AorB = 
            mbtiList.find(function(data){return data.name === 'A'}).count >
            mbtiList.find(function(data){return data.name === 'B'}).count?'A':'B'
        let XorY = 
            mbtiList.find(function(data){return data.name === 'X'}).count >
            mbtiList.find(function(data){return data.name === 'Y'}).count?'X':'Y'
        let C = mbtiList.find(function(data){return data.name === 'C'}).count
        
        let mbti = IorE + AorB + XorY
        if(C==1) mbti = 'C'
        setMbtiContents(mc.filter(val=>val.mbti === mbti)[0])
    }

    const generateSentence = () => {
        let sendText = mbtiContents.phrase + ' ' + mbtiContents.contents;
        let sendUrl = "devpad.tistory.com/"; // 전달할 URL
        window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
    };


    return(
        <div className="test2">
            {page===0?
            <div>
                <Header />
                <label>
                당신의 이름:
                <input type="text" value={yourName} onChange={(e) => setYourName(e.target.value)} />
                </label>
                <label>
                최애의 이름:
                <input type="text" value={characterName} onChange={(e) => setCharacterName(e.target.value)} />
                </label>
                <div onClick={()=>setPage(1)}>
                    테스트 시작하기
                </div>
            </div>
            :page <= questionList.length?
            <div>
                <div>{`${page} / ${questionList.length}`}</div>

                {questionList.map((val, idx)=>
                    <div>
                        <div className='questionList' style={{display:page===idx+1?'flex':'none'}} key={idx}>
                            <div className='question'>
                                {val.q.map((qval, qidx)=>
                                    <div key={qidx}>
                                        <div>{qval}</div>
                                    </div>
                                )}
                            </div>

                            <div className='answerList'>
                                {val.a.map((aval, aidx)=>
                                    <div key={aidx} className='answerBox' onClick={()=>handleCKAnswer(aval.type, idx)}>
                                        {aval.text}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            :
            <div>
                <div onClick={()=>window.location.reload()}>다시하기</div>
                <div>
                    <div className='questionList' style={{display:'flex'}}>
                        <div className='question'>
                            {mbtiContents.mbti}.
                            당신은 {mbtiContents.contents}.
                        </div>
                        <button onClick={generateSentence}>트위터로 결과 확인</button>
                    </div>
                </div>
            </div>
            }
        </div>
    );
  }

export default Test2;