import React, { useState } from "react";
import "../styles/mensajesm.css";

function Mensajes() {
  const [contactoSeleccionado, setContactoSeleccionado] = useState(null); // Estado para el contacto seleccionado
  const contactos = [
    {
      id: 1,
      nombre: "Veljko Paunovic",
      avatar: "https://img.a.transfermarkt.technology/portrait/big/28313-1489574924.JPG?lm=1",
      ultimaActividad: "Última actividad hace 2 min",
    },
    {
      id: 2,
      nombre: "Fernando Gago",
      avatar: "https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2024/11/03/record993.jpg?itok=3jtxMcWr",
      ultimaActividad: "Has enviado un archivo adjunto - 3 d",
    },
    {
      id: 3,
      nombre: "Matias Almeyda",
      avatar: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/3MGQDANAZJBFLCY2EMPWYLYUUU.jpg",
      ultimaActividad: "Última actividad hace 4 h",
    },
  ];

  const mensajes = [
    { id: 1, tipo: "enviado", texto: "Hola, me gustaría saber más información de la vacante.", hora: "08:40 p.m." },
    { id: 2, tipo: "recibido", texto: "Claro, me gustaría agendar una entrevista contigo el lunes a las 10am, ¿qué te parece?", hora: "08:41 p.m." },
    { id: 3, tipo: "enviado", texto: "Me parece muy bien!", hora: "08:42 p.m." },
  ];

  const handleContactoClick = (contacto) => {
    setContactoSeleccionado(contacto);
  };

  const regresarLista = () => {
    setContactoSeleccionado(null);
  };

  return (
    <div className="mensajes-container">
      {!contactoSeleccionado ? (
        <div className="sidebar">
          <h2 className="sidebar-title">Mensajes</h2>
          <ul className="contact-list">
            {contactos.map((contacto) => (
              <li
                key={contacto.id}
                className="contact-item"
                onClick={() => handleContactoClick(contacto)}
              >
                <img src={contacto.avatar} alt={contacto.nombre} className="contact-avatar" />
                <div>
                  <span className="contact-name">{contacto.nombre}</span>
                  <p className="contact-last-message">{contacto.ultimaActividad}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="chat">
          <div className="chat-header">
            <button className="back-button" onClick={regresarLista}>
              ←
            </button>
            <img
              src={contactoSeleccionado.avatar}
              alt={contactoSeleccionado.nombre}
              className="chat-avatar"
            />
            <div>
              <h2 className="chat-contact-name">{contactoSeleccionado.nombre}</h2>
              <p className="chat-last-active">{contactoSeleccionado.ultimaActividad}</p>
            </div>
          </div>

          <div className="chat-messages">
            {mensajes.map((mensaje) => (
              <div
                key={mensaje.id}
                className={`message-container ${
                  mensaje.tipo === "enviado" ? "message-sent" : "message-received"
                }`}
              >
                {mensaje.tipo === "recibido" && (
                  <img src={contactoSeleccionado.avatar} alt="Avatar" className="message-avatar" />
                )}
                <div className="message-content">
                  <p className="message-text">{mensaje.texto}</p>
                  <span className="message-time">{mensaje.hora}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input type="text" placeholder="Escribe un mensaje..." className="input-field" />
            <button className="send-button">Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mensajes;
