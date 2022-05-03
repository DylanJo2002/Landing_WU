import './SectionTeConectamos.css';
import logoWU from './img/logo_wu.png'
import persona from './img/persona_dinero.png'

function SectionTeConectamos() {
  return (
    <div className='soft_grey my-0 pt-5 pt-lg-0'>
      <div className='container-lg container_movile'>
        <div className="row p-0 m-0">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center p-0">
            <div className='mb-5 mb-lg-0'>
              <img className='logoWU' src={logoWU} alt="Logo de Western Union"/>
            </div>
            <div>
              <p className='black text-center text-lg-start'><span className='h1 museoSans'>Te conectamos</span>
                <br/>
                <span className='h3 museoSans700'>con más de 200 países a través
                  <br/>del</span> <span className='h2 museoSans'>Cobro y Envío de
                  <br/>Giros Internacionales</span>
              </p>

            </div>
          </div>

          <div className="col-12 col-lg-6 p-0">
            <img className='imgPersona img-fluid' src={persona} alt="Persona con computador y dinero"/>
          </div>

        </div>

      </div>
    </div>
  );
}

export default SectionTeConectamos;
