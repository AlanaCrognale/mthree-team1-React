
import React from 'react';
import Items from './components/Items'
import Money from './components/Money'
import Messages from './components/Messages'
import Change from './components/Change'
import 'bootstrap/dist/css/bootstrap.min.css';

const SERVICE_URL = "http://tsg-vending.herokuapp.com";

class App extends React.Component {
    
    state = {
    loading: false,
    money: 0,
    messages: '',
    selectedItemId: '',
    change: '',
    items: [
      {
        "itemId": 1,
        "itemName": "Red Herring",
        "price": 10.00,
        "quantity": 100
      }]
    };
    
    loadItems() {
      this.setState({ loading: true });
      console.log("Loading item data");
      fetch(SERVICE_URL + "/items")
        .then(data => data.json())
        .then(data => this.setState(
          { items: data, loading: false }
        ));
    }
    
    componentDidMount() {
        console.log("App is now mounted.")
        this.loadItems();
    }

    selectItem(event) {
        let id = event.target.value;
        this.setState({selectedItemId: id, messages: '', change: ''});
    }

    updateMoney = (amount) => {
        this.setState({money : money += amount})
    }




    makePurchase() {
	
	if (this.state.selectedId == '') {
		this.setState({message: 'Please make a selection'});

	} else {
		fetch('http://tsg-vending.herokuapp.com/money/'+this.state.money+'/item/'+this.state.selectedId, {
			method: 'POST',
		})
		
		.then(response => response.json())
		.then(change => {
			this.setState({message: "Thank You!!')});
			this.getChange(change.quarters, change.dimes, change.nickels, change.pennies);
			this.setState({money: 0, selectedId: ''});
		})
		.catch((error) => {
			var response = error.responseText;
			response = response.substring(12, response.length-2);
			this.setState({message: response})
		});

		this.loadItems();
		

	}
    }




    returnChange() {
        var currentMoney = this.state.money;
        var numQuarters = Math.floor(currentMoney/0.25);
        currentMoney = (currentMoney % 0.25).toFixed(2);
        var numDimes = Math.floor(currentMoney/0.1);
        currentMoney = (currentMoney % 0.1).toFixed(2);
        var numNickels = Math.floor(currentMoney/0.05);
        currentMoney = (currentMoney % 0.05).toFixed(2);
        var numPennies = currentMoney;
        getChange(numQuarters, numDimes, numNickels, numPennies);
        this.setState({money : 0})
    }

    // Establish naming (singular, plural, doesn't exist)
    getChange(quarters, dimes, nickels, pennies) {

        var quarterNaming = '';
        if (quarters > 0) { quarterNaming = quarters + ' Quarter'; }
        if (quarters > 1) { quarterNaming = quarters + ' Quarters'; }

        var dimeNaming = '';
        if (dimes > 0) { dimeNaming = dimes + ' Dime'; }
        if (dimes > 1) { dimeNaming = dimes + ' Dimes'; }

        var nickelNaming = '';
        if (nickels > 0) { nickelNaming = nickels + ' Nickel'; }
        if (nickels > 1) { nickelNaming = nickels + ' Nickels'; }

        var pennyNaming = '';
        if (pennies > 0) { pennyNaming = pennies + ' Penny'; }
        if (pennies > 1) { pennyNaming = pennies + ' Pennies'; }

        var changeReturned = (quarterNaming + ' ' + dimeNaming + ' ' + nickelNaming + ' ' + pennyNaming).replace(/\s+/g, ' ');

        this.setState({ change: changeReturned })
    }
    
    // render html
    render() {
        return (
            <body>
                <h1>Vending Machine</h1>
                <hr/>

                <ul className="list-group" id="errorMessages"></ul>

                <div className="container">
                    <div className="row">
                        <div className="col-8" id="vending-items">
                            <div className="row"><Items
                                                items={this.state.items}
                                                selectItem={this.selectItem}
                                            /></div>
                        </div>
                        <div className="col-4 spacing" id="vending-actions">
                            <div className="row"><Money
                                                money={this.state.money}
                                                updateMoney={this.updateMoney}
                                            /></div>
                            <div className="row"><Messages
                                                messages={this.state.messages}
                                                selectedItemId={this.state.selectedItemId}
                                                makePurchase={this.makePurchase}
                                            /></div>
                            <div className="row"><Change
                                                change={this.state.change}
                                                returnChange={this.returnChage}
                                            /></div>
                        </div>
                    </div>
                </div>
            </body>
        );
    }

export default App;
