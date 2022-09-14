import Cargando from "./cargando";
import { useEpContext } from "../context/EpContext"
import {useEffect, useState} from "react"
import EpList from "./epList";


function EpListContainer() {

    const {Loading, List} = useEpContext()

    const [isDisplayed, setIsDisplayed] = useState(true);

    useEffect(() => {
    setInterval(() => {
        setIsDisplayed(false);
    }, 1200);
    }, []);


    return ( 
        <div>
            {Loading ? <Cargando/> : 
                   <EpList list={List} />            
            }  
        </div>
       );

    }
export default EpListContainer;