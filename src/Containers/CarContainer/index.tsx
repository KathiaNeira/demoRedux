import * as React from 'react';
import { Car } from '../../Components/Car';
import { store } from '../../store';
import { WrapperContainer } from '../../Components/Car/Wrapper'

interface State {
	selected: any
}

export class CarContainer extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
        	selected: {}
        };

        store.subscribe(()=>{
	    	this.setState({
	    		selected: store.getState().selected
	    	})
		});
    }

    render(): JSX.Element {
		console.log('this.state.car0', this.state.selected)
        return(
        	<WrapperContainer>
				<Car name={this.state.selected.name} image={this.state.selected.image} />
	        </WrapperContainer>
           
        )
    }
}