import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {listarFilmes} from '../api'

type Filmes = {
    id: string,
    title: string,
    releaseDate: string,
    synopsis: string,
    categoryId: string,
    duration: string,
    parentalRating: string,
    images: string
}

export function Filmes(){
    const [filmes, setFilmes] = useState(Array<Filmes>)

    useEffect(()=>{
        const getData = async ()=>{
            setFilmes(await listarFilmes())
        }
        getData()
    }, [])
    return (
        <>
            <h1>Filmes</h1>
            <Link to='/novo-filme'>Novo Filme</Link>
            <div>
            {filmes.map((filmes)=><p key={filmes.id}>{filmes.title} {filmes.duration} {filmes.synopsis}</p>)}
            </div>
        </>
    )
}