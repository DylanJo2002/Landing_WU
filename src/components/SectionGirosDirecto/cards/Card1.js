import persona from '../img/persona.png'
import dinero from '../img/money.png'
import celular_checked from '../img/phone_check.png'

function Card1(){
    return (
        <div className='bg_white container_paso_giro_directo'>
            <p className='h3 mb-5'>Desde nuestro portal web</p>
            
            <div className='d-flex align-items-center mb-4'>
                <img src={persona} alt="Ícono de persona" />
                <p className='black mb-0 ps-3'>Inicia <strong>sesión </strong>
                    o <strong>regístrate</strong>.</p>
            </div>

            <div className='d-flex align-items-center mb-4'>
                <img src={dinero} alt="Ícono de dinero" />
                <p className='black mb-0 ps-3'>Elige la opción <strong>Ahorros y luego Abona tu<br/>
                    giro</strong>.</p>
            </div>

            <div className='d-flex align-items-center mb-4'>
                <img src={celular_checked} alt="Ícono de celular verificado" />
                <p className='black mb-0 ps-3'>Diligencia tus datos y finaliza el proceso<br />
                    haciendo clic en <strong>Abona a mi cuenta</strong>.</p>
            </div>
        </div>

    )
}


export default Card1;