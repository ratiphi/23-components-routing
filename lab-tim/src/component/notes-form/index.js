import './_notes-form.scss';

import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      // price: someVal,
      // title: someOtherVal
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleNoteCreate(this.state);
  }

  render() {
    return (
      <form
        className="note-form"
        onSubmit={this.handleSubmit}>

        <input
          type="text"
          name="content"
          placeholder="Enter note here"
          value={this.state.content}
          onChange={this.handleChange}/>

        <button type="submit">Add note</button>
      </form>
    );
  }
}

export default NoteCreateForm;
