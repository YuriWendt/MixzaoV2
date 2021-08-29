import React, { useState } from "react";
import { Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './memberCard-styles.scss';

function checkInput() {
  // get today's date.
  var today = new Date();
  today.setHours(0,0,0,0); // set time to start of day for comparison.

  console.log(today);

}

export const MemberCard = (props) => {

    const [isActive, setActive] = useState("false")

    const handleClick = () => {
       setActive(!isActive);
    }

    return (
        <>
            <div className={isActive ? "tabelaMembros" : "tabelaMembrosClick"} onClick={handleClick}>
                <div className="front">
                    <div className="info-text" onClick={checkInput}>
                        <h3>Nickname: </h3>
                        <h2>{props.nickname}</h2>
                    </div>
                    <div className="info-text">
                        <h3>Favorite Game: </h3>
                        <Image className="logos" src={props.game.game_image} rounded />
                    </div>
                    <Image className="profile" src={props.image} />
                    <h3>{props.name}</h3>
                </div>

                <div className="back">
                    <div className="icon">
                        <p>Favorite Serie :</p>
                        <p>{props.serie} </p>
                    </div>
                    <div className="icon">
                        <p>Birthday :</p>
                        <p>{props.birthday} </p>
                    </div>
                    <div className="icon">
                        <p>Favorite Character :</p>
                        <p>{props.character.character_name} </p>
                    </div>
                    <Image className="character" src={props.character.character_image} />
                </div>
            </div>

        </>
    );

}