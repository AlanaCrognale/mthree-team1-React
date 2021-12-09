/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Change extends React.Component {
    render(){
        let { change, returnChange } = this.props;
        return (
            <div className="col">
                <div className="vending-action">
                    <div className="action-header">Change</div>
                    <div id="change-input-box">{ change }</div>

                    <div className="separator"></div>

                    <div id="change-button" onClick={ returnChange }>Change Return</div>
                </div>
            </div>
        )
    }
};

export default Change

