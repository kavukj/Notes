import {removeNote} from '../redux/notes.action';
import { connect } from 'react-redux';

function Notes({note,removeNote}) {
    const title={
        fontSize: '1.4vw',
        color: "#4a54f1",
        borderBottom:'1px solid black'
    }
    const description={
        fontSize: '1vw'
    }
    const remove = {
        fontSize:'2.6vh',
        width:'4vh',
        float:'right',
        cursor:'pointer'
    }
    return (
        <div className="Notes">
            <div className="NoteCard">
            <div style={remove} onClick={()=>removeNote(note)}>X</div>
              <h2 style={title}>{note.title}</h2>
              <p style={description}>{note.description}</p>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    removeNote: note => dispatch(removeNote(note))
})

export default connect(null,mapDispatchToProps)(Notes);
