import password from '../img/password.png'
import celular from '../img/phone.png'

function Card2(){
    return (
        <div className='bg_white container_paso_giro_directo'>
            <p className='h3 mb-4 mb-lg-5'>Desde nuestra línea de<br/>
                atención al cliente</p>
            
            <div className='d-flex align-items-center mb-4'>
                <img src={celular} alt="Ícono de celular" />
                <p className='black mb-0 ps-3 d-none d-lg-block'>LLama al <strong>01 8000 111 999</strong>, dile a uno de<br/>
                    nuestros asesores que quieres cobrar tu<br/>
                    <strong>Giro directo a tu Cuenta</strong>.</p>

                <p className='black mb-0 ps-3 d-lg-none'>LLama al <strong>01 8000 111 999</strong>, dile a uno de 
                    nuestros asesores que quieres cobrar tus <strong>Giro directo a tu Cuenta</strong>.</p>    
            </div>

            <div className='d-flex align-items-center mb-4'>
                <img src={password} alt="Ícono de secreto" />
                <p className='black mb-0 ps-3  d-none d-lg-block'><strong>Dile tus datos: </strong>nombre, país de donde te<br/>
                envía en dinero y el código MTCN.</p>

                <p className='black mb-0 ps-3 d-lg-none'><strong>Dile tus datos: </strong>nombre, país de donde te 
                    envía en dinero y el código MTCN.</p>
            </div>
        </div>

    )
}


export default Card2;