
import React, {Component} from 'react';
import Dishes from './Dishes';

class MenuContainer extends Component {
    constructor() {
        super();
        this.state = { dishesList:[
                                {
                                    "name": "Corn Sandwich",
                                    "cost": 50,
                                    "ingredients": "Bread, Boiled Corn, Cheese, Vegetables, Salt, Pepper"
                                },
                                {
                                    "name": "Veg Pizza",
                                    "cost": 200,
                                    "ingredients": "Pizza base, Mozarella Cheese, Capsicum, Onion, Tomato Puree"
                                },
                                {
                                    "name": "Cheesy Fries",
                                    "cost": 70,
                                    "ingredients": "Cheese, Potato, Oil, Salt, Water"
                                },
                                {
                                    "name": "Omelette",
                                    "cost": 20,
                                    "ingredients": "Oil, Eggs"
                                }
                            ]
                        }
    }


    addDishItems=() => {
        let name=prompt("Enter the name of dish: ");
        let cost=prompt("Enter the cost of dish: ");
        let ingredients=prompt("Enter the ingredients used: ");

        let dishItem={
            "name":name,
            "cost":cost,
            "ingredients":ingredients
        };

        let newDishesList=[...this.state.dishesList];
        newDishesList.push(dishItem);

        this.setState(() => {
            return {
              dishesList:newDishesList
            };
          });
        }
   
        render() {
            return (
                <div className="menu">
                    <Dishes dish={this.state.dishesList} additems={this.addDishItems}/>
                </div>
            );
}
}
export default MenuContainer;

