# 배포 링크

[vercel](https://roulette-with-react.vercel.app/) => U+ 통신사로 접속 안됨, 카카오톡 쉐어 기능 안됨

[netlify](https://geumsan-ginseng42.netlify.app/)

React js로 만든 룰렛 이벤트 페이지입니다.


금산 인삼 축제에서 홍보용으로 사용될 예정입니다.

### installation
1. create new folder
2. clone repository
``` bash
git init
git clone https://github.com/pvvng/roulette_with_react.git
```
3. install dependency
``` bash
npm install
```
4. setting
```javascript
/**
* 룰렛 설정 변경 방법
* /src/dataSets/wheelSetting.js
*/

// 룰렛 색 설정 (옵션 갯수만큼 색 추가 가능)
let wheelBackColor = ['#FD8B69', 'white' ];
// 외각선 색 설정
let outerBorderColor = '#FD8B69';
// 내부선 색 설정
let radiusLineColor = 'white'
// 텍스트 컬러 설정 (옵션 갯수만큼 색 추가 가능)
let textColors = ['black',]
// 돌리기 버튼 배경색 설정
let spinBtnBackColor = '#D94925'
// 돌리기 버튼 텍스트 색 설정
let spinBtnColor = 'white'

export { wheelBackColor, outerBorderColor, radiusLineColor, textColors, spinBtnBackColor, spinBtnColor }
```

