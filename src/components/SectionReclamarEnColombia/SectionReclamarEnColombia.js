import './SectionReclamarEnColombia.css'
import logo from './img/logos_colombia.png'

function SectioReclamarEnColombia(){
    return (
        <div>
            <div className="row p-0 container_sectionReclamarColombia mx-0">
                <div className="col-12 col-lg-6 bg_white d-flex justify-content-center pt-5">
                    <div>
                        <p className="h2 museoSans black">¿Cómo reclamar un<br/>
                        <span className="bg_yellow">Giro en Colombia?</span></p>
                    </div>
                </div>

                <div className="container_pasos position-absolute end-0 start-0 row mx-auto
                 px-lg-0 gap-4 justify-content-center">
                        <div className="col-12 col-lg bg_soft_grey container_paso border_cards">
                            <div className='container_content_paso'>
                                <p className='museoSans700 h3 mb-4 d-none d-lg-block'>
                                    Para hacerlo, <br />
                                    necesitas:
                                </p>
                                <p className='museoSans700 h3 mb-4 d-lg-none'>
                                    Para hacerlo, necesitas:
                                </p>
                                <div className='row gap-3'>
                                    <div className='col-12  d-flex align-items-center'>
                                        <div>
                                            <div className='rounded-circle container_circular bg_yellow'>
                                                <p className='mb-0 font_size_angle_breakets'><strong>&gt;</strong></p>
                                            </div>
                                        </div>
                                        <p className='mb-0 ps-2'>Código MTCN</p>
                                    </div>
                                    <div className='col-12 d-flex align-items-center'>
                                        <div>
                                            <div className='rounded-circle container_circular bg_yellow'>
                                                <p className='mb-0 font_size_angle_breakets'><strong>&gt;</strong></p>
                                            </div>
                                        </div>
                                        <p className='mb-0 ps-2'>Nombre completo del remitente</p>
                                    </div>
                                    <div className='col-12 d-flex align-items-center'>
                                        <div>
                                            <div className='rounded-circle container_circular bg_yellow'>
                                                <p className='mb-0 font_size_angle_breakets'><strong>&gt;</strong></p>
                                            </div>
                                        </div>
                                        <p className='mb-0 ps-2'>País desde donde envían</p>
                                    </div>
                                    <div className='col-12 d-flex align-items-center'>
                                        <div>
                                            <div className='rounded-circle container_circular bg_yellow'>
                                                <p className='mb-0 font_size_angle_breakets'><strong>&gt;</strong></p>
                                            </div>
                                        </div>
                                        <p className='mb-0 ps-2'>Valor del Giro</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg bg_soft_grey container_paso border_cards">
                            <div className="container_content_paso">
                                <p className='museoSans700 h3 mb-4'>
                                    Hazlo a través de:
                                </p>
                                <div className='row gap-3'>
                                    <div className='col-12  d-flex align-items-center'>
                                        <div>
                                            <div className='rounded-circle container_circular bg_yellow'>
                                                <p className='mb-0 font_size_angle_breakets'><strong>&gt;</strong></p>
                                            </div>
                                        </div>
                                        <p className='mb-0 ps-2'>Nuestras oficinas</p>
                                    </div>
                                    <div className='col-12 d-flex align-items-center'>
                                        <div>
                                            <div className='rounded-circle container_circular bg_yellow'>
                                                <p className='mb-0 font_size_angle_breakets'><strong>&gt;</strong></p>
                                            </div>
                                        </div>
                                        <p className='mb-0 ps-2'>Portal web<br/>
                                            <strong><a href="https://www.girosyfinanzas.com" className='text-decoration-none black'
                                                target="_blank" rel='noreferrer'>
                                                www.girosyfinanzas.com</a></strong></p>
                                    </div>
                                    <div className='col-12 d-flex align-items-center'>
                                        <div>
                                            <div className='rounded-circle container_circular bg_yellow'>
                                                <p className='mb-0 font_size_angle_breakets'><strong>&gt;</strong></p>
                                            </div>
                                        </div>
                                        <p className='mb-0 ps-2'>Línea nacional
                                            <strong> 01 8000 111 999</strong></p>
                                    </div>

                                    <p className='font_size_recuerda'><span className='font_oblique'>Recuerda que puedes Cobrar tus Giros en<br/>
                                        Colombia, combinando diferentes medios de<br/>
                                        pago: </span>
                                        <strong>efectivo, cheque y abono en cuenta.</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg bg_soft_grey container_paso border_cards">
                            <div className="container_content_paso">
                                <p className='museoSans700 h3 mb-4'>
                                    O en nuestros<br />
                                    Corresponsales:
                                </p>


                                <img className='img-fluid' src={logo} alt="Logos de corresponsales" />
                            </div>
                        </div>
                </div>


                <div className="col-12 col-lg-6 bg_yellow">

                </div>               
            </div>
        </div>
    )
}

export default SectioReclamarEnColombia;