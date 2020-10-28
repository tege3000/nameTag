import React from 'react';
import moment from 'moment';


class NameTag extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expiresAt: moment().add(props.duration, "minutes"),
            currentTime: moment(),
            timeLeft: props.duration,
        }
    }

    componentDidMount() {
        // every minute we want to count down
        // when time left reaches 0 we want to stop showing the name Tag
        this.minId = setInterval(() => {
            this.setState({
                timeLeft: this.state.timeLeft - 1,
            });
        }, 60000);

        // update currentTime every second (1000ms == 1s)
        this.secId = setInterval(() => {
            this.setState({
                currentTime: this.state.currentTime.add(1, 'seconds'),
            }); 
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.minId)
        clearInterval(this.secId)
    }

    render() {
        return (
            <div className="card mx-auto p-4" style={{width: '400px'}}>
                {this.state.timeLeft > 0 ? (
                    <div className="text-center">
                        <h1>{this.props.name}</h1>
                        <small>Expires in {this.state.expiresAt.format('MMM Do, h:mm:ss a')} </small> <br/>
                        <small>Current time is {this.state.currentTime.format('MMM Do, h:mm:ss a')}</small><br/>
                    </div>
                ) : (
                    <div className="text-center">Expired</div>
                )}
            </div>
        );
    }
}

export default NameTag;