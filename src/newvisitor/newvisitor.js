import React, {Component} from 'react';
import './newvisitor.css';

class NewVisitor extends Component {
    
    render(){
        return(
            <div className="card">
                <div className="card-block">
                        <h4 className="card-title">
                        <p className="card-text"><b>{this.props.visitor}</b></p>
                        <p className="card-text"><b>{this.props.rate}</b></p>
                        <p className="card-text">New followers added this month</p>
                        </h4>
                    
                </div>   
            </div>
        );
    }
}

export default NewVisitor;