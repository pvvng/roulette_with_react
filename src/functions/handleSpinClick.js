// 돌리기 버튼 클릭시 당첨 상품을 저장하는 함수

export default function handleSpinClick (data, setPrizeNumber, setMustSpin){
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
};