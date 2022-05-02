import logo from './img/logos.png'
import vigilado from './img/vigilado.png'
import './ContentHeaderFooter.css';

function ContentHeaderFooter() {
    return (
        <div className="container p-0">
            <div className="d-flex justify-content-between align-items-center">
                <img className="vigilado" src={vigilado} alt="Vigilado Superintendencia Financiera de Colombia"/>
                <img className="logo" src={logo} alt="logo de Giros y Finanzas, y Western Union"/>
            </div>
        </div>
    );
}
  
export default ContentHeaderFooter;