import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            globalTitle: "enter your title"
        };
    }
    componentDidMount() {
        console.log("Formulaire rendu")

    }
    handleTitleChange = event => {
        this.setState({ title: event.target.value });
    };

    handleGlobalTitle = () => {
        this.setState({ globalTitle: "Mon formulaire - " + this.state.title })
    }

    componentDidUpdate() {
        console.log("Titre changé")
    }
    render() {
        return (
            <div>
                <h1>{this.state.globalTitle}</h1>
                <form>
                    <label htmlFor="title">Title :</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Type and click..."
                        onChange={this.handleTitleChange} />
                </form>
                <input type="button" value="validation" onClick={this.handleGlobalTitle} />

            </div>
        );
    }
}

export default Form;
