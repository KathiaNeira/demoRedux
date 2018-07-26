import * as React from 'react';
import * as PropTypes from 'prop-types';
import { WrapperContainer } from './Wrapper' 

interface Props {

}

const Car: React.SFC<Props> = ({ }) => (
    <WrapperContainer>
        <p>car</p>
    </WrapperContainer>
)

Car.propTypes = {

}

export { Car }