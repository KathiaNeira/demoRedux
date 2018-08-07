import * as React from 'react';
import { Car } from '../../Components/Car';
import { store } from '../../store';
import { WrapperContainer } from '../../Components/Car/Wrapper'
import { element } from 'prop-types';

interface State {
    selected: any
}

export class CarContainer extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            selected: {}
        };
        this.adopteDog = this.adopteDog.bind(this);
        store.subscribe(()=>{
	    	this.setState({
                selected: store.getState().selected
	    	})
		});
    }

    adopteDog(product) {
        store.dispatch({
            type: "ADOPTE_DOG",
            product
        });
    }

    render(): JSX.Element {
        return(
        	<WrapperContainer>
				<Car name={this.state.selected.name} image={this.state.selected.image} onclick={() => this.adopteDog(element)} />
	        </WrapperContainer>
           
        )
    }
}