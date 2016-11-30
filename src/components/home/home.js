import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopEntries } from '../../actions';
import { AddEntry } from '../';
class _Home extends Component {

    componentDidMount() {
        this.props.getTopEntries();
    }

    render() {
        return (
            <div>
                <p>Home Page</p>
                <div className="user-info">
                </div>
                <div className="entries">
                    {
                        this.props.entriesLoading ? <p>Loading</p> : (this.props.topEntries ? this.props.topEntries.map((item, idx) => (<p key={idx}>{item.title}</p>)) : null)
                    }
                </div>
                    {
                        this.props.entriesLoading ? <p></p> : <AddEntry></AddEntry>
                    }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topEntries: state.entries.topEntries,
        entriesLoading: state.entries.loading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTopEntries: () => {
            dispatch(getTopEntries())
        }
    }
}

var Home = connect(mapStateToProps, mapDispatchToProps)(_Home);

export { Home };