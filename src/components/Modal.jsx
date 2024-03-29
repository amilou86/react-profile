import Card from "./Card";
import { useModalContext } from "../context/modal-context";
import './modal.css';

const Modal = ({ className, children }) => {
    const { showModal, closeModalHandler } = useModalContext();

    if (showModal) {
        return (
            <div id="overlays">
                <section id="backdrop" onClick={closeModalHandler}></section>
                <Card className={`card card-modal ${className}`}>{children}</Card>
            </div>
        )
    }

    else {
        return <></>
    }

}

export default Modal;
