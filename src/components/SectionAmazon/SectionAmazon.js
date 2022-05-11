import pc_amazon from './img/pc_amazon.png';
import './SectionAmazon.css'

function SectionAmazon() {
    return (

        <div className="bg_soft_grey container_section_amazon">
            <div className="container_content_beneficios">
                <div className="row mx-0">
                    <div className="col-12 col-lg-6 px-0 container_pc_amazon">
                        <img src={pc_amazon} alt="Computador visitando Amazon" className="img-fluid" />
                    </div>
                    
                    <div className="col-12 col-lg-6 pe-0 ps-3">
                        <p className='h3'>Compra en 
                            <span className='bg_yellow black ms-2'>
                                <a href="https://www.amazon.com" target="_blank" rel='noreferrer' className='text-decoration-none black museoSans h2'>
                                Amazon.com
                                </a>
                            </span>
                            <br />
                            y paga en efectivo
                        </p>

                        <p>Ya no necesitas tarjeta para comprar lo que siempre has deseado
                            en amazon.com ¡Acércate a cualquiera de <strong>nuestras oficinas Giros 
                                y Finanzas  
                            </strong> o en los puntos de pago autgorizados Efecty y paga en efectivo!
                        </p>

                        <div className="d-flex">
                            <div>
                                <div class="fit_content bg_yellow rounded-circle container_numero">
                                    <h5 class="mb-0">1</h5>
                                </div>
                            </div>
                            <p className='ps-2'>Realiza tu proceso de compra con normalidad en <strong>
                                    <a href="https://www.amazon.com" target="_blank" rel='noreferrer' className='black text-decoration-none'>
                                        www.amazon.com
                                    </a>
                                </strong>
                            </p>
                        </div>

                        <div className="d-flex">
                            <div>
                                <div class="fit_content bg_yellow rounded-circle container_numero">
                                    <h5 class="mb-0">2</h5>
                                </div>
                            </div>
                            <p className='ps-2'>
                                En la sección donde debes seleccionar el método de pago, escoge
                                <strong> Pay Code Amazon - Western Union </strong> y ubicar tu oficina 
                                Giors y Finanzas o Efecty donde realizarás el pago. Recuerda que tienes 
                                un plazo de 48 horas para hacer el pago.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SectionAmazon;