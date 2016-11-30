import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEntry } from '../../actions';
class _AddEntry extends Component {


    constructor(){
        super();
        this.state = { title: '', description: '' }
    }

    render(){
        return (
        <div>
            <p>Enter a title</p>
            <input type="text" id="titleInput" value={this.state.title} onChange={(ev) => {
                var state = Object.assign({},this.state);
                state.title = ev.target.value;
                this.setState(state);
            }} />
            <p>Enter a description</p>
            <input type="text" id="descriptionInput" value={this.state.description} onChange={(ev) => {
                var state = Object.assign({},this.state);
                state.description = ev.target.value;
                this.setState(state);
            }} />
            <br />
            <button id="submitEntryButton" onClick={this.props.handleSubmitButtonClicked.bind(this, this.state)}>Submit Entry</button>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmitButtonClicked: (model) => {
            dispatch(addEntry(model));
        }        
    };
}

export const AddEntry =  connect(mapStateToProps, mapDispatchToProps)(_AddEntry)