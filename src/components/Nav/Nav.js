import React, {Component} from 'react';

const DEFAULT  = "Pick a block";

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: DEFAULT,
            score: 0,
            topScore: 0
        };
    }

    correct() {
        const newScore = this.state.score + 1;
        this.setState({
           title: "You guessed correctly!",
           score: newScore,
           topScore: newScore > this.state.topScore ? newScore : this.state.topScore
        });
    }

    incorrect() {
        this.setState({
            title: "You guessed incorrectly!",
            score: 0
        })
    }

    reset() {
        this.setState({
            title: DEFAULT,
            score: 0
        })
    }

    render() {
        return (
            <div className="nav">
                <span>Minecraft Clicky Game</span>
                <span>{this.state.title}</span>
                <span>Score: {this.state.score} | Top Score: {this.state.topScore}</span>
            </div>
        );
    }
}