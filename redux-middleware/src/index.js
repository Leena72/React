import {createStore, applyMiddleware} from 'redux';

//Create a reducer
const reducer = (state = { a:100 }, action) => {
switch (action.type) {
case 'ACTION_1' : {
return state;
}

case 'ACTION_2' : {
let a=200;
return a;
}

case 'ACTION_3' : {
let a =300;
return a;
}

default: {
return state;
}
}
};
//Create a middleware
const fireMultipleActions = store => next => action => {
if(Array.isArray(action)) {
action.map(a => store.dispatch(a));
} else {
next(action);
}
};

const middlewares = applyMiddleware(fireMultipleActions);

//Create global store
const store = createStore(reducer, middlewares);
store.subscribe((action) => {
console.log("Store has changed", store.getState());
});

//firing actions
store.dispatch([{type: 'ACTION_1'}, {type: 'ACTION_2'}, {type: 'ACTION_3'}]);