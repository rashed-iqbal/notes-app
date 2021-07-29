import React,{useState} from 'react'
import '../../css/createnote.css'

function CreateNote({handleCancel,createNote}) {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const handleSubmit = ()=>{

        if(!title || !desc){
            return console.log("Test Passed")
        }
        createNote(title,desc)
        handleCancel()
    }

    return (
        <>
        
        <div className='create_note_area flex justify-center item-center' >
                <div className='cancel_note' onClick={handleCancel} >
                
                </div>
                <div className="create_area">
                    <div className="write_note">

                            <p>Title</p>

                            <input type="text" placeholder='Your title here...' onChange={(e)=>setTitle(e.target.value)}  value={title} className='note_title'/>



                            <p htmlFor="">Description</p>

                            <textarea className='note_desc' onChange={(e)=>setDesc(e.target.value)} value={desc} placeholder='Your description here...'></textarea>

                            <br />
                            <div className="btn_area">
                                <button className='note_btn' onClick={handleCancel}>Cancel</button>
                                <button className='note_btn save_btn' onClick={handleSubmit}>Save</button>
                            </div>
                            

                            

                    </div>
                </div>

            </div>
        </>
    )
}

export default CreateNote
