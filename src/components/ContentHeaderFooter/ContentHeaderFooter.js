import logo from './img/logos.png'
import vigilado from './img/vigilado.png'
import './ContentHeaderFooter.css';

function ContentHeaderFooter() {
    return (
        <div className="container my-0 p-sm-0">
            <div className="d-flex justify-content-sm-between align-items-center">
                <div>
                    <img className="vigilado" src={vigilado} alt="Vigilado Superintendencia Financiera de Colombia"/>
                </div>
                <div>
                    <img className="logo" src={logo} alt="logo de Giros y Finanzas, y Western Union"/>
                </div>
            </div>
        </div>
    );
}
  
export default ContentHeaderFooter;