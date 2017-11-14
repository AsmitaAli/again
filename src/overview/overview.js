import React, {Component} from 'react';
import './overview.css';

import Follower from '../follower/follower';
import MonthlyIncome from '../monthlyincome/monthlyincome';
import YearlyGoal from '../yearlygoal/yearlygoal';
class Overview extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {overview:[
            { 
                follower: 20,
                monthlyincome: 1250,
                yearlyincomegoal: 13864
            }
        ]}
        //Bind functions
        //this.showOverview = this.showFollowers.bind(this);
    }
    /*showFollowers = () =>{
        const list = this.state.overview.map((detail) =>
                this.setstate(overview, detail);
        );
        return (list);
    }*/
    
    
    render(){
        return(
            <div className="row">
                <div className="col-sm-4">
                    <Follower follower="20"/>   
                </div>
                <div className="col-sm-4">
                    <MonthlyIncome income="1250"/>   
                </div>
                <div className="col-sm-4">
                    <YearlyGoal goal="13864"/>   
                </div> 
            </div>
        );
    }
}

export default Overview;