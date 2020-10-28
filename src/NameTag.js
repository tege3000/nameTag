import React, {useState, useEffect} from 'react';
import moment from 'moment';


const NameTag = ({duration, name}) => {

    const [expiresAt, ] = useState(moment().add(duration, "minutes"))
    const [currentTime, setCurrenTime] = useState(new Date())
    const [timeLeft, setTimeLeft] = useState(duration)

    useEffect(() => {
        const secId = setInterval(() => {
            setCurrenTime(new Date())
        }, 1000);

        return () => clearInterval(secId)
    }, [])

    useEffect(() => {
        let countdown = timeLeft;
        const minId = setInterval(() => {
            countdown--;
            setTimeLeft(countdown);
        }, 60000);

        return () => clearInterval(minId)
    }, [])
    

    const formatDate = date => moment(date).format('MMM Do, h:mm:ss a');

    return (
        <div className="card mx-auto p-4" style={{width: '400px'}}>
            {timeLeft > 0 ? (
                <div className="text-center">
                    <h1>{name}</h1>
                    <small>Expires in {formatDate(expiresAt)} </small> <br/>
                    <small>Current time is {formatDate(currentTime)}</small><br/>
                </div>
            ) : (
                <div className="text-center">Expired</div>
            )}
        </div>
    );
}

export default NameTag;