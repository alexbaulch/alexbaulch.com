import React from 'react';

export default class HeroTextView extends React.Component {
    render() {
        return (
            <div className="info">
                <h1>Alex Baulch - Front end developer</h1>
                <h2><a href="mailto:alex@alexbaulch.com?subject=Website enquiry" id="contact-link">Email me</a></h2>
            </div>
        );
    };
}