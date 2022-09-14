import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs} from "firebase/firestore";
import { db } from '../services/getFirebase';
import { async } from '@firebase/util';
import { useEffect, useState } from 'react';



function Episodio({titulo, yt, descripcion, data}) {

    console.log(data)
    console.log(titulo)
    console.log(yt)
    console.log(descripcion)

    


    return ( 

        <Card   style={{ width: '100%', height: "100%"}} 
            className="bg-secondary " 
            text='white'>

        <br/>
        <Card.Body>

            <Card.Title>{titulo}</Card.Title>
            <br/>
            <div className="bg-secondary">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${yt}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <Card.Text>
            {descripcion}
            </Card.Text>
            <Card.Text>
            Version solo audio:
            </Card.Text>
            <Card.Link href="https://www.youtube.com/channel/UC6-o6fmqvG3OneKYEAlHiiw" className='cardLink' target={"_blank"}>Canal de youtube</Card.Link>
        </Card.Body>
    </Card>
        
     );
}

export default Episodio
