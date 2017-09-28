import './_notes-list.scss';

import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: this.props.app.state.notes,
    };
  }

  render() {
    return (
      <div className="note-list">
        {this.state.notesList.length ?
          <ul>
            {this.state.notesList
              .map(item => <li key={item.id}>Note: {item.content}</li>)}
          </ul> :
          <h2>There are no notes</h2>
        }
      </div>
    );
  }
}

export default NoteList;
