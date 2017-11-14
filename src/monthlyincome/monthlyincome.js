import React, {Component} from 'react';
import './monthlyincome.css';

class MonthlyIncome extends Component {
    
    render(){
        return(
            <div className="card">
                <div className="card-block">
                        <p className="card-text"><b>{this.props.income}</b></p>
                        <p className="card-text">Average monthly income</p>
                        
                    
                </div>   
            </div>
        );
    }
}

export default MonthlyIncome;