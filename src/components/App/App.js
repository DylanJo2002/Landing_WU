import './App.css';
import HeaderFooter from '../HeaderFooter/Header'
import SectionTeConectamos from '../SectionTeConectamos/SectionTeConectamos';
import SectionReclamarEnColombia from '../SectionReclamarEnColombia/SectionReclamarEnColombia';

function App() {
  return (
    <div className="App">
      <HeaderFooter type="header"></HeaderFooter>
      <SectionTeConectamos></SectionTeConectamos>
      <SectionReclamarEnColombia></SectionReclamarEnColombia>
      <HeaderFooter type="footer"></HeaderFooter>
    </div>
  );
}

export default App;
