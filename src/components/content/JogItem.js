import React from 'react';

const JogItem = (props) =>(
    <div className="col-12 item">
        <div className="row align-items-center">
            <div className="col-md-5 col-6 image-wrapper">
                <img src="../images/panel/icon.svg"/>
            </div>
            <div className="col-md-7 col-6 desc-wrapper">
                <p className="date">{props.getCorrectDate(props.jog.date)}</p>
                <p><span>Distance:</span> {props.jog.distance} km</p>
                <p><span>Time:</span> {props.jog.time} min</p>
            </div>
        </div>
    </div>
);

export default JogItem;