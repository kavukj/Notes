import React from 'react';
import Notes from "./notes";
import './home.styles.css';
import {addNotes, toggleHidden} from '../redux/notes.action';
import { connect } from 'react-redux';


const Home =({hidden,toggleHidden,notes,addToNotes}) =>{
    let title='';
    let description='';
    const handleTitle = e => {
        title=e.target.value;
    }
    const handleDesc = e => {
        description=e.target.value
    }
        return (
            <>
                <h1>
                    <span>Notes</span>
                    {hidden ? <span className="sign" onClick={toggleHidden}>Click to show</span> 
                    : <span className="sign" onClick={toggleHidden}>Click to hide</span>}
                </h1>
                <div className="PageContent">
                    {hidden ? null :
                        <div className="inputs">
                            <input type="text" className="title" required onChange={handleTitle}/>
                            <textarea className="desc" required onChange={handleDesc}/>
                            <button onClick={()=>addToNotes({title,description})}> Add Note</button>
                        </div>
                    }
                    {
                    notes.length ? 
                        <div>
                            {
                                notes.map((note,index)=>(
                                    <Notes key={index} note={note} />
                                ))
                            }
                        </div>
                        :
                        <div className="noData">
                            <h2>You havn't added any notes yet</h2>
                        </div>
                    }
                    
                </div>
            </>
        );
}

const mapDispatchToProps = (dispatch) => ({
    toggleHidden: () => dispatch(toggleHidden()),
    addToNotes : ({title,description}) => dispatch(addNotes({title,description}))
})

const mapStateToProps = state => ({
    hidden:state.notes.hidden,
    notes:state.notes.notes
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
