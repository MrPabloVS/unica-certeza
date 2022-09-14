import Episodio from "./episodio";
import { useParams } from "react-router-dom";
import { useState, useEffect,  } from "react";
import Cargando from "./cargando"
import { useEpContext } from "../context/EpContext";




function EpContainer() {

    const { ep } = useParams()
    const {List} = useEpContext()

    const [loading, setLoading] = useState(true)
    

     const filtro =List.filter(item => item.numero === ep)[0]
     console.log(filtro)



    useEffect(() => {
      setInterval(() => {
        setLoading(false);
      }, 1200);
    }, [ep]);

                    
    return ( 
        <div>
            {loading ? <Cargando/> : 
                    <Episodio titulo={filtro.titulo} yt={filtro.yt} descripcion={filtro.descripcion}/>
            } 
            
        </div> );
}

export default EpContainer;


 