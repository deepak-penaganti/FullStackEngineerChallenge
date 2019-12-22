import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { default as createSagaMiddleware } from 'redux-saga';

import { rootReducer } from './reducers/root-reducer';
import { employeeSaga } from './sagas/employee.saga';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
    trace: true
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

(function () {
    sagaMiddleware.run(employeeSaga)
})();