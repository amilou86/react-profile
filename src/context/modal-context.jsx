import { createContext, useContext, useState } from 'react'

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        console.log('showModalHandler called!'); // This is the added log

        setShowModal(true);
        console.log('showModal state:', showModal);
    }
    const closeModalHandler = () => {
        setShowModal(false);
    }

    return (
        <ModalContext.Provider value={{ showModal, showModalHandler, closeModalHandler }}>{children}</ModalContext.Provider>
    )
}





// custom hook to consume the modal context anywhere in app
export const useModalContext = () => {
    return useContext(ModalContext);
}