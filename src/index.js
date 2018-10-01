import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App/App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import cardsReducer from './store/reducers/cardsReducer';
import userReducer from './store/reducers/userReducer';
import timerReducer from './store/reducers/timerReducer';
import pagesReducer from './store/reducers/pagesReducer';

const reducer = combineReducers({
    user: userReducer,
    cards: cardsReducer,
    timer: timerReducer,
    pages: pagesReducer
});

const store = createStore(reducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
