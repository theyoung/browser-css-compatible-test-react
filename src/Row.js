import React from 'react';
import "./Row.css";

export default class Row extends React.Component {
    state = {
        name: "",
        value: "",
        flag : false
    }

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <ul className="Row">
                <li className="name">{this.state.name}</li>
                <li className="value">{this.state.value}</li>
                <li className="value">{this.state.flag? "true" : "false"}</li>
            </ul>
        );
    }

    componentDidMount(){
        this.setState({name: this.props.rowname, value: this.props.value, flag: this.props.flag});
    }
}