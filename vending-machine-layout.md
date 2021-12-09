# App.js
state:
    loading
    itemData [{
        itemId
        productName
        price
        quantityLeft
    }]

methods:
    loadItems (on mount)
    updateMoney
    selectItem
    makePurchase
    returnChange

Render:
- <h1>Vending Machine</h1>
- <hr>
- <Row col-8> <Items /> </Row>
- <Row col-4> <Business /> </Row>

# Items.js
const itemBox = () => {
    return
        <Col>
            <div> {item.itemId} </div>
            <div> {item.productName} </div>
            <div> {item.price} </div>
            <div> {item.quantityLeft} </div>
        </Col>
}

props:
    items [{
        itemId
        productName
        price
        quantityLeft
    }]

Render:
{this.props.items.map ((item, i) => {
    return <itemBox item={item} key={i}
})}

# Business.js
Render:
- <Row> Total $ In </Row>
- <Row> Messages </Row>
- <Row> Change </Row>


# Tasks
- selectItem (Alana)
- Items Component (Anthony)
- makePurchase (Patrick)
- loadItems (Susan)
- updateMoney, returnChange (Jared)
- Styling and HTML Structure (Ben)
