import React,{useState} from "react";
import img01 from '../images/01.jpg';
import img02 from '../images/02.jpg';
import img03 from '../images/03.jpg';
import img04 from '../images/04.jpg';
import img05 from '../images/05.jpg';

function Slider() {
    const imgs = [img01,img02,img03,img04,img05];
    const [imgCurrent,setImgCurrent] = useState(0);

    const handlePrev = () => {
        setImgCurrent((prevIndex)=>{
            if(prevIndex === 0) {
                return imgs.length -1;
            } else {
                return prevIndex -1;
            }
        })
    }
    const handleNext = () => {
        setImgCurrent((prevIndex)=>{
            if(prevIndex === imgs.length - 1) {
                return 0;
            } else {
                return prevIndex +1;
            }
        })
    }
    return (
    <div>
        <div className="slier_wrap">
            <ul className="images">
                <img src={
                    imgs[imgCurrent]
                }
                style={{width:'300px'}} />    
            </ul>
        </div>
        <div>
             <span className="prev" onClick={handlePrev}>prev</span>
             <span className="next" onClick={handleNext}>next</span>
        </div>
    </div>
    )
}

export default Slider;