import './SectionTeConectamos.css';
import logoWU from './img/logo_wu.png'
import persona from './img/persona_dinero.png'

function SectionTeConectamos() {
  return (
    <div className='soft_grey my-0'>
      <div className='container'>

        <div className="row">
          <div className="col-6 d-flex flex-column justify-content-center">
            <div>
              <img src={logoWU} alt="Logo de Western Union"/>
            </div>
            <div>
              <p className='black'><span className='h1 museoSans'>Te conectamos</span>
                <br/>
                <span className='h3 museoSans700'>con más de 200 países a través
                  <br/>del</span> <span className='h2 museoSans'>Cobro y Envío de
                  <br/>Giros Internacionales</span>
              </p>

            </div>
          </div>

          <div className="col-6">
            <img className='imgPersona' src={persona} alt="Persona con computador y dinero"/>
          </div>

        </div>

      </div>
    </div>
  );
}

export default SectionTeConectamos;
