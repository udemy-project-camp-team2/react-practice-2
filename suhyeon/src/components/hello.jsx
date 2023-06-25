import React, { useEffect, useState } from "react";
import img01 from "../images/bg_img1.jpeg";
import img02 from "../images/bg_img2.jpeg";
import img03 from "../images/bg_img3.jpeg";
import img04 from "../images/bg_img4.jpeg";
import img05 from "../images/bg_img5.jpeg";
import img06 from "../images/bg_img6.jpeg";
import img07 from "../images/bg_img7.jpeg";
import img08 from "../images/bg_img8.jpeg";
import img09 from "../images/bg_img9.jpeg";
import img10 from "../images/bg_img10.jpeg";

function BackimgRandom () {
    const images = [img01,img02,img03,img04,img05,img06,img07,img08,img09,img10];
    const [imgCurrent,setImgCurrent] = useState(0);
    const [message,setMessage] = useState('Good Morning!');
    const [gettime,setGetTime] = useState('');
    const [date,setDate] = useState('');

    function GetTime () {
        const time = new Date();
        const hour = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const month = time.getMonth();
        const day = time.getDay();
        const year = time.getFullYear();

        
        useEffect(()=>{
            const timeInterval = setInterval(()=>{
                setGetTime(`${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`)
                setDate(`${year}년 ${month}월 ${day}일`)
            },1000);
    
            return () => {
                clearInterval(timeInterval)
            }
        },[])

        return (
            <>
                <div className="date">{date}</div>
                <div className="time">{gettime}</div>
             </>
        )
            
    }

    function Message () {
        const _time = new Date();
        const _hour = _time.getHours();
        useEffect(()=>{
            if(_hour >= 5 && _hour <= 11) {
                setMessage('Good Morning!');
            } else if ( _hour >= 13 && _hour <= 17) {
                setMessage('Good Morning!');
            } else if ( _hour >= 18 && _hour <= 20) {
                setMessage('Dinner time~!');
            } else if ( _hour >= 21 && _hour <=23) {
                setMessage('time to go to bed');
            } else {
                setMessage('Why didn`t you sleep yet?');
            }
        },[])
        

        return <div className="message">{message}</div>
    }
    
    function BackImg () {
        useEffect(() => {
            const interval = setInterval(()=>{
                const randomNumber = Math.floor(Math.random() * images.length);
                setImgCurrent(randomNumber);
                console.log(randomNumber);
            },1000);
    
            return () => {
                clearInterval(interval)
            }
        },[])

        return (
                <img className="img" src={images[imgCurrent]} alt="" />
        )
    }

    return (
        <>
            <div className="background">
                <div className="background_img">
                    <BackImg></BackImg>
                </div>
                <div className="overlay"></div>
            </div>
            <div className="board">
                <div className="content">
                    <div className="time_wrapper">
                        <GetTime></GetTime>
                    </div>
                    <Message></Message>
                </div>
            </div>
        </>
    )
}

export default BackimgRandom;