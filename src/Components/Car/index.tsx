import * as React from 'react';
import * as PropTypes from 'prop-types';
import { WrapperImage, WrapperButton, WrapperName} from './Wrapper' 

interface Props {
    name: string,
    image: string,
    onclick: any,
}

const Car: React.SFC<Props> = ({ name, image, onclick }) => (
    <React.Fragment>
        <WrapperImage src={image}/>
        <WrapperName>{name}</WrapperName>
        <WrapperButton onClick={onclick}>Adoptar</WrapperButton>
    </React.Fragment>
)

Car.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    onclick: PropTypes.func
}

export { Car }