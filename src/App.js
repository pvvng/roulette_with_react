import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import data from './dataSets/data';
import WheelComponent from './components/WheelComponent';
import handleSpinClick from './functions/handleSpinClick';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCamera } from '@fortawesome/free-solid-svg-icons';
// import captureAndSaveScreenshot from './functions/captureAndSaveScreenshot'
import ShareBTNsContainer from './components/SNSbtnsContainer';
import { spinBtnBackColor, spinBtnColor } from './dataSets/wheelSetting';

function App() {

  const [isImageLoad, setIsImageLoad] = useState(false);
  // 룰렛이 돌아갔는지 감시하는 상태
  const [mustSpin, setMustSpin] = useState(false);
  // 당첨 상품 number 저장하는 상태
  const [prizeNumber, setPrizeNumber] = useState(0);
  // 파티클 status 감시하는 상태
  const [confettiStatus, setConfettiStatus] = useState(false);
  // 당첨 상품 html에 보여주는 state
  let [prizeName, setPrizeName] = useState('버튼을 눌러 룰렛을 돌려보세요!');

  // 이미지가 로드된 후 호출되는 핸들러 함수
  const handleImageLoad = () => {
    setIsImageLoad(true);
  };

  // 룰렛이 돌아갔거나, 당첨 상품이 변경되었다면 실행
  useEffect(()=>{
    // 타이머 설정
    let timer

    // 룰렛이 돌아간게 맞을때만 실행
    if(mustSpin){
      timer = setTimeout(()=>{
        // 파티클 뿌리기
        setConfettiStatus(true);
        // 11초 뒤 당첨 상품 html로 보여주기
        setPrizeName(`${data[prizeNumber].option} 당첨!!`)
      },10000);
    }

    // 타이머 클리어
    return () => clearTimeout(timer);
  },[mustSpin, prizeNumber])

  // 파티클 상태가 변경될 때마다 실행
  useEffect(()=>{
    // 파티클 상태가 변경되고 3초 후 파티클 종료하기
    let cTimer = setTimeout(()=>{
      setConfettiStatus(false);
    },4000)

    // 타이머 클리어
    return ()=> clearTimeout(cTimer);
  },[confettiStatus])

  useEffect(() => {
    console.log(isImageLoad)
  },[isImageLoad])


  return (
    <div className="App">

      {/* 돌리기 완료시 파티클 뿌리기 */}
      {
        confettiStatus?
        <Confetti
          numberOfPieces={200}
          recycle = {false}
          style={{ position: 'absolute', zIndex: 1000 }}
          gravity={0.5}
          width={window.innerWidth - 40}
          height={window.innerHeight * 10}
        />:null
      }

      {/* image */}
      <div>
        {/* 이미지가 로드된 후에만 렌더링되는 내용 */}
        {!isImageLoad ? <p>이미지 로딩 중...</p> : null}

        {/* 이미지 태그 */}
        <img 
          className='mb-2' 
          src={process.env.PUBLIC_URL + '/금산이미지/금산.png'} 
          width='100%' 
          alt='image3' 
          style={{ maxWidth: '1024px' }} 
          onLoad={handleImageLoad}
        />
      </div>

      {/* 룰렛 & 룰렛 돌리기 버튼 */}
      <div className='wheel-container'>
        <WheelComponent data={data} mustSpin={mustSpin} setMustSpin={setMustSpin} prizeNumber={prizeNumber} />

        <div className='mt-3'>
          <p style={{color:'grey', margin:0}}>돌리기 버튼을 클릭해 룰렛을 돌려보세요!</p>
          <p style={{color:'grey', margin:0}}>룰렛을 추가로 돌리고 싶다면 SNS에 공유해주세요!</p>
        </div>

        <button className='mt-4 btn spin-btn' style={{background:spinBtnBackColor, color: spinBtnColor, fontWeight:'bold'}} onClick={()=>{
          // 룰렛을 이미 돌렸는지 localstorage로 감시
          if(localStorage.getItem('used') === '1'){
            alert('이미 룰렛을 돌렸어요.')
          }else{
            setPrizeName('두근두근..');
            handleSpinClick(data, setPrizeNumber, setMustSpin);
            localStorage.setItem('used', 1);
          }
        }}>돌리기!</button>
      </div>

      {/* 당첨 상품 표시 container */}
      <div className='mt-5'>
        <h2 style={{fontWeight:'bold', color:'#D94925'}}>당첨 상품</h2>
        <h5 className='mt-3' style={{fontWeight:'bold'}}>{prizeName}</h5>
      </div>

      {/* sns쉐어버튼 */}
      <ShareBTNsContainer/>
      {/* 화면 캡쳐 버튼 */}
      {/* <div>
        <div className='mb-2 hidden-screenshot-text' style={{textAlign:'right'}}>
          <span className=''> 화면 캡처하기</span>
        </div>
        <div className='btn btn-secondary mb-5 mx-2 p-3 screenshot-btn' style={{borderRadius:'10000px'}} onClick={()=>{captureAndSaveScreenshot()}}>
          <FontAwesomeIcon icon={faCamera} className='fs-1' />
        </div>
      </div> */}

      {/* footer */}
      <div style={{width:'100%', padding:20, color:'white', background:'#D94925', borderTopLeftRadius:'30px', borderTopRightRadius:'30px'}}>
        <div className='row'>
          <div className='col-sm-9' style={{textAlign:'left'}}>
            <h2 style={{fontWeight:'bold'}}>제 42회 금산 세계 인삼 축제</h2>
            <p>2024.10.03 ~ 2024.10.13</p>
          </div>
          <div className='col-sm-3' style={{marginTop:'auto', marginBottom:'auto'}}>
            <img src='/MobilioLogo.png' width={'100px'} alt='mobilio'/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;