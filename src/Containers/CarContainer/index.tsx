import * as React from 'react';
import { Car } from '../../Components/Car';

interface State {
}

export class CarContainer extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return(
           <Car/> 
        )
    }
}