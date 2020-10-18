import React, { Component } from "react";

class Addtext extends Component {
    state = {
        input: '',
        output: []
    };

    _handleChange = (newInput) => {
        this.setState({
            input: newInput,
        });
    }

    _addText = () => {
        const { input, output } = this.state;
        const newOutput = [...output, input];
        this.setState({
            input: '',
            output: newOutput
        });
    }
        
    _deleteText = () => {
        const { output } = this.state;
        let newOutput = [...output];
        newOutput.pop()
        this.setState({
            output: newOutput
        });
    }


    render() {
        return (
            <div>
                <h1>
                    Add and delete words we hope
                </h1>
                <input
                    type="text"
                    value={this.state.input}
                    onChange={(event) =>
                        this._handleChange(event.target.value)}
                />
                <p>
                <button type="button" onClick={this._addText}>Add word</button>
                </p>
                <p>
                    {this.state.output.join(" ")}
                </p>
                <p>
                <button type="button" onClick={this._deleteText}>Delete word</button>
                </p>
            </div>
        );
    }
}

export default Addtext;