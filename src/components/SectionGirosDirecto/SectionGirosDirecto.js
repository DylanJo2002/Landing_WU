import './SectionGirosDirecto.css'

function SectionGirosDirecto() {
    return (
        <div className='bg_black'>
            <div className="row">
                <div className="col-12 col-lg-6 d-flex flex-column align-items-center pt-5">
                    <div className='text-start'>
                        <p className='museoSans h2'>
                            <span className='white'>Giros directo a una</span><br/>
                            <span className='yellow'>Cuenta Bancaria en<br/>
                            Colombia</span>
                        </p>
                        
                        <p className='openSans white font_size_enviaron'>¿Te enviaron un <strong>Giro Western Union </strong>
                            desde el exterior y<br/>
                            ahora quieres <strong>recibirlo directo a tu cuenta</strong>?</p>
                        <p className="museoSans700 yellow font_size_explicamos">¡Aquí te explicamos cómo hacerlo!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionGirosDirecto;