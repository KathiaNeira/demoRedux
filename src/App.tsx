import * as React from 'react';
import { ListContainer } from './Containers/ListContainer';
import { CarContainer } from './Containers/CarContainer';

export const App: React.SFC = () => {
    return(
        <React.Fragment>
            <ListContainer />
            <CarContainer/>
        </React.Fragment>
    )
}