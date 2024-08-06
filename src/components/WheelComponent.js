import { memo } from 'react';
import { Wheel } from 'react-custom-roulette';
import { outerBorderColor, radiusLineColor, textColors, wheelBackColor } from '../dataSets/wheelSetting';

// memo를 사용해서 props가 변경될 때에만 새로운 Wheel 컴포넌트 생성하도록
const WheelComponent = memo(function WheelComponent({data, mustSpin, setMustSpin, prizeNumber}){
return(
        <div className='roulette-container' style={{width:'100%'}}>
            <div className='wheel-container' width='100%' style={{border:`20px solid ${outerBorderColor}`, padding:20, borderRadius:'10000px'}}>
                <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    onStopSpinning={() => {
                        setMustSpin(false);
                    }}
                    backgroundColors={wheelBackColor}
                    textColors={textColors}
                    outerBorderColor={outerBorderColor}
                    outerBorderWidth={10}
                    radiusLineColor={radiusLineColor}
                    radiusLineWidth={3}
                    fontSize={16}
                />
            </div>
        </div>
    )

}); 

export default WheelComponent