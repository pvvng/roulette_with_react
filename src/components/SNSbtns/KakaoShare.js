// KakaoShare.jsx

export default function KakaoShare() {

  const kakaoButton = () => {
    if (window.Kakao) {

      const kakao = window.Kakao;

      // 초기화
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_SHARE_KEY);
      }

      // 공유하기
      kakao.Share.sendDefault({
        // container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        // description: '룰렛 돌리고 100% 당첨되는 보상 받기!',

        content: {
          title : '제 42회 금산 세계 인삼 축제',
          description: '10월 3일부터 13일까지 깨끗한 자연과 강인한 에너지가 넘치는 금산으로 여러분을 초대합니다 ', 
          imageUrl : 'https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/933425f6-3f59-4de2-9d0d-39cbfb478d8e_3.jpg',
          link : {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        buttons: [
          {
            title : '지금 상품 받으러가기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
        ],
      });
    }
  }
	
	return (
    <div style={{cursor:'pointer'}}>
  		<img 
        id='kakaotalk-sharing-btn' 
        alt='카카오톡 공유' 
        src={process.env.PUBLIC_URL + '/kakao.webp'} 
        width={'50px'} 
        height={'50px'}
        onClick={()=>{kakaoButton()}}
      />
    </div>
	)
}