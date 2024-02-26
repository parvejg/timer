import "./Timer.css"
export const Timer = ()=>{
    return(
        <div className="timer-container">
            <div className="timer">
                <input className="timer-input" placeholder="Enter here" type="number" min="0" max="59" />
                <div className="output-box">
                    <h1 className="timer-time">08m 45s</h1>
                </div>
                <div className="timer-btn-wrapper">
                    <button className="timer-btn">Start</button>
                    <button className="timer-btn">Reset</button>
                </div>
            </div>
        </div>
    )
}