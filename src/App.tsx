import * as React from 'react';
import { ListContainer } from './Containers/ListContainer';
import { CarContainer } from './Containers/CarContainer';
import styled from 'styled-components';

const WrapperGeneral = styled.section`
    display: flex;
`

export const App: React.SFC = () => {
    return(
        <WrapperGeneral>
            <ListContainer />
            <CarContainer/>
        </WrapperGeneral>
    )
}