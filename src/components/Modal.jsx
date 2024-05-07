import { useState } from "react";
import "../components/modal.css";

export default function Modal(){

    const [modal, setModal] = useState(false);
    const [inputState, setInputState] = useState();

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div className="global">
            <button onClick={toggleModal} className="btn">Connexion</button>
        {modal && (
            <div className="filter">
            <div className="modal">
                <div className="modal-content">
                    <form>
                        <div className="group-input">
                            <input id="login" type="text" required />
                            <span></span>
                            <label htmlFor="login">Login :</label>
                        </div>
                            <div className="group-input">
                            <input id="password" type="password" required />
                            <span></span>
                            <label htmlFor="password">Password :</label>
                        </div>
                        <a href="#" className="mdp">Mot de passe oublié ?</a>
                        <input type="submit" value="Login" />
                        <div className="compte">Vous n&apos;ếtes pas menbre ? <a href="#">Créer un compte</a> </div>
                    </form>
                    <button onClick={toggleModal} className="btn-close">X</button>
            </div>
            </div>  
            </div>
        )}
            
            </div>
        )





}