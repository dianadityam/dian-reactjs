import React from "react";

class ClassComponent extends React.Component {

    render() {

        return (
            <div>
                <h2>My Name is {this.props.name}</h2>
                <h1>Learn Basic ReactJS Component</h1>
                <h2>This heading created with class component</h2>
            </div>
        )

    }
}

export default ClassComponent;