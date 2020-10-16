import React, { Component } from "react";

class Addtext extends Component {
    state = {
        input: '',
        output: []
    };

    _handleSubmit = async (event) => {
        event.preventDefault();
        const { input } = this.state;
        const newOutput = [...this.state.output, input];
        this.setState({
            input: '',
            output: newOutput
        });
}
        
    _handleChange = (newInput) => {
        this.setState({
            input: newInput,
        });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Addtext;