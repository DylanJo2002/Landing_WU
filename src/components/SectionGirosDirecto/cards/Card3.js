import logo_wu from '../img/wu.png'
import send_money from '../img/send_money.png'
import card from '../img/card.png'


function Card3(){
    return (
        <div className='bg_white container_paso_giro_directo border_cards'>
            <p className='h3 mb-4 mb-lg-5 d-none d-lg-block'><strong>Desde el exterior directo en<br/>
                tu Cuenta en Colombia</strong></p>

            <p className='h3 mb-4 mb-lg-5 d-lg-none'><strong>Desde el exterior directo en 
                tu Cuenta en Colombia</strong></p>    
            
            <div className='d-flex align-items-center mb-4'>
                <img src={logo_wu} alt="Ícono de Western Union" />
                <p className='black mb-0 ps-3 d-none d-lg-block'>Dile a la persona que te envía un Giro<br/>
                    desde el exterior, que lo haga en su<br/>
                    agencia <strong>Western Union </strong> más cercana.</p>
                    
                <p className='black mb-0 ps-3 d-lg-none'>Dile a la persona que te envía un Giro desde el exterior, que lo haga en su
                    agencia <strong>Western Union </strong> más cercana.</p>    

            </div>

            <div className='d-flex align-items-center mb-4'>
                <img src={send_money} alt="Ícono de enviar dinero" />
                <p className='black mb-0 ps-3 d-none d-lg-block'>Debe decir que va a enviar su <strong>Giro<br/>
                    directo a una Cuenta </strong>en Colombia.</p>
                    
                <p className='black mb-0 ps-3 d-lg-none'>Debe decir que va a enviar su <strong>Giro directo a una Cuenta 
                    </strong> en Colombia.</p>    
            </div>

            <div className='d-flex align-items-center mb-4'>
                <img src={card} alt="Ícono de tarjeta" />
                <p className='black mb-0 ps-3 d-none d-lg-block'><strong>Deberá brindar tus datos: </strong>Número de<br/>
                    Cuenta Bancaria de Giros y Finanzas y tu<br/>
                    cédula, para que la consignación sea<br/>
                    efectiva.</p>

                <p className='black mb-0 ps-3 d-lg-none'><strong>Deberá brindar tus datos: </strong>
                    Número de Cuenta Bancaria de Giros y Finanzas y tu cédula, para que la consignación sea efectiva.</p>    

            </div>
        </div>

    )
}


export default Card3;