import "./Home.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

const hobbies = [
  "arte de tapa",
  "visuales en vivo",
  "foto y video",
  "edicion",
  "direccion",
  "color",
  "produccion",
  "animacion",
];

const Home = () => {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hobby-grid">
          {hobbies.map((hobby) => (
            <div className="hobby" key={hobby}>
              <video
                className="hobby-video"
                src="/home/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <h4>{hobby}</h4>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
