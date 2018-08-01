import { createStore } from 'redux';

const reducer=(state, action)=> {
    if (action.type === "ADD_TO_CART") {
        return {
            ...state,
            car: state.car.concat(action.product)
        }
    }
    return state
}

const initialState: any = {
    options: [
        {
            id: 1,
            name: 'Item1',
            image: 'http://mypetsmart.petsmart-qa.com/sites/default/files/field_image/puggle-1.jpg',
        },
        {
            id: 2,
            name: 'Item2',
            image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001608/American-Hairless-Terrier-On-White-01-400x267.jpg',
        },
        {
            id: 3,
            name: 'Item3',
            image: 'https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2017/05/name-3.jpg',
        },
        {
            id: 4
            name: 'Item4',
            image: 'https://dogshealthproblems.com/wp-content/uploads/2017/05/female-dog-226x300.jpg',
        },
        {
            id: 5,
            name: 'Item5',
            image: 'http://www.abc.net.au/news/image/10049644-3x2-700x467.jpg',
        },
        {
            id: 6,
            name: 'Item6',
            image: 'https://s-media-cache-ak0.pinimg.com/originals/2c/1c/2a/2c1c2a8bfe0b8136a4ef792892409005.jpg',
        }
    ],
    car: [],
}

const store = createStore(reducer, initialState);

export { store }