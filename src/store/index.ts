import { createStore } from 'redux';

const reducer=(state, action)=> {
    return state
}

const initialState: any = {
    options: [
        {
            id: 1,
            name: 'Item1',
            image: 'http://via.placeholder.com/250x150',
        },
        {
            id: 2,
            name: 'Item2',
            image: 'http://via.placeholder.com/250x150',
        },
        {
            id: 3,
            name: 'Item3',
            image: 'http://via.placeholder.com/250x150',
        },
        {
            id: 4,
            name: 'Item4',
            image: 'http://via.placeholder.com/250x150',
        },
        {
            id: 5,
            name: 'Item5',
            image: 'http://via.placeholder.com/250x150',
        },
        {
            id: 6,
            name: 'Item6',
            image: 'http://via.placeholder.com/250x150',
        }
    ],
    car: [],
}

const Store = createStore(reducer, initialState);

export { Store }