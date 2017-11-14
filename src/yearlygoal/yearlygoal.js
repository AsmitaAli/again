import React, {Component} from 'react';
import './yearlygoal.css';

class YearlyGoal extends Component {
    
    render(){
        return(
            <div className="card">
                <div className="card-block">
                        <p className="card-text"><b>{this.props.goal}</b></p>
                        <p className="card-text">Yearly income goal</p>
                        
                    
                </div>   
            </div>
        );
    }
}

export default YearlyGoal;