import './SectionEnvioDirecto.css'
import hombre_calc from './img/hombre_calculadora.png'

function SectionEnvioDirecto() {
    return(
        <div className='bg_black container_s6'>
            <div className="row mx-0">
                <div className="col-12 col-lg-7">
                    <div className='container_col_envio_directo'>
                        <p className='white h3 mb-0'>Envío Directo a</p>
                        <p className='museoSans yellow h2 mb-3'>Cuenta Bancaria Internacional</p>
                        <p className='openSans white'>Ahora puedes realizar tus Giros directamente a una cuenta bancaria a 100<br/>
                        países en el exterior</p>

                        <div className='bg_yellow container_conocelos'>
                            <p className='museoSans black mb-0'>CONÓCELOS AQUÍ</p>
                        </div>

                        <p className='openSans white mb-5'>No requieres hacer ningún tipo de inscripción al servicio, solo debes<br/>
                           contar con los datos que te solicitan según el País.</p>

                        <p  className='museoSans700 white' >Por ejemplo, para envío de Giros a Estados Unidos</p>

                        <div className="row mx-0 pt-3">
                            <div className="col-12 col-lg-6">
                                <div className='d-flex align-items-center mb-4'>
                                    <div className='rounded-circle container_circular bg_yellow'>
                                        <p className='mb-0 font_size_angle_breakets'><strong>&gt;</strong></p>
                                    </div>
                                    <p className='mb-0 ps-2 white'>Nombre del banco</p>
                                </div>

                                <div className='d-flex align-items-center mb-4'>
                                    <div className='rounded-circle container_circular bg_yellow'>
                                        <p className='mb-0 font_size_angle_breakets'><strong>&gt;</strong></p>
                                    </div>
                                    <p className='mb-0 ps-2 white'>Número de ruta ABA</p>
                                </div>

                                <div className='d-flex align-items-center mb-4'>
                                    <div className='rounded-circle container_circular bg_yellow'>
                                        <p className='mb-0 font_size_angle_breakets'><strong>&gt;</strong></p>
                                    </div>
                                    <p className='mb-0 ps-2 white'>No. De cuenta</p>
                                </div>

                                <div className='d-flex align-items-center mb-4'>
                                    <div className='rounded-circle container_circular bg_yellow'>
                                        <p className='mb-0 font_size_angle_breakets'><strong>&gt;</strong></p>
                                    </div>
                                    <p className='mb-0 ps-2 white'>Direción de destinatario</p>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6">
                                <div className='d-flex align-items-center mb-4'>
                                    <div className='rounded-circle container_circular bg_yellow'>
                                        <p className='mb-0 font_size_angle_breakets'><strong>&gt;</strong></p>
                                    </div>
                                    <p className='mb-0 ps-2 white'>Ciudad del destinatario</p>
                                </div>    
                                <div className='d-flex align-items-center mb-4'>
                                    <div className='rounded-circle container_circular bg_yellow'>
                                        <p className='mb-0 font_size_angle_breakets'><strong>&gt;</strong></p>
                                    </div>
                                    <p className='mb-0 ps-2 white'>Código postal del destinatario</p>
                                </div>  

                                <div className='d-flex align-items-center mb-4'>
                                    <div className='rounded-circle container_circular bg_yellow'>
                                        <p className='mb-0 font_size_angle_breakets'><strong>&gt;</strong></p>
                                    </div>
                                    <p className='mb-0 ps-2 white'>Teléfono del destinatario</p>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-12 col-lg-5 pt-5">
                    <img src={hombre_calc} alt="Hombre haciendo cálculos" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default SectionEnvioDirecto;