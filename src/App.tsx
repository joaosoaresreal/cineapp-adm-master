import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { Categorias } from './Pages/Categorias';
import { Home } from './Pages/Home';
import { HeaderApp } from './components/HeaderApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NovaCategoria } from './Pages/nova-categoria';
import { Filmes } from './Pages/Fillmes';
import { NovoFilme } from './Pages/novo-filme';


const engine = new Styletron();

export default function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <BrowserRouter>
          <HeaderApp />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categorias' element={<Categorias />} />
            <Route path='/nova-categoria' element={<NovaCategoria/>}/>
            <Route path='/filmes' element={<Filmes/>}/>
            <Route path='/novo-filme' element={<NovoFilme/>}/>
          </Routes>
        </BrowserRouter>
      </BaseProvider>
    </StyletronProvider>
  );
}
