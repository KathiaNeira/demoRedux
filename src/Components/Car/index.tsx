import * as React from 'react';
import * as PropTypes from 'prop-types';
import { WrapperImage, WrapperButton, WrapperName} from './Wrapper' 

interface Props {
    name: string,
    image: string
}

const Car: React.SFC<Props> = ({ name, image }) => (
    <React.Fragment>
        <WrapperImage src={image}/>
        <WrapperName>{name}</WrapperName>
        <WrapperButton>Adoptar</WrapperButton>
    </React.Fragment>
)

Car.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string
}

export { Car }