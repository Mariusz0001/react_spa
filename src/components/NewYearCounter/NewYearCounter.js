import React, { useEffect, useState } from "react";
import Moment from 'moment';

import '../../styles/NewYearCounter.css';


function NewYearCounter() {

    const YEAR_SECONDS = 31556926;
    const NEXT_YEAR = 2023;

    const [remainSeconds, setRemainTime] = useState(9999999999);

    const [seconds, setSeconds] = useState(0);

    const [remainMinutes, setRemainMinutes] = useState(0);
    const [remainHours, setRemainHours] = useState(0);
    const [remainSecond, setRemainSecond] = useState(0);
    const [countSeconds, setCountSecond] = useState(-1);

    let progressBar = React.createRef();
    let progressBar2 = React.createRef();
    
    useEffect(() => {
        console.log("I have been mounted")

        if(countSeconds < 0)
            setCountSecond(remainSecond);
      }, [])

    useEffect(() => {
        let interval = null;
        
        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 500);
        
        let remainTime = getRemainTime();
        if(remainTime < 0)
            return;

        let remain = secondsToTime(remainTime);

        setRemainHours(remain.h);
        setRemainMinutes(remain.m);
        setRemainSecond(remain.s);

        setRemainTime(remainTime);
        setProgressBar();

        return () => clearInterval(interval);
    }, [remainMinutes, remainHours, remainSecond, countSeconds, seconds]);

    const shouldShowProgressBar2 = () => {
        if(getPercentage2() > 0)
            return true;

        return false;
    }


    function secondsToTime(secs)
{
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    var obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
    };
    return obj;
}

    const setProgressBar = () => {
        let percentage = getPercentage();
        let percentage2 = getPercentage2();
        

        if(percentage !== null && progressBar?.current !== null)
        {
            progressBar.current.style.width = percentage.toFixed(5) + "%";
            progressBar.current.innerHTML = percentage.toFixed(5) + "%";
        }

        if(percentage2 !== null && progressBar2?.current !== null)
        {
            progressBar2.current.style.width = percentage2.toFixed(2) + "%";
            progressBar2.current.innerHTML = percentage2.toFixed(2) + "%";
        }
    }

    const getRemainTime = () => {
        try{
            let newYear = new Date(NEXT_YEAR + '-01-01T00:00:00');
            let remain = (newYear - Date.now()) / 1000;

            return remain;
        }
        catch{
            return null;
        }
    }

    const getDateNow = () => {
        let date = new Date();
        let formattedDate = Moment(date).format('DD-MM-YYYY HH:mm:ss');

        return formattedDate;
    }

    const getPercentage = () => {
        try {
            if(YEAR_SECONDS > 0)
                return ((YEAR_SECONDS - remainSeconds) / YEAR_SECONDS) * 100;
        }
        catch {
        }
        
        return 0;
    }

    const getPercentage2 = () => {
        try {
            if(countSeconds > 0)
                return ((countSeconds - remainSeconds) / countSeconds) * 100;
        }
        catch {
        }
        
        return 0;
    }

    const getRemainTimeRender = (time, additionalText, cssClasses) => {
        if(time > 0)
            return <div className={cssClasses}>{time} {additionalText}</div>;
    }

    if(getRemainTime() < 0)
    {
        return <div className="container back">
            <div className="form-group">
                <div className="text h1">Nowy rok <strong>{NEXT_YEAR}</strong>!</div>

                <div className="d-flex p-2 justify-content-center">
                    <div className="text date">{getDateNow()}</div>
                </div>
            </div>
        </div>;

    }
    else{
        return <div className="container back">
            <div className="form-group">
                <div className="text h1">Odliczanie do końca roku!</div>

                <div className="d-flex p-2 justify-content-center">
                    <div className="text date">{getDateNow()}</div>
                </div>
            </div>
            <hr></hr>
            <div className="form-group">
                <div className="text h2">Do {NEXT_YEAR} roku pozostało jeszcze:</div>
                <div className="d-flex align-items-center">
                    {getRemainTimeRender(remainHours, "godzin", "text hour")}
                    {getRemainTimeRender(remainMinutes, "minut", "text minute")}
                    {getRemainTimeRender(remainSecond, "sekund", "text seconds")}
                </div>
            </div>
            <hr></hr>
            <div className="form-group">
                <div className="progress">
                    <div className="progress-bar bar" ref={progressBar}>0%</div>
                </div>
            </div>
            <hr></hr>
            { shouldShowProgressBar2() &&
                <div className="form-group">
                    <div className="progress progress2">
                        <div className="progress-bar progress-bar2 bar" ref={progressBar2}>0%</div>
                    </div>
                </div>
            }
        </div>;
    }
}

export default NewYearCounter;