import React, { useContext , useState} from 'react';
import '../../css/main.css'

import { GetData } from '../../utils/Principal';

//? Component 
import Sidebar from '../../components/desktop-view/Sidebar';
import TopArea from '../../components/desktop-view/TopArea';
import CreateNote from '../../components/desktop-view/CreateNote';
import AddFolder from '../../components/desktop-view/AddFolder';
import ViewNote from '../../components/desktop-view/ViewNote';
import NotesArea from '../../components/desktop-view/NotesArea';

function Main() {
    const { user,notes,createNote,deleteNote,updateNote } = useContext(GetData);

    const [showCN, setShowCN] = useState(false);
    const [showAF, setShowAF] = useState(false);

    const cancelCN = () => {
        setShowCN(false)
    }
    const cancelAF = () => {
        setShowAF(false)
    }

    return (
        <div className='main_area'>
            <Sidebar handleAF={setShowAF} />
            
            <TopArea handleCN={setShowCN} />
            <NotesArea/>
            
            {showCN && <CreateNote handleCancel={cancelCN} createNote={createNote}></CreateNote>}
            {showAF && <AddFolder handleCancel={cancelAF}></AddFolder>}

            
        </div>
    )
}

export default Main
