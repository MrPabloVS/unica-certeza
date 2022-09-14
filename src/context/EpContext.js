import {useState, createContext, useContext } from "react";
import { collection, query, where, getDocs} from "firebase/firestore";
import { db } from '../services/getFirebase';


const EpContext = createContext([])

export const useEpContext = () => useContext(EpContext)

const topLevel = []

async function getData () {
    const data = await getDocs(collection(db, "episodios"));
    
    console.log(data.docs)
    
    console.log(topLevel)


    for (const Ep of data.docs) {
        topLevel.push({
                    titulo: Ep._document.data.value.mapValue.fields.titulo.stringValue,
                    numero: Ep._document.data.value.mapValue.fields.numero.integerValue,
                    yt: Ep._document.data.value.mapValue.fields.yt.stringValue,
                    descripcion: Ep._document.data.value.mapValue.fields.descripcion.stringValue,
        
                 })
    }
    setTimeout(3000)

    class Episodio{
        constructor(titulo, descripcion, yt, numero){
            this.titulo = titulo;
            this.descripcion = descripcion;
            this.yt = yt;
            this.numero = numero;
        }        
    
    }
    
        
    
}
 getData()

function EpContextProvider({children}) {
    //States
    const [List, setList] = useState(topLevel)
    const [Loading, setLoading] = useState(false)
    
    
    console.log(topLevel)

    console.log(List)

    

    function Loader() {
        setTimeout(3000)
        setLoading(false)
    }
   
    

    return(
        <EpContext.Provider value={{
            List,
            Loading,
            Loader

        }}>
            {children}
        </EpContext.Provider>

    )
}

export default EpContextProvider