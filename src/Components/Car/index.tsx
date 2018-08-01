import * as React from 'react';
import * as PropTypes from 'prop-types';
import { WrapperContainer } from './Wrapper' 

interface Props {
	id:any,
	name: string
}

const Car: React.SFC<Props> = ({ id, name }) => (
    <WrapperContainer>
        <p>id={id}</p>
        <p>{name}</p>
    </WrapperContainer>
)

Car.propTypes = {
	id: PropTypes.any,
	name: PropTypes.string
}

export { Car }