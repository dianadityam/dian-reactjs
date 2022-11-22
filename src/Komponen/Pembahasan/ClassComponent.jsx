import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 0
        }

        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
    }

    plus() {
        this.setState({value: this.state.value + 1});
    }

    minus() {
        if(this.state.value > 0) {
            this.setState({value: this.state.value - 1});
        }
    }

    render() {

        return (
            <div>
                <h2>My Name is {this.props.name}</h2>
                <h1>Learn Basic ReactJS Component</h1>
                <h2>This heading created with class component</h2>
                <h3>Create calculator with state</h3>
                <button onClick={this.minus}> - </button>
                <span> { this.state.value } </span>
                <button onClick={this.plus}> + </button>
            </div>
        )

    }
}

export default ClassComponent;