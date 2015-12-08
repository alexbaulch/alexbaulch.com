import React from 'react';
import HeroLogo from '../hero-logo';
import HeroText from '../hero-text';

export default class HeroView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: 'yellow'};
    }

    render() {
        return (
            <div className="hero">
                <HeroLogo color={this.state.color} />
                <HeroText color={this.state.color} />
            </div>
        );
    };
}