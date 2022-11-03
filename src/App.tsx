import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { Categorias } from './Pages/Categorias';
import { Home } from './Pages/Home';
import { HeaderApp } from './components/HeaderApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const engine = new Styletron();

export default function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <HeaderApp />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>            
            <Route path='/categorias' element={<Categorias/>}/>
          </Routes>
        </BrowserRouter>
      </BaseProvider>
    </StyletronProvider>
  );
}
