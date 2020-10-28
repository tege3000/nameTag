import React from 'react';
import moment from 'moment';


class NameTag extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expiresAt: moment().add(props.duration, "minutes"),
            currentTime: moment(),
            timeLeft: 0
        }
    }

    componentDidMount() {
        // update currentTime every second (1000ms == 1s)
        setInterval(() => {
            this.setState({
                currentTime: this.state.currentTime.add(1, 'seconds')
            }) 
        }, 1000)
    }

    render() {
        return (
            <div className="card mx-auto p-4" style={{width: '400px'}}>
                <div className="text-center">
                    <h1>{this.props.name}</h1>
                    <small>Expires in {this.state.expiresAt.format('MMM Do, h:mm:ss a')}</small> <br/>
                    <small>Current time in {this.state.currentTime.format('MMM Do, h:mm:ss a')}</small> <br/>
                </div>
            </div>
        )
    }
}

export default NameTag;