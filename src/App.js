// create your App component here
import React, { Component } from 'react';

export default class App extends Component{

    state={
        message: "",
        number: 0,
        people: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(astroObj => {
            this.setState(astroObj)
        })
    }

    render(){
        return (
            <div>
                { this.state.people.map(person => <div key={person.name}>Astro: {person.name} || Station: {person.craft} </div> ) }
            </div>
        )
    }
}