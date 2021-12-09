/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const ItemBox = ({ itemId, itemName, itemPrice, itemQuantity, selectItem }) => {
    return (
        <div value={itemId} className="vending-item" onClick={selectItem}>
            <div className="vending-item-id">{itemId}</div>
            <div className="vending-item-name">{itemName}</div>
            <div className="vending-item-price">${itemPrice}</div>
            <div className="vending-item-quantity">Quantity Left: {itemQuantity}</div>
        </div>
    )
}

class Items extends React.Component {

    static defaultProps = {
        items: [
            {
                itemId: '1',
                itemName: 'Soda',
                price: 2.00,
                quantity: '7'
            },
            {
                itemId: '2',
                itemName: 'Chocolate',
                price: 1.50,
                quantity: '3'
            },
            {
                itemId: '3',
                itemName: 'Car',
                price: 2000.00,
                quantity: '2'
            },
            {
                itemId: '4',
                itemName: 'Puppy',
                price: 50.00,
                quantity: '15'
            }
        ]
    }

    static defaultProps = {
        items: [
            {
                itemId: '1',
                itemName: 'Soda',
                price: 2.00,
                quantity: '7'
            },
            {
                itemId: '2',
                itemName: 'Chocolate',
                price: 1.50,
                quantity: '3'
            },
            {
                itemId: '3',
                itemName: 'Car',
                price: 2000.00,
                quantity: '2'
            },
            {
                itemId: '4',
                itemName: 'Puppy',
                price: 50.00,
                quantity: '15'
            }
        ]
    }

    // render html
    render() {
        console.log("Rendering Items")
        console.log(this.props.items)

        let { items, selectItem } = this.props
        let content = []
        let numberOfLines = Math.floor(items.length / 3)

        for (let i = 0; i < numberOfLines; i++) {
            let rowContent = []
            for (let j = 0; j < 3; j++) {
                let item = items[3 * i + j]
                rowContent.push(<div className="col spacing"><ItemBox key={3 * i + j} itemId={item.itemId} itemName={item.itemName} itemPrice={item.price}
                    itemQuantity={item.quantity} selectItem={selectItem} /></div>)
            }
            content.push(<Row>{rowContent}</Row>)

        }

        if (items.length % 3 !== 0) {
            let lastRowContent = []
            for (let i = 3 * numberOfLines; i < items.length; i++) {
                let item = items[i]
                lastRowContent.push(<div className="col spacing"><ItemBox key={i} itemId={item.itemId} itemName={item.itemName} itemPrice={item.price}
                    itemQuanity={item.quantity} selectItem={selectItem} /></div>)
            }
            content.push(<Row>{lastRowContent}</Row>)
        }
        console.log(content)
        return (
            content
        )
    }
    
};

export default Items;

