import React from "react";
import "../Styles/Texts.css";
import Navbar from "../Header/Navbar.jsx";

const Texts = () => {
  return (
    <>
      <div className="fade-in">
        <Navbar />
        <div className="container-texts">
          <div className="sub-texts">
            <div className="sub-image">
              <div className="image"></div>
            </div>
            <div className="title-texts">Premier éveil, dernier éveil</div>
            <p className="active title-link date-text">8 AOÛT 2023</p>
            <p className="desc-texts">
              À l’heure où je t’ai écrit, j’ai été angoissée.
              <br />
              De toutes mes peines, aucune rencontre ne m’a autant imprégnée. Je
              continue à avancer malgré la lourdeur de mes larmes qui m’ont
              élancé sous les tiennes, j’apprends qu’il n’est pas facile parfois
              d’exprimer ce que l’on ressent, encore une fois je n’ai voulu que
              t’aider en t’offrant toute ma douceur. T’aider à combler des
              vraies brides qui te sont toi, car la vraie version de toi est
              celle dont tu ne sentiras qu’à travers tes mots : une épreuve qui
              te fait froid au dos. Lorsqu’on a du mal à dire ce que les
              sentiments nous portent, on remet en question tout ce que l’on a
              traversé, les âmes pures aident autrui à se comporter : le
              meilleur d'eux-mêmes. Toi, t’es comme un précieux cadeau que l’on
              veut tant apaiser. T’avouer que mon âme a besoin de la tienne, ce
              manque ne cesse que de grandir. Ton départ m’a laissé une grande
              leçon de vie, car oui tu m’as rendue encore plus forte, toutes les
              choses que tu as sues me dire et même apprises, m’ont protégée par
              ceux qui ont été à mon chemin. En fin de compte, tu as été là sans
              forcément que je ne ressente ta présence, même absent tes mots
              résonnent comme le bruissement de l’eau. Je songe à l’idée
              d’entendre l’écume de ta voix, de tes gestes, puis de ton bien. Je
              me dis souvent que je ne peux plus retrouver cette ardeur en ce
              monde, même si ces jours qui défilent m’ont été les plus éperdus.
              Nos belles banalités autrefois se disent qu’elles existent quelque
              part, dans un endroit où elles peuvent vivre de choses
              merveilleuses, qu’elles ne connaissent pas ce que nos cœurs
              éprouvent dans la lueur de nos jours…
            </p>
            {/* <div className="line"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Texts;
