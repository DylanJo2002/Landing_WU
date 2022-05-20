import Carousel from 'react-elastic-carousel'
import './SectionBeneficios.css'
import img_agilidad from './img/b_agilidad.png'
import img_comodidad from './img/b_comodidad.png'
import img_red from './img/b_red.png'

function SectionBeneficios(){
    return (
        <div className='bg_black'>
            <div className="container_content_beneficios">
                <div className='text-center text-lg-start py-5'>
                    <p className='white museoSans h2 mb-0'>Beneficios</p>
                </div>
                <div className='row mx-0'>

                    <div className="d-none d-lg-block col-4 p-0">
                        <div className="d-flex">
                            <div className='pe-3'>
                                <img src={img_comodidad} alt="Mano con dinero" />
                            </div>
                            <div>
                                <p className="museoSans700 white">
                                    Comodidad
                                </p>

                                <p className='white'>
                                    El destinatario contará con su dinero 
                                    en la cuenta en máximo <span className="yellow">3 días
                                    hábiles </span> posteriores a la fecha de
                                    realización del envío.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="d-none d-lg-block col-4 p-0">
                        <div className="d-flex container_content_beneficio_centro">
                            <div className='pe-3'>
                                <img src={img_agilidad} alt="Pilas de moneda" />
                            </div>
                            <div>
                                <p className="museoSans700 white">
                                    Agilidad
                                </p>

                                <p className='white'>Rapidez y seguridad en la transacción.</p>
                            </div>

                        </div>
                    </div>

                    <div className="d-none d-lg-block col-4 p-0">
                        <div className="d-flex">
                            <div className='pe-3'>
                                <img src={img_red} alt="Sede" />
                            </div>
                            <div>
                                <p className="museoSans700 white">
                                    Amplia red de atención
                                </p>

                                <p className='white'>Cuentas con una amplia red de 
                                <span className='yellow'> oficinas a nivel nacional con
                                horarios extendidos y nuestro portal Web</span>.</p>
                            </div>

                        </div>
                    </div>  

                    <div className='container_carrousel_beneficios'>
                        <Carousel className='d-lg-none'>
                            <div className="text-center">
                                <div className="d-flex flex-column">
                                    <div className='pb-3'>
                                        <img src={img_comodidad} alt="Mano con dinero" />
                                    </div>
                                    <div>
                                        <p className="museoSans700 white">
                                            Comodidad
                                        </p>

                                        <p className='white'>
                                            El destinatario contará con su dinero 
                                            en la cuenta en máximo <span className="yellow">3 días
                                            hábiles </span> posteriores a la fecha de
                                            realización del envío.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className="d-flex flex-column">
                                    <div className='pb-3'>
                                        <img src={img_agilidad} alt="Pilas de moneda" />
                                    </div>
                                    <div>
                                        <p className="museoSans700 white">
                                            Agilidad
                                        </p>

                                        <p className='white'>Rapidez y seguridad en la transacción.</p>
                                    </div>

                                </div>
                            </div>
                            <div className='text-center'>
                                <div className="d-flex flex-column">
                                    <div className='pb-3'>
                                        <img src={img_red} alt="Sede" />
                                    </div>
                                    <div>
                                        <p className="museoSans700 white">
                                            Amplia red de atención
                                        </p>

                                        <p className='white'>Cuentas con una amplia red de 
                                        <span className='yellow'> oficinas a nivel nacional con
                                        horarios extendidos y nuestro portal Web</span>.</p>
                                    </div>

                                </div>
                            </div>
                        </Carousel>
                    </div>

                    <div className="col-12 text-center py-5">
                        <p className='white'>El servicio Directo a cuenta solo aplica 
                         para las transacciones de persona a persona.</p>
                    </div>          
                </div>
            </div>

        </div>
    );
}

export default SectionBeneficios;