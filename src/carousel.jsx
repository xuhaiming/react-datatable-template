var React = require('react');
var ReactDOM = require('react-dom');

var {Carousel,CarouselItem} = require('react-bootstrap');

class CarouselInstance extends React.Component{
    render(){
        return(
            <Carousel>
                <CarouselItem>
                    <img width={900} height={250} alt="900x500" src="assets/carousel.jpg"/>
                    <div className="carousel-caption">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <img width={900} height={250} alt="900x500" src="assets/carousel.jpg"/>
                    <div className="carousel-caption">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <img width={900} height={250} alt="900x500" src="assets/carousel.jpg"/>
                    <div className="carousel-caption">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </CarouselItem>
            </Carousel>
        )
    }
}

module.exports=CarouselInstance;