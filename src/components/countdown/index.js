import {useState} from "react";


function Countdown() {
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [second, setSecond] = useState(0);
    const [hidden, setHidden] = useState(true)
    const [status, setStatus] = useState(false)

    function start() {
        if (!status) {
            setStatus(true);
            let totalSeconds = hour * 3600 + min * 60 + second;
            let interval = setInterval(() => {
                totalSeconds--;
                if (totalSeconds === 0) {
                    clearInterval(interval);
                    setStatus(false);
                }
                let newHour = Math.floor(totalSeconds / 3600);
                let newMin = Math.floor((totalSeconds % 3600) / 60);
                let newSec = totalSeconds % 60;
                setHour(newHour);
                setMin(newMin);
                setSecond(newSec);
            }, 1000);
        }
    }

    // function hidden() {
    //     setHidden(false);
    // }

    function stop() {
        setStatus(false);
    }


    function reset() {
        setHour(0);
        setMin(0);
        setSecond(0);
        setStatus(false);
    }




    return (
        <div className={"countdown"}>
            <div className="countdown-input">
                Hour: <input type="number" onChange={(e) => {setHour(+e.target.value)}} min={0} max={23}/>
                Min: <input type="number" onChange={(e) => {setMin(+e.target.value)}} min={0} max={59}/>
                Second: <input type="number" onChange={(e) => {setSecond(+e.target.value)}} min={0} max={59}/>
            </div>
            <div className="countdown-hidden">
                {hour}:{min}:{second}
            </div>
            <div className="countdown-button">
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>

        </div>
    )

}
export default Countdown;

