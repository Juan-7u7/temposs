import React from "react";
import "../styles/mensajes.css"; // Archivo CSS para los estilos personalizados

function Mensajes() {
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
    {
      id: 4,
      nombre: "Roberto C. Alvarado",
      avatar: "https://media.juanfutbol.com/wp-content/uploads/2024/11/Imago-1570380-1-e1731442448832.jpg",
      ultimaActividad: "Tu: Conoces a pinpon? - 1 sem",
    },
    {
      id: 5,
      nombre: "Javier Hernandez",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TR1SMkJclo-ybcQ-44hhMedBD5CDLSp1cg&s",
      ultimaActividad: "Tú: Quedo al pendiente... - 2 sem",
    },
    {
      id: 6,
      nombre: "Fernando Beltran",
      avatar: "https://www.nacionfutbol.com.mx/image/nacionfutbolcommx/el-volante-de-chivas-ha-demostrado-ser-el-mejor-del-equipo-esta-temporada-1704855638-hq.webp",
      ultimaActividad: "Última actividad hace 21 min",
    },
  ];

  const mensajes = [
    { id: 1, tipo: "enviado", texto: "Hola, me gustaria saber mas informacion de la vacante.", hora: "08:40 p.m." },
    { id: 2, tipo: "recibido", texto: "Claro, me gustaria agendar una entrevista contigo el lunes a las 10am, que te parece?", hora: "08:41 p.m." },
    { id: 3, tipo: "enviado", texto: "Me parece muy bien!", hora: "08:42 p.m." },
    { id: 4, tipo: "recibido", texto: "¡Excelente! 😊", hora: "08:43 p.m." },
  ];

  const contactoActual = contactos[0]; // Selecciona el primer contacto como ejemplo

  return (
    <div className="mensajes-container">
      {/* Barra lateral izquierda */}
      <div className="sidebar">
        <h2 className="sidebar-title">Mensajes</h2>
        <ul className="contact-list">
          {contactos.map((contacto) => (
            <li className="contact-item" key={contacto.id}>
              <img src={contacto.avatar} alt={contacto.nombre} className="contact-avatar" />
              <div>
                <span className="contact-name">{contacto.nombre}</span>
                <p className="contact-last-message">{contacto.ultimaActividad}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Sección principal del chat */}
      <div className="chat">
        <div className="chat-header">
          <img src={contactoActual.avatar} alt={contactoActual.nombre} className="chat-avatar" />
          <div>
            <h2 className="chat-contact-name">{contactoActual.nombre}</h2>
            <p className="chat-last-active">{contactoActual.ultimaActividad}</p>
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
                <img src={contactoActual.avatar} alt="Avatar" className="message-avatar" />
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
    </div>
  );
}

export default Mensajes;
