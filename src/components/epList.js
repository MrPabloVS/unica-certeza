import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { useEpContext } from "../context/EpContext"



function EpList() {

    const { List } = useEpContext()


    console.log(List)

    return ( 
        
        <Card style={{ width: '100%' }} bg="danger">
            <Card.Header className='text-white'>Listado de Episodios</Card.Header>
            <ListGroup variant="flush">
                {/* <ListGroup.Item ><a className='epListado'href='https://www.youtube.com/channel/UC6-o6fmqvG3OneKYEAlHiiw'>Cras justo odio</a></ListGroup.Item>
                <ListGroup.Item >Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                {List && List.map(item => <ListGroup.Item key={item.numero}><a className='epListado'href={`/episodios/${item.numero}`}>{item.titulo}</a></ListGroup.Item>)}
            </ListGroup>
        </Card>
        
    );
}

export default EpList;