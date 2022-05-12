import persona from '../img/persona.png'
import dinero from '../img/money.png'
import celular_checked from '../img/phone_check.png'

function Card1(){
    return (
        <div className='bg_white container_paso_giro_directo border_cards'>
            <p className='h3 mb-4 mb-lg-5'><strong>Desde nuestro portal web</strong></p>
            
            <div className='d-flex align-items-center mb-4'>
                <img src={persona} alt="Ícono de persona" />
                <p className='black mb-0 ps-3'>Inicia <strong>sesión </strong>
                    o <strong>regístrate</strong>.</p>
            </div>

            <div className='d-flex align-items-center mb-4'>
                <img src={dinero} alt="Ícono de dinero" />
                <p className='black mb-0 ps-3 d-none d-lg-block'>Elige la opción <strong>Ahorros y luego Abona tu<br/>
                    giro</strong>.</p>

                <p className='black mb-0 ps-3 d-lg-none'>Elige la opción <strong>Ahorros y luego Abona tu giro</strong>.</p>    
            </div>

            <div className='d-flex align-items-center mb-4'>
                <img src={celular_checked} alt="Ícono de celular verificado" />
                <p className='black mb-0 ps-3  d-none d-lg-block'>Diligencia tus datos y finaliza el proceso<br />
                    haciendo clic en <strong>Abona a mi cuenta</strong>.</p>
                
                <p className='black mb-0 ps-3 d-lg-none'>Diligencia tus datos y finaliza el proceso haciendo clic en 
                    <strong>Abona a mi cuenta</strong>.</p>        
            </div>
        </div>

    )
}


export default Card1;