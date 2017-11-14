import React, {Component} from 'react';
import './sidepanel.css';

import NewVisitor from '../newvisitor/newvisitor';


class SidePanel extends Component {
    
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <div className="row">
                <div className="col-sm-12">
                   
                </div>
                <div className="col-sm-12">
                    <NewVisitor visitor="1.5K"/>   
                </div>
                <div className="col-sm-12">
                   <NewVisitor rate="50%"/>   
                </div>
                <div className="col-sm-12">
                   
                </div>
                <div className="col-sm-12">
                  
                </div>
            </div>
        );
    }
}

export default SidePanel;