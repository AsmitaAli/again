import React, {Component} from 'react';
import './follower.css';

class Follower extends Component {
    
    render(){
        return(
            <div className="card">
                <div className="card-block">
                        <p className="card-text"><b>{this.props.follower}</b></p>
                        <p className="card-text">New followers added this month</p>
                        
                    
                </div>   
            </div>
        );
    }
}

export default Follower;