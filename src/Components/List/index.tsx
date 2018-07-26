import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WrapperList, WrapperImage, Container, Button} from './Wrapper'

interface Props {
    id: any,
    image: any,
}

const List: React.SFC<Props> = ({ id, image }) => (
    <React.Fragment>
        {/* <WrapperList>
            <Container>
                <WrapperImage src={image} />
                <Button id={id}>
                    Texto
                </Button>
            </Container>
        </WrapperList> */}
    </React.Fragment>
)

List.propTypes =  {
    id: PropTypes.any,
    image: PropTypes.any
}

export { List }