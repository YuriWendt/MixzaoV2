import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home-styles.scss';
import { Image, Carousel, Container, Col, Row } from 'react-bootstrap';
import reyna from './img/reyna.png';
import { mixSlider } from "./sliderData";
import MemberPage from "../memberPage/memberPage";
import Encontro from "../encontro/encontro";



const Home = () => {
   return (

      <div className="bg-home">
         <header className="container-fluid bg-home-header">
            <a className="navbar-brand">
               <h1>MIXZAONTC</h1>
            </a>

         </header>

         <Container>
            <Row>
               <Col sm={4} className="introducao-img">
                  <Image src={reyna} />
               </Col>
               <Col sm={8} className='introducao-conteudo'>

                  <h1>O Grupo</h1>
                  <h4>Mixzao é um grupo formado por jogadores que se conheceram no jogo onde romperam os limites da internet
                     e hoje somos uma família unida!
                  </h4>

                  <Carousel className="mixMember">
                     {mixSlider.map(mixSlider => (
                        <Carousel.Item key={mixSlider.id}>
                           <Image
                              className="mixImages"
                              src={mixSlider.image} />
                        </Carousel.Item>
                     ))}
                  </Carousel>

               </Col>
            </Row>
         </Container>

         <MemberPage />
         <Encontro />

      </div>








   );
}

export default Home;