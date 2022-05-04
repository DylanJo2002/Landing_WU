import React, { Component } from "react";
import './SectionGirosDirecto.css'
import Carousel from 'react-elastic-carousel'
import Card1 from './cards/Card1';
import Card2 from './cards/Card2';
import Card3 from './cards/Card3';
import Card4 from './cards/Card4';

class SectionGirosDirecto extends  Component {
    render(){
        return (
            <div className='bg_black'>
                <div className="row mb-5">
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
                {/* enableAutoPlay={true} autoPlaySpeed={5000} */}
                <Carousel itemsToShow={1}  
                      ref={ref => (this.carousel = ref)} onNextStart={(currentItem, nextItem) =>{
                          console.log(currentItem.index, currentItem)
                        if(currentItem.index == 3){
                            console.log("Ultimo item pasado");
                            console.log(this.carousel.goTo(1));
                        }
                      }
                      }>
    
                    <Card1></Card1>
                    <Card2></Card2>
                    <Card3></Card3>
                    <Card4></Card4>
    
                </Carousel>
            </div>
        )
    }
}

export default SectionGirosDirecto;