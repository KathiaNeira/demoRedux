import * as React from 'react';
import { List } from '../../Components/List';
import { WrapperContainerList } from '../../Components/List/Wrapper'

interface State {
    options: any[];
}

export class ListContainer extends React.Component<{}, State> {
    constructor(props) {
        super(props);
    }

    render(): JSX.Element {     
        return(
            <WrapperContainerList>
                {this.state.options.map((element, index) => {
                    return(
                        <List key={index} id={element.id} image={element.image}/>
                    )
                })}
            </WrapperContainerList>
        )
    }
}