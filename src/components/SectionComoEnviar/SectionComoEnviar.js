import './SectionComoEnviar.css'
import hombre_pc from './img/hombre_pc.png'
import mujer_dinero from './img/mujer_dinero.png'


function SectionComoEnviar(){
    return (

        <div className="bg_soft_grey a pb-5">
            <div className="row row_como_enviar mx-0">
                <div className="col-12 text-center mb-5">
                    <p className='h1 museoSans black d-none d-lg-block'>¿Cómo enviar Giros<br/>Internacionales?</p>
                    <p className='h1 museoSans black d-lg-none'>¿Cómo enviar Giros Internacionales?</p>

                </div>

                <div className="col-12 col-lg-6  ">
                    <div className="d-flex flex-column container_text1_s4">
                        <p className='museoSans700 h3'>A través del portal transaccional
                            <br/><span className='bg_yellow'><a className='text-decoration-none black museoSans h2' 
                            href="https://www.girosyfinanzas.com" target="_blank" rel="noreferrer">www.girosyfinanzas.com</a>
                                </span></p>
                        <p className='black mb-3 d-none d-lg-block'>Envía tu dinero a cualquier país donde <strong>Western Union</strong> tenga<br/>
                            presencia, desde tu <strong>Cuenta de Ahorros Giros y Finanzas</strong> o<br/>
                            de otra entidad financiera, utilizando el canal PSE.</p>     
                        <p className='black d-none d-lg-block'>El destinatario puede reclamar el dinero en minutos en un<br/>
                            punto <strong>Western Union</strong> de su país y se mantendrá disponible<br/>
                            en el sistema durante 45 días. </p>       

                        <p className='black mb-3 d-lg-none'>Envía tu dinero a cualquier país donde <strong>Western Union </strong>tenga
                            presencia, desde tu <strong>Cuenta de Ahorros Giros y Finanzas</strong> o 
                            de otra entidad financiera, utilizando el canal PSE.</p>     
                        <p className='black d-lg-none'>El destinatario puede reclamar el dinero en minutos en un punto 
                            <strong> Western Union</strong> de su país y se mantendrá disponible en el sistema durante 45 días. </p>                

                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <img className='img-fluid' src={hombre_pc} alt="Hombre sentado con un portátil" />
                </div>

                <div className="d-none d-lg-block col-lg-6">
                    <div className='text-end mb-5 container_mujer_dinero'>
                        <img src={mujer_dinero} alt="Mujer con dinero" className="img-fluid" />
                    </div>

                    <div className="fit_content m-auto font_oblique font_size_recuerda">
                        <p>* El pago de la transferencia puede estar exento o sujeto al descuento<br/>
                            del Gravamen a los Movimientos Financieros (4*1.000) y depende<br/> 
                            del monto por recibir y del medio de pago.</p>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="d-flex flex-column container_text2_s4 ms-0 me-auto">
                        <p className='museoSans700 h3'>Giros internacionales
                        <span className='bg_yellow museoSans h2 black ms-1'>VIGO</span></p>
                        
                        <p className='black mb-3 d-none d-lg-block'>Podrás recibir en Colombia de manera rápida, el dinero<br/>
                            enviado por una persona desde Estados Unidos.</p>     
                        <p className='black mb-3 d-lg-none'>Podrás recibir en Colombia de manera rápida, el dinero 
                            enviado por una persona desde Estados Unidos.</p>                               

                        <div className="d-flex flex column mb-2">
                            <div>
                                <div className="fit_content bg_yellow rounded-circle container_numero">
                                    <h5 className='mb-0'>1</h5>
                                </div>
                            </div>
                            <p className='ps-3 d-none d-lg-block'>Dile a quien te envía el Giro, que lo haga a través de<br/> 
                                una oficina <strong>VIGO</strong> con destino al agente de <strong>Giros y<br/>
                                Finanzas en Colombia</strong>.</p>
                            
                            <p className='ps-3 d-lg-none'>Dile a quien te envía el Giro, que lo haga a través de  
                                una oficina <strong>VIGO</strong> con destino al agente de <strong>Giros y 
                                Finanzas en Colombia</strong>.</p>
  
                        </div>

                        <div className="d-flex flex column mb-2">
                            <div>
                                <div className="fit_content bg_yellow rounded-circle container_numero">
                                    <h5 className='mb-0'>2</h5>
                                </div>
                            </div>
                            <p className='ps-3'>Deberás proporcionar tus datos: nombre y número de cédula.</p>
                        </div>

                        <div className="d-flex flex column">
                            <div>
                                <div className="fit_content bg_yellow rounded-circle container_numero">
                                    <h5 className='mb-0'>3</h5>
                                </div>
                            </div>
                            <p className='ps-3 d-none d-lg-block'>Cuando recibas tu Giro, puedes cobrarlo en nuestras<br/>
                                oficinas o <strong>abonarlo directo a tu cuenta</strong> a través de la<br/>
                                línea <strong>01 8000 111 999</strong>. <br /> <br />
                                
                                También tienes la opción de solicitar que te envíen tu<br/>
                                <strong>Giro a Efecty</strong> y cobrarlo en una de sus oficinas. </p>
                                
                            <p className='ps-3 d-lg-none'>Cuando recibas tu Giro, puedes cobrarlo en nuestras 
                                oficinas o <strong>abonarlo directo a tu cuenta</strong> a través de la 
                                línea <strong>01 8000 111 999</strong>. <br /> <br />
                                
                                También tienes la opción de solicitar que te envíen tu 
                                <strong> Giro a Efecty</strong> y cobrarlo en una de sus oficinas. </p>
                        </div>

                    </div>
                </div>

                <div className="d-lg-none col-12">
                    <div className='text-end mb-5 container_mujer_dinero'>
                        <img src={mujer_dinero} alt="Mujer con dinero" className="img-fluid" />
                    </div>

                    <div className="fit_content m-auto font_oblique font_size_recuerda">
                        <p>* El pago de la transferencia puede estar exento o sujeto al descuento 
                            del Gravamen a los Movimientos Financieros (4*1.000) y depende del monto 
                            por recibir y del medio de pago.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SectionComoEnviar;