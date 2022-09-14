import Card from 'react-bootstrap/Card';
import { useEpContext } from '../context/EpContext';

function Home() {

    const {Loading} = useEpContext()
    console.log(Loading)

    return (
    <Card   style={{ width: '100%', height: "100%"}} 
            className="bg-secondary " 
            text='white'>

        <br/>
        <Card.Body>

            <Card.Title>La Unica Certeza Podcast</Card.Title>
            <br/>
            <Card.Text>
            En este podcast seleccionas un producto cultural por episodio y esa es nuestra unica certeza, todo el resto es completamente incierto, hablaremos de cualquier cosa que nos produzca el consumo de tal certeza. Con Lucaz Martinez, Pablo Vazquez Soldano y de vez en cuando algun invitado.
            </Card.Text>
            <Card.Text>
            Cada nuevo episodio saldra viernes de por medio, en la medida de lo pesible La Unica Certeza de un episodio sera anunciada al finalizar el episodio anterior, pero como en este podcast certezas hay solo una, todo puede cambiar.
            </Card.Text>
            <Card.Link href="https://www.youtube.com/channel/UC6-o6fmqvG3OneKYEAlHiiw" className='cardLink' target={"_blank"}>Canal de youtube</Card.Link>
        </Card.Body>
    </Card>
    );
}

export default Home