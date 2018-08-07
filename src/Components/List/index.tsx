import * as React from 'react';
import * as PropTypes from 'prop-types';
import { WrapperList, WrapperImage, Container, Button, Image, WrapperInfo, WrapperName} from './Wrapper';


interface Props {
    id: any,
    image: any,
    name: string,
    sexo:string,
    age: string,
    onclick: any,
    availability: any
}

const List: React.SFC<Props> = ({ id, image, name, sexo, age, onclick, availability }) => (
    <React.Fragment>
        <WrapperList>
            <Container>
                <WrapperImage>
                    <Image src={image}/>
                    <Button id={id} onClick={onclick} availability={availability}>
                        Ver más
                    </Button>
                </WrapperImage>
                <WrapperInfo>
                    <WrapperName>
                        {name}
                        <br/>
                        {sexo} | {age}
                    </WrapperName>
                </WrapperInfo>
            </Container>
        </WrapperList>
    </React.Fragment>
)

List.propTypes =  {
    id: PropTypes.any,
    image: PropTypes.any,
    name: PropTypes.string,
    sexo: PropTypes.string,
    age: PropTypes.string,
    onclick: PropTypes.func,
    availability: PropTypes.any
}

export { List }