import Share from './SNSbtns/ShareBtn';
import KakaoShare from './SNSbtns/KakaoShare';
import { facebook, naver } from '../dataSets/searchBtnSetting';

export default function ShareBTNsContainer(){
    return(
        <div>
            {/* 공유하기 버튼 container */}
            <div className='m-2 p-4 share-btn-container' style={{maxWidth:'1024px', border:'1px solid #eee', borderRadius:'30px'}}>
                <h4 style={{fontWeight:'800'}}>공유하고 룰렛 더 돌리기</h4>
                <div className='row'>
                <div className='col-4' onClick={()=> clearLocalStorage()}>
                    <Share page={facebook}/>
                </div>
                <div className='col-4' onClick={()=> clearLocalStorage()}>
                    <Share page={naver}/>
                </div>
                <div className='col-4' onClick={()=> clearLocalStorage()}>
                    <div onClick={()=> clearLocalStorage()}>
                        <KakaoShare />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

function clearLocalStorage (){
    localStorage.removeItem('사용');
}