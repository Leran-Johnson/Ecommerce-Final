import React, { useState } from 'react';
import "./Contact.css";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [review, setReview] = useState('');
    const [newsletter, setNewsletter] = useState(false);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateForm = (event) => {
        event.preventDefault();

        // Reset error messages
        setNameError('');
        setEmailError('');

        // Perform validation
        let isValid = true;

        if (name.trim() === '') {
            setNameError('Please enter your name');
            isValid = false;
        }

        if (email.trim() === '') {
            setEmailError('Please enter your email');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email');
            isValid = false;
        }

        if (isValid) {
            setName('');
            setEmail('');
            setReview('');
            setNewsletter(false);
        }
    };

    return (
        <div>
            <div className="container">
                <h1>Let us know how we did!</h1>
                <form id="feedback_form" onSubmit={validateForm}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <span id="name-error" className="error">{nameError}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span id="email-error" className="error">{emailError}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="review">Review</label>
                        <textarea
                            id="review"
                            name="review"
                            rows="4"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="newsletter">
                            Subscribe to our Newsletter for updates and deals!
                        </label>
                        <input
                            type="checkbox"
                            id="newsletter"
                            name="newsletter"
                            checked={newsletter}
                            onChange={(e) => setNewsletter(e.target.checked)}
                        />
                    </div>
                    <input type="submit" id="submit-btn" value="Submit" />
                </form>
            </div>
        </div>
    );
}
