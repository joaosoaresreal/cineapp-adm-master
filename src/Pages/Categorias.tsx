import { useEffect, useState } from "react";
import {listarCategorias} from '../api'
import { FormCategoria } from "../components/FormCategoria";
import { HeaderApp } from "../components/HeaderApp";

export function Categorias(){
    const [categorias, setCategorias] = useState([])

    useEffect(()=>{
        const getData = async ()=>{
            setCategorias(await listarCategorias())
        }
        getData()
    }, [])
    return (
        <>
            <h1>Add categoria</h1>
            {categorias.map((categoria)=><p key={categoria.id}>{categoria.name}</p>)}
        </>
    )
}