import './App.css';
import HeaderFooter from '../HeaderFooter/Header'
import SectionTeConectamos from '../SectionTeConectamos/SectionTeConectamos';
import SectionReclamarEnColombia from '../SectionReclamarEnColombia/SectionReclamarEnColombia';
import SectionGirosDirecto from '../SectionGirosDirecto/SectionGirosDirecto';
import SectionComoEnviar from '../SectionComoEnviar/SectionComoEnviar';
import SectionEnvioDirecto from '../SectionEnvioDirecto/SectionEnvioDirecto';

function App() {
  return (
    <div className="App">
      <HeaderFooter type="header"></HeaderFooter>
      <SectionTeConectamos></SectionTeConectamos>
      <SectionReclamarEnColombia></SectionReclamarEnColombia>
      <SectionGirosDirecto></SectionGirosDirecto>
      <SectionComoEnviar></SectionComoEnviar>
      <SectionEnvioDirecto></SectionEnvioDirecto>
      <HeaderFooter type="footer"></HeaderFooter>
    </div>
  );
}

export default App;
