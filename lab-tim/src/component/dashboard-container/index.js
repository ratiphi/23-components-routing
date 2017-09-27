import './_dashboard-container.scss';

import React from 'react';
import uuid from 'uuid/v4';
import NoteCreateForm from '../notes-form';
import NoteList from '../notes-list';


class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
  }

  componentDidUpdate() {
    console.log('__APP_STATE_FROM_DASHBOARD__', this.props.app.state);
  }

  noteCreate(note) {
    note.id = uuid();
    note.editing = false;
    note.completed = false;
    this.props.app.setState(prevState => ({
      notes: [...prevState.notes, note],
    }));
  }

  render() {
    return (
      <div className="dashboard-container">
        <h2>Your list of notes:</h2>
        <NoteCreateForm handleNoteCreate={this.noteCreate}/>
        <NoteList notes={this.props.app.state.notes}/>
      </div>
    );
  }
}

export default DashboardContainer;
