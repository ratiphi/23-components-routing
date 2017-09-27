import './_notes-list.scss';

import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: this.props.notes.map(item => <li key={item.id}>Note: {item.content}</li>),
    };
  }

  render() {
    return (
      <div className="note-list">
        {this.state.noteList ?
          <ul>
            {this.state.noteList}
          </ul> :
          <h2>There are no notes</h2>
        }
      </div>
    );
  }
}

export default NoteList;
