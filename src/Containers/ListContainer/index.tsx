import * as React from 'react';
import { List } from '../../Components/List';
import { WrapperContainerList } from '../../Components/List/Wrapper';
import { store } from '../../store'

interface State {
    options: any[];
}

export class ListContainer extends React.Component<{}, State> {

    constructor(props) {
        super(props);
        this.state = {
            options: store.getState().options
        }
        
        this.addToCar = this.addToCar.bind(this);

        store.subscribe(()=>{
	    	this.setState({
	    		options: store.getState().options
	    	})
		});
    }

    addToCar(product) {
        console.log('cambiando...', product);
        store.dispatch({
            type: "SELECT_DOG",
            product
        });
    }

    render(): JSX.Element {     
        return(
            <WrapperContainerList>
                {this.state.options.map((element, index) => {
                    return(
                        <List key={index} id={element.id} image={element.image} name={element.name} sexo={element.sexo} age={element.age} onclick={() => this.addToCar(element)} availability={element.availability}/>
                    )
                })}
            </WrapperContainerList>
        )
    }
}