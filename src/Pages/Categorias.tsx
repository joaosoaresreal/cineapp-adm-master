import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarCategorias } from '../api'
import { Button } from "baseui/button";
import {
    ThemeProvider,
    createTheme,
    darkThemePrimitives
} from "baseui";

type Categoria = {
    id: string,
    name: string
}

export function Categorias() {
    const [categorias, setCategorias] = useState(Array<Categoria>)

    useEffect(() => {
        const getData = async () => {
            setCategorias(await listarCategorias())
        }
        getData()
    }, [])
    
    return (
        <>
            <h1>CATEGORIAS</h1>
            <div>
                {categorias.map((categoria) => <p key={categoria.id}>{categoria.name}</p>)}
            </div>
            <Link to='/nova-categoria'>
                <ThemeProvider
                    theme={createTheme(darkThemePrimitives, {
                        colors: { buttonPrimaryFill: "#102C60" }
                    })}
                >
                    <Button>NOVA CATEGORIA</Button>
                </ThemeProvider>
            </Link>
        </>
    )
}