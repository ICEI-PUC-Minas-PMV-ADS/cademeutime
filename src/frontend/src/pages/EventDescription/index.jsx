import { Link } from "react-router-dom";
import arrowLeft from "../../assets/arrow-left.svg";
import mapPin from "../../assets/map-pin.svg";
import schedule from "../../assets/schedule.svg";
import user from "../../assets/user.svg";
import message from "../../assets/message-circle.svg";
import home from "../../assets/HomeIconButton.svg";
import coracao from "../../assets/CoracaoIconButton.svg";
import pesquisa from "../../assets/PesquisarIconButton.svg";
import "./stylesPage.css";


export function EventDescription() {

  return (
    <div className="containerDescription">
      <div className="geralDesktop">
        <div className="escopo">

          <header className="header">
            <button className="return"><img src={arrowLeft} alt="" /></button>
            <span id="titulo"> Esporte </span>
          </header>

          <form>
            <div className="inputContainer">
              <text class="options"><img src={mapPin} alt="" />Endereço</text>
            </div>

            <div className="linha"></div>

            <div className="inputContainer">
              <text class="options"><img src={schedule} alt="" />00:00</text>
            </div>

            <div className="linha"></div>

            <div className="inputContainer">
              <div className="participante">
                <img src={user} alt="" />
                <select class="optionsP">
                  <option value="select" disabled selected>Participantes</option>
                </select>
                </div>
            </div>
            
            <div className="linha"></div>

            <div className="inputContainer" id="inputContainerComentario">
              <label htmlFor="date"><img src={message} alt="" />Comentários</label>
              <textarea
                type="text"
                class="comentario"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <button className="button">Participar</button>
            

              <div className="recusa">
                <Link to="">Não vou participar</Link>
              </div>
          </form>
          <div className="footer">
            <div><button><img src={home} alt="" /></button></div>
            <div><button><img src={coracao} alt="" /></button></div>
            <div><button><img src={pesquisa} alt="" /></button></div>
            <div><button><img src={user} alt="" /></button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
