import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import Share from './SNSbtns/ShareBtn';
import KakaoShare from './SNSbtns/KakaoShare';
import data from './dataSets/data';
import captureAndSaveScreenshot from './functions/captureAndSaveScreenshot';
import WheelComponent from './components/WheelComponent';
import { facebook, naver } from './dataSets/searchBtnSetting';
import handleSpinClick from './functions/handleSpinClick';

function App() {

  // search btn setting
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [confettiStatus, setConfettiStatus] = useState(false);
  let [prizeName, setPrizeName] = useState('버튼을 눌러 룰렛을 돌려보세요!');

  useEffect(()=>{
    let timer

    if(mustSpin){
      timer = setTimeout(()=>{
        setConfettiStatus(true);
        setPrizeName(`${data[prizeNumber].option} 당첨!!`)
      },11000);
    }

    return () => clearTimeout(timer);
  },[mustSpin, prizeNumber])

  useEffect(()=>{
    let cTimer = setTimeout(()=>{
      setConfettiStatus(false);
    },3000)

    return ()=> clearTimeout(cTimer);
  },[confettiStatus])

  return (
    <div className="App">
      {/* 돌리기 완료시 파티클 뿌리기 */}
      {
        confettiStatus?
        <Confetti
          numberOfPieces={200}
          recycle = {false}
          style={{ position: 'absolute', zIndex: 10 }}
          gravity={0.5}
        />:null
      }

      {/* 룰렛 돌리기 버튼 */}
      <div className='wheel-container'>
        <WheelComponent data={data} mustSpin={mustSpin} setMustSpin={setMustSpin} prizeNumber={prizeNumber} />
      </div>
      <button className='btn btn-primary' onClick={()=>{
        handleSpinClick(data, setPrizeNumber, setMustSpin);
        setPrizeName('두근두근..')
      }}>돌리기!</button>

      {/* 당첨 상품 표시 container */}
      <div className='mt-5'>
        <h1>당첨 상품</h1>
        <p>{prizeName}</p>
      </div>

      {/* 공유하기 버튼 container */}
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

        {/* 화면 캡쳐 버튼 */}
        <button className='mt-5 btn btn-secondary' onClick={()=>{captureAndSaveScreenshot()}}>화면 캡처하기</button>

      </div>
    </div>
  );
}



export default App;