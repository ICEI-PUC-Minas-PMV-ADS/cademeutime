import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { FaFutbol } from "react-icons/fa";

// Mock de dados para testes
const mockEvents = [
  { id: 1, esporte: "Futebol", local: "Quadra A16", date: "2023-10-25", time: "20:00" },
  { id: 2, esporte: "Vôlei", local: "Quadra B16", date: "2023-10-26", time: "18:00" },
  { id: 3, esporte: "Basquete", local: "Quadra C16", date: "2023-10-27", time: "19:00" },
  { id: 4, esporte: "Tênis", local: "Quadra D16", date: "2023-10-28", time: "17:00" },
  { id: 5, esporte: "Handebol", local: "Quadra E16", date: "2023-10-29", time: "16:00" },
];

export function ViewEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulando uma chamada de API
    setTimeout(() => {
      // Substitua essa lógica pela sua chamada de API
      // e remova o setTimeout quando usar dados reais
      setEvents(mockEvents);
    }, 1000);
  }, []);

return (
  <div className="events-container">
    
    <header className="header">
      <span id="titulo"> Eventos perto de você!</span>
    </header>
    <main className="main"> {/* Adicione a classe aqui */}
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.id} className="eventContainer">
            <span>{event.esporte}</span>
            <span>{event.local}</span>
            <span>{`${event.date}, ${event.time}`}</span>
            <Link to={`/events/${event.id}`}>Ver mais <FaFutbol /> </Link>
          </div>
        ))
      ) : (
        <div className="noEventsMessage">
          <span>Não há eventos cadastrados no momento.</span>
        </div>
      )}
    </main>
    <footer className="footer" text="© 2023 Todos os direitos reservados">
    <p>© 2023 Todos os direitos reservados</p>
    </footer>
  </div>
);

}
