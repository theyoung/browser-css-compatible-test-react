import React from 'react';
import Row from './Row'
import './Container.css';

export default class Container extends React.Component {

    state = {
        rows : [],
    }

    constructor(props={}) {
        super(props);

    }

    render() {
        return (
            <div className="Container">
                {
                    this.state.rows.map((row,idx)=> <Row key={idx} rowname={row[0]} value={row[1]} flag={row[1]}></Row> )
                }
            </div>
        );
    }

    componentDidMount(){
        console.log("Mount");
        this.doUpdate();
    }

    doUpdate(){
        console.log("Update");

        let styles = document.defaultView.getComputedStyle(document.body,'');
        let rows = [];

        // for(let key of styles){
        for(let i = 0; i < styles.length; i++){
            let key = styles[i];
            let value = styles[key];
            let flag = CSS.supports(key, value);
            rows.push([key,value,flag]);
        };
        this.setState({rows});
    }
}