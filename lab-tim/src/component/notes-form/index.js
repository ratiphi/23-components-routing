import './_notes-form.scss';

import React from 'react';
import uuid from 'uuid/v4';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      content: '',
      editing: false,
      completed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.app.setState(prevState => ({
      notes: [...prevState.notes, this.state],
    }));
  }
  // 
  // noteCreate(note) {
  //   note.id = uuid();
  //   note.editing = false;
  //   note.completed = false;
  //   this.props.app.setState(prevState => ({
  //     notes: [...prevState.notes, note],
  //   }));
  // }

  render() {
    return (
      <form
        className="note-form"
        onSubmit={this.handleSubmit}>

        <input
          type="text"
          name="content"
          placeholder=" ... "
          value={this.state.content}
          onChange={this.handleChange}/>

        <button type="submit">add note</button>
      </form>
    );
  }
}

export default NoteCreateForm;
