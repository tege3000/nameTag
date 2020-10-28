import React from 'react';

class NameTag extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expiresAt: 0,
            currentTime: 0,
            timeLeft: 0
        }
    }

    render() {
        return (
            <div className="card mx-auto p-4" style={{width: '400px'}}>
                <div className="text-center">
                    <h1>{this.props.name}</h1>
                    <small>Expires in {this.state.expiresAt}</small> <br/>
                    <small>Current in {this.state.currentTime}</small> <br/>

                </div>
            </div>
        )
    }
}

export default NameTag;