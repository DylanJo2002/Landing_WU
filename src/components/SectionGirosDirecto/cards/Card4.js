import password from '../img/password.png'
import persona from '../img/persona.png'
import dinero from '../img/money.png'

function Card4(){
    return (
        <div className='bg_white container_paso_giro_directo border_cards'>
            <p className='h3 mb-4 mb-lg-5'><strong>Desde nuestras oficinas</strong></p>
            
            <div className='d-flex align-items-center mb-4'>
                <img src={password} alt="Ícono de celular" />
                <p className='black mb-0 ps-3'>Conocer el <strong>código MTCN </strong>&#40;Código del Giro&#41;.</p>
            </div>

            <div className='d-flex align-items-center mb-4'>
                <img src={persona} alt="Ícono de persona" />
                <p className='black mb-0 ps-3'><strong>Nombre del remitente </strong>&#40;persona que te<br/>
                    envía el Giro&#41;.</p>
            </div>

            <div className='d-flex align-items-center mb-4'>
                <img src={dinero} alt="Ícono de persona" />
                <p className='black mb-0 ps-3'><strong>País desde donde te envían </strong>y el <strong>valor<br/>
                    del Giro</strong>.</p>
            </div>
        </div>

    )
}


export default Card4;