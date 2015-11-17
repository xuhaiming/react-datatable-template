var React = require('react');
var ReactDOM = require('react-dom');

var {Carousel,CarouselItem} = require('react-bootstrap');

var imageList = [
    {id: 1, src: '#', label: 'first slide label', content: 'some content'},
    {id: 2, src: '#', label: 'second slide label', content: 'some content'},
    {id: 3, src: '#', label: 'third slide label', content: 'some content'}
];

class CarouselInstance extends React.Component {
    constructor() {
        super();
        this.state = {
            imageList: imageList
        }
    }

    render() {
        var CarouselList = this.state.imageList.map(img=> {
            return (
                <CarouselItem key={img.id}>
                    <img width={900} height={250} alt="900x500" src={img.src}/>
                    <div className="carousel-caption">
                        <h3>{img.label}</h3>
                        <p>{img.content}</p>
                    </div>
                </CarouselItem>
            )
        });

        return (
            <Carousel interval={3000}>
                {CarouselList}
            </Carousel>
        );
    }
}

module.exports = CarouselInstance;
