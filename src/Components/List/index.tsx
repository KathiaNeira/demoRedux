import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WrapperList, WrapperImage, Container, Button, Image} from './Wrapper';


interface Props {
    id: any,
    image: any,
    onclick: any
}

const List: React.SFC<Props> = ({ id, image, onclick }) => (
    <React.Fragment>
        <WrapperList>
            <Container>
                <WrapperImage>
                    <Image src={image}/>
                </wrapperImage>
                <Button id={id} onClick={onclick}>
                    Adoptar
                </Button>
            </Container>
        </WrapperList>
    </React.Fragment>
)

List.propTypes =  {
    id: PropTypes.any,
    image: PropTypes.any,
    onclick: PropTypes.func
}

export { List }