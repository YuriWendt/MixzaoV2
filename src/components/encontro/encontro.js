import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './encontro-styles.scss';
import HorizontalTimeline from "react-horizontal-timeline";
import { Image } from "react-bootstrap";


export default function Encontro() {
    const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);

    // Values should be only date
    const VALUES = [
        "2016-04-01", "2016-11-15", "2017-03-22", "2018-06-10", 
        "2018-07-15", "2019-03-20", "2019-05-25", "2019-10-15",
    ];

    // Description array corresponding to values
    const description = [
        "Mixzao se inicia em um servidor alugado de CSGO",
        "Primeiro Encontro pessoalmente para jogar na Max5",
        "Segundo Encontro para ida do parque aquático",
        "Primeiro encontro em São João interior de SP",
        "Segundo Encontro em São João",
        "Campeonato da Blast",
        "Lan House",
        "Casamento Bruno"
    ];

    const images = [
        "https://i.ibb.co/PY2jvSW/encontrocs.jpg",
        "https://i.ibb.co/CMWkqSH/mx5-2.jpg",
        "https://i.ibb.co/XkwCWw0/magic.jpg",
        "https://i.ibb.co/hsdc1Xx/IMG-20180611-WA0002.jpg",
        "https://i.ibb.co/QrP1hCB/encontrosjfut.jpg",
        "https://i.ibb.co/8K3VcJ1/blast3.jpg",
        "https://i.ibb.co/82GcXLY/lan1.jpg",
        "https://i.ibb.co/kxhDX2S/casamento2.jpg",
    ]

    return (
        <>
            <header className="container-fluid bg-home-header">
                <a className="navbar-brand">
                    <h1>Encontros</h1>
                </a>

            </header>

            <div className="root-div">
                <div style={{
                    width: "70%",
                    height: "100px",
                    margin: "50px auto"

                }}>
                    <HorizontalTimeline
                        styles={{ outline: "#3d9dea", foreground: "#0f1620" }}
                        index={value}
                        indexClick={(value) => {
                            setValue(value);
                            setPrevious(previous);
                        }}
                        values={VALUES}
                    />
                </div>
                <div className="text-center">{description[value]}</div>
                    <Image 
                    style={{ 
                        border: "7px solid #fff",
                        width: "500px",
                        margin: "50px auto 50px 30% ",
                        }} 
                        src={images[value]} />
            </div>

        </>
    );
}
