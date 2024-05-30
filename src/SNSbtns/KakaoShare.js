// KakaoShare.jsx
import { useEffect } from 'react'

export default function KakaoShare() {
	useEffect(() => {
    kakaoButton()
  }, [])

  const kakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao

      // 초기화
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_SHARE_KEY)
      }

      // 공유하기
      kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'text',
        text:
          '룰렛 돌리고 100% 당첨되는 보상 받기!',
        link: {
          // 배포 후, 카카오 developers에서 주소 수정 필요
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      });
    }
  }
	
	return (
		<img id='kakaotalk-sharing-btn' alt='카카오톡 공유' src={process.env.PUBLIC_URL + '/kakao.webp'} width={'50px'} height={'50px'}/>
	)
}