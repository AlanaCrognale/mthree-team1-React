/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Money extends React.Component {

    render(){
        let { money, updateMoney } = this.props;
        return (
            <div className="col">
                <div className="vending-action" style={{border: 'none !important'}}>

                    <div className="action-header">Total $ In</div>
                    <div id="money-input-box">{money}</div>

                    <div className="separator"></div>

                    <div className="row">
                        <div className="col"><div id="add-dollar-button" onClick={ ()=>updateMoney(1) }>Add Dollar</div></div>
                        <div className="col"><div id="add-quarter-button" onClick={ ()=>updateMoney(0.25) }>Add Quarter</div></div>
                    </div>

                    <div className="separator"></div>

                    <div className="row">
                        <div className="col"><div id="add-dime-button" onClick={ ()=>updateMoney(0.1) }>Add Dime</div></div>
                        <div className="col"><div id="add-nickel-button" onClick={ ()=>updateMoney(0.05) }>Add Nickel</div></div>
                    </div>

                </div>
            </div>
        )
    }
};

export default Money

