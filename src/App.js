import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Wheel } from 'react-custom-roulette';
import Confetti from 'react-confetti';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import Share from './ShareBtn';
import KakaoShare from './KakaoShare';

const data = [
  { option: 'Option 1' },
  { option: 'Option 2' },
  { option: 'Option 3' },
  { option: 'Option 4' },
  { option: 'Option 5' },
  { option: 'Option 6' },
];

function captureAndSaveScreenshot() {
  // 화면 전체를 캡처합니다.
  html2canvas(document.body).then(function(canvas) {
    // 캡처된 캔버스를 이미지로 변환합니다.
    canvas.toBlob(function(blob) {
      // Blob을 파일로 저장합니다.
      saveAs(blob, 'screenshot.png');
    });
  });
}

function App() {

  const page = 'https://pvvng.github.io/hostRoulette/'
  const facebook = [`https://www.facebook.com/sharer/sharer.php?u=${page}`, '/facebook.png', '페이스북']
  const naver = [`https://share.naver.com/web/shareView?url=${page}&title=룰렛 돌리면 100퍼센트 보상 지급`,'/naver.png' ,'네이버']
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [confettiStatus, setConfettiStatus] = useState(false)
  let [prizeName, setPrizeName] = useState('버튼을 눌러 룰렛을 돌려보세요!');

  function handleSpinClick (){
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  useEffect(()=>{
    let timer
    if(mustSpin){
      timer = setTimeout(()=>{
        setConfettiStatus(true);
        setPrizeName(`${data[prizeNumber].option} 당첨!!`)
      },11000);
    }

    return () => clearTimeout(timer);

  },[mustSpin])

  useEffect(()=>{

    let cTimer = setTimeout(()=>{
      setConfettiStatus(false);
    },3000)

    return ()=> clearTimeout(cTimer);

  },[confettiStatus])

  // mustSpin이나 prizeNumber가 변경될 때에만 새로운 Wheel 컴포넌트 생성
  const wheelComponent = useMemo(() => (
    <Wheel
      mustStartSpinning={mustSpin}
      prizeNumber={prizeNumber}
      data={data}
      onStopSpinning={() => {
        setMustSpin(false);
      }}
      backgroundColors={['#99CCFF', '#6699FF', '#3366FF']}
      textColors={['#ffffff']}
      outerBorderColor={'black'}
      outerBorderWidth={5}
      radiusLineColor={'black'}
      radiusLineWidth={3}
      fontSize={16}
    />
  ), [mustSpin, prizeNumber]); 

  return (
    <div className="App">
      {
        confettiStatus?
        <Confetti
          numberOfPieces={200}
          recycle = {false}
          style={{ position: 'absolute', zIndex: 10 }}
          gravity={0.5}
        />:null
      }

      <div className='wheel-container'>
        {wheelComponent}
      </div>
      <button onClick={()=>{
        handleSpinClick();
        setPrizeName('두근두근..')
      }}>Spin</button>

      <div className='mt-5'>
        <h1>당첨 상품</h1>
        <p>{prizeName}</p>
      </div>

      <div className='mt-5'>
        <h4>공유하기</h4>
        <div className='row'>
          <div className='col-4'>
            <Share page={facebook} />
          </div>
          <div className='col-4'>
            <Share page={naver} />
          </div>
          <div className='col-4'>
            <KakaoShare />
          </div>
        </div>

        <button className='mt-5' onClick={()=>{captureAndSaveScreenshot()}}>화면 캡처하기</button>

      </div>


    </div>
  );
}

export default App;