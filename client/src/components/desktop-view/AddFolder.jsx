import React from 'react'
import '../../css/addfolder.css'

function AddFolder({handleCancel}) {
    return (
        <>
        
        <div className='add_folder_area flex justify-center item-center' >
                <div className='cancel_area' onClick={handleCancel} >
                
                </div>
                <div className="create_folder">
                    <div className="add_folder">

                    <h2>Hello World</h2>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddFolder
