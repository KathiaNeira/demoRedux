import * as React from 'react';
import { Car } from '../../Components/Car';
import { store } from '../../store'

interface State {
	car: any
}

export class CarContainer extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
        	car: []
        };

        store.subscribe(()=>{
	    	this.setState({
	    		car: store.getState().car
	    	})
	    })
    }


    render(): JSX.Element {
    	console.log('this.state.car', this.state.car)
        return(
        	<React.Fragment>
			{this.state.car.map((element, index) => {
	           	return(
	                <Car id={element.id} name={element.name}/>
				)
	        })}
	        </React.Fragment>
           
        )
    }
}