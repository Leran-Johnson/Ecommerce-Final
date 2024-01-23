import React from "react";
import Carousel from "./components/carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';

export default function Home() {
    return (
        <div>
            <div className="hero">
                <img src="/icons/fullLogo.jpg" alt=" Logo Image" />
                <div className="hero-content">
                    <a href="#" className="btn">Shop Now!</a>
                </div>
            </div>
            <div className="carousel-container">
                <Carousel />
            </div>
        </div>
    );
}

