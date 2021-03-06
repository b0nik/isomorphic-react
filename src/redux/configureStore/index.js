import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index'

export default function configureStore(initialState) {
    const logger = createLogger({
        collapsed: true,
        predicate: () =>
        process.env.NODE_ENV === `development` // eslint-disable-line no-unused-vars
    });

    const middleware = applyMiddleware(thunk, logger);

    return middleware(createStore)(rootReducer, initialState);
}
