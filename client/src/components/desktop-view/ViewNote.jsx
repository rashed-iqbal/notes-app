import React from 'react'
import '../../css/viewnote.css'
import goBackIcon from '../../img/left-arrow.svg'
import editNoteIcon from '../../img/writing.svg'
import deleteNoteIcon from '../../img/trash.svg'

function ViewNote() {
    return (
        <div className='view_note_area'>
            <div className="view_note">
                <div className="view_note_top_area flex justify-between">
                    <div className="go_back flex item-center cursor-pointer">
                        <img src={goBackIcon} width={20} alt="" />
                        <p className='go_back_btn'>Go Back</p>
                    </div>
                    <div className="note_options flex item-center">
                        <img className='cursor-pointer edit_note' src={editNoteIcon} width={24} alt="" />
                        <img className='cursor-pointer delete_note' src={deleteNoteIcon} width={24} alt="" />
                        <button className='cursor-pointer save_note' disabled>Save</button>
                    </div>
                </div>
                <div className='line '></div>
                <div className="view_area flex flex-col" >

                    <textarea rows={1} className='edit_note_title' readOnly></textarea>
                    <textarea rows={2}
                    className='edit_note_desc' readOnly>Hello World</textarea>

                </div>
                
            </div>
        </div>
    )
}

export default ViewNote
