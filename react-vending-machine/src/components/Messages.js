/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Messages extends React.Component {
    render(){

        let { messages, selectedItemId, makePurchase } = this.props;
        return (
            <div className="col">
                <div className="vending-action">
                    <div className="action-header">Messages</div>
                    <div id="messages-input-box">{messages}</div>

                    <div className="separator"></div>

                    <div id="item">Item: </div>
                    <div id="item-input-box">{selectedItemId}</div>

                    <div className="separator"></div>

                    <div id="purchase-button" onClick={makePurchase}>Make Purchase</div>
                </div>
            </div>
        )
    }
};

export default Messages

