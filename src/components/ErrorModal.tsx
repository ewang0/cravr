import React from 'react'
import './ErrorModal.css'

const ErrorModal: React.FC = () => {
    return(
        <div className="error-large-container">
            <aside className="questionnaire-info">
                <img className="bulb-icon fruit" src="fruit.jpg" alt="lightbulb-icon"></img>
                <div className="questionnaire-info-text">
                <h2>Recommendations</h2>
                <p>Your food recommendations will show up here. We’ve generated some random foods to get you started.</p>
                </div>
            </aside>
            <div className="error-modal-container">
                <h2>Oops!</h2>
                <p>Looks like nothing came back for your search. Try a new search with some different options.</p>
            </div>
        </div>
        
    )
}

export default ErrorModal;