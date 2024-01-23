import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css'


const CarouselPage = () => {
    return (
        <Carousel>
            <div>
                <img src="/funko-imgs/sparklyBatman.png" alt="Sparkly Batman Funko" />
                <p className="legend">Exclusive POP! Figures</p>
            </div>
            <div>
                <img src="/funko-imgs/zoro.png" />
                <p className="legend" alt="Zoro Funko">Anime POP! Figures</p>
            </div>
            <div>
                <img src="/funko-imgs/kaido.png" />
                <p className="legend" alt="Kaido Funko">Super POP! Figures</p>
            </div>
        </Carousel>
    );
};

export default CarouselPage;
