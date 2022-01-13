import React from 'react'
import './ErrorModal.css'

const ErrorModal: React.FC = () => {
    return(
        <div className="error-modal-container">
            <h2>Oops!</h2>
            <p>Looks like nothing came back for your search. Try a new search with some different options.</p>
        </div>
    )
}

export default ErrorModal;