import { createStore } from 'redux';

const reducer=(state, action)=> {
    switch (action.type) {
        case "SELECT_DOG":
            return {
                options: state.options.map((dog) => {
                    if(action.product.id === dog.id){
                        dog.availability = false;
                    } else {
                        dog.availability = true
                    }
                    return dog;
                }),
                selected: action.product,
            };
        
        case "ADOPTE_DOG":
            return {
                options: state.options.map((dog) => {
                    if(state.selected.id === dog.id){
                        dog.adopted = true
                    }
                    return dog;
                }),
                selected: {},
        };

        default:
            return state;
    }
}

const initialState: any = {
    options: [
        {
            id: 1,
            name: 'Copito',
            image: 'https://pet-uploads.adoptapet.com/5/6/d/269443746.jpg',
            sexo: 'Macho',
            age: '2 años y 1 mes',
            availability: true,
            adopted: false
        },
        {
            id: 2,
            name: 'Aquiles',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRojTJdpL2WX6UANwAHVgOf2wDLbfoelCRyTEwMiXy-V9c_N3nF4g',
            sexo: 'Macho',
            age: '3 años y 5 meses',
            availability: true,
            adopted: false
        },
        {
            id: 3,
            name: 'Fito',
            image: 'https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2017/05/name-3.jpg',
            sexo: 'Macho',
            age: '11 meses',
            availability: true,
            adopted: false
        },
        {
            id: 4,
            name: 'Luna',
            image: 'https://dogshealthproblems.com/wp-content/uploads/2017/05/female-dog-226x300.jpg',
            sexo: 'Hembra',
            age: '5 años y 1 mes',
            availability: true,
            adopted: false
        },
        {
            id: 5,
            name: 'Thor ',
            image: 'http://www.abc.net.au/news/image/10049644-3x2-700x467.jpg',
            sexo: 'Macho',
            age: '4 años y 3 meses',
            availability: true,
            adopted: false
        },
        {
            id: 6,
            name: 'Sasha',
            image: 'https://s-media-cache-ak0.pinimg.com/originals/2c/1c/2a/2c1c2a8bfe0b8136a4ef792892409005.jpg',
            sexo: 'Hembra',
            age: '1 año y 2 meses',
            availability: true,
            adopted: false
        }
    ],
    selected: {},
}

const store = createStore(reducer, initialState, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export { store }