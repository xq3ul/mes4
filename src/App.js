import React from 'react';

class NameForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)


    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('отправлено имя:' + this.state.value)
        event.preventDefault()
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                     type='email'
                     value={this.handleSubmit()}
                    />
                </label>
            </form>
        )
    }
}