"use client"

import { useState, useEffect } from "react";
import "./page.css";
import { FaFutbol } from "react-icons/fa";
import Link from "next/link";
import { evento } from "../endpoints/evento.endpoint";

// Mock de dados para testes

export default function ViewEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulando uma chamada de API
    setTimeout( async () => {      
      setEvents(await evento.listar());
    }, 500);
  }, [events]);

return (
  <div className="events-container">
    
    <header className="header">
      <span id="titulo"> Eventos perto de você!</span>
    </header>
    <main className="main"> {/* Adicione a classe aqui */}
      {events.length > 0 ? (
        events.map((event: any) => (
          <div key={event.id} className="eventContainer">
            <strong>{event.nome}</strong>
            <span>{event.esporte}</span>
            <span>{event.local}</span>
            <span>{`${event.data}`}</span>
            <Link href={`/events/${event.id}`}>Ver mais <FaFutbol /> </Link>
          </div>
        ))
      ) : (
        <div className="noEventsMessage">
          <span>Não há eventos cadastrados no momento.</span>
        </div>
      )}
    </main>
    <footer className="footer">
    <p>© 2023 Todos os direitos reservados</p>
    </footer>
  </div>
);

}
