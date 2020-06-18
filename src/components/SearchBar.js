import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component {
    state = {
        search_term : "",
    }

    handleChange = (e) => {
        this.setState({ search_term : e.target.value });
    }

    handlesubmit = (e) => {
        e.preventDefault()
        
        const {search_term} = this.state
        const {onFormSubmit} = this.props

        onFormSubmit(search_term)

    }

    render() {
        return (
            <Paper elevation={6} style={{padding : '25px'}}>
                <form onSubmit={this.handlesubmit}>
                    <TextField fullWidth  label="Search..." onChange={this.handleChange} />
                </form>
            </Paper>);
    }
}

export default SearchBar;