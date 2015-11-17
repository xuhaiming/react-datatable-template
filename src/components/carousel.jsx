var React = require('react');
var ReactDOM = require('react-dom');

var {Carousel,CarouselItem} = require('react-bootstrap');

var init=[
    {id:1,src:'assets/carousel.jpg'},
    {id:2,src:'assets/carousel.jpg'},
    {id:3,src:'assets/carousel.jpg'}
]

class CarouselInstance extends React.Component{
    constructor(){
        super();
        this.state={
            init:init
        }
    }
    render(){
        return(
            <Carousel　interval={3000}>
                <CarouselItem>
                    <img width={900} height={250} alt="900x500" src=""/>
                    <div className="carousel-caption">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <img width={900} height={250} alt="900x500" src=""/>
                    <div className="carousel-caption">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <img width={900} height={250} alt="900x500" src=""/>
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