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
    }

    addToCar(product) {
        store.dispatch({
            type: "ADD_TO_CART",
            product
        })
    }

    render(): JSX.Element {     
        return(
            <WrapperContainerList>
                {this.state.options.map((element, index) => {
                    return(
                        <List key={index} id={element.id} image={element.image} onclick={() => this.addToCar(element)}/>
                    )
                })}
            </WrapperContainerList>
        )
    }
}