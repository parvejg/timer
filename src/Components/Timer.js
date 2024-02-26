export const Timer = ()=>{
    return(
        <div className="timer-container">
            <div className="timer">
                <input placeholder="Enter here" type="number" min="0" max="59" />
                <div className="output-box">
                    <h1>08m 45s</h1>
                </div>
            </div>
        </div>
    )
}