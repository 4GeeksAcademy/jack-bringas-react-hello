import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  const data = [
    {
      cardTitle: "Playa Paraíso",
      description: "Arenas blancas y aguas cristalinas te esperan en este rincón del mundo.",
      image: "https://picsum.photos/id/215/500/325"
    },
    {
      cardTitle: "Montañas Místicas",
      description: "Un lugar perfecto para todos los amantes del senderismo y la naturaleza.",
      image: "https://picsum.photos/id/229/500/325"
    },
    {
      cardTitle: "Ciudad Histórica",
      description: "Calles empedradas y edificios coloniales llenos de historias fascinantes.",
      image: "https://picsum.photos/id/276/500/325"
    },
    {
      cardTitle: "Selva Encantada",
      description: "Descubre tanto la flora como la fauna exótica en este maravilloso ecosistema.",
      image: "https://picsum.photos/id/666/500/325"
    }
  ];

  return (
    <div className="text-center">
      <Navbar />
      <Jumbotron />

      <div className="container mt-5">
        <div className="row g-4 justify-content-center">
          {data.map((info, index) => {
            return (
              <div
                className={`col-12 col-sm-6 col-md-4 col-lg-3 mb-4`} 
                key={index}
              >
                <Card
                  cardTitle={info.cardTitle}
                  description={info.description}
                  image={info.image}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
