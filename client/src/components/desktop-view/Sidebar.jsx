import React from 'react';
import '../../css/sidebar.css'

import addFolder from '../../img/add-file.svg'
import settings from '../../img/settings.svg'
import allNotes from '../../img/notes.svg'
import more from '../../img/more.svg'

function Sidebar({handleAF}) {

   return (

      <div className='sidebar flex flex-col item-center'>

         <div className="flex justify-center item-center profile_area">
            <div className="flex item-center">
               {/* {
                    user.name ? <> <img className='profile_logo' src={profile} width={34} height={34} alt="" />
                        <h3 className='profile_name'>Rashed Iqbal</h3>
                        <img width={16} src={arrow_down} alt="" /></> : <h3>Join Now</h3>
                } */}


            </div>
         </div>

         <div className='folder_area'>

            <div className="flex justify-between item-center active_folders">
               <div className='flex folder_text_logo'>
                  <img className='folder_logo' src={allNotes} width={16} height={16} alt="" />
                  <p className='folder_name'>All Notes</p>
               </div>

               <img className='folder_dots' width={20} src={more} alt="" />
            </div>

            {/* <div className="flex justify-bt item-center folders">
                <div className='flex folder_text_logo'>
                    <img className='folder_logo' src={profile} width={16} height={16} alt="" />
                    <p className='folder_name'>All Notes</p>
                </div>

                <img className='folder_dots' width={14} src={arrow_down} alt="" />
            </div>
            <div className="flex justify-bt item-center folders">
                <div className='flex folder_text_logo'>
                    <img className='folder_logo' src={profile} width={16} height={16} alt="" />
                    <p className='folder_name'>All Notes</p>
                </div>

                <img className='folder_dots' width={14} src={arrow_down} alt="" />
            </div> */}


         </div>


         <div className='footer_area'>
            <div className="cursor-pointer flex item-center active_folders" onClick={()=>handleAF(true)}>
               <div className='flex folder_text_logo'>
                  <img className='folder_logo' src={addFolder} width={16} height={16} alt="" />
                  <p className='folder_name'>Add New Folder</p>
               </div>

            </div>

            <div className="cursor-pointer flex item-center active_folders">
               <div className='flex folder_text_logo'>
                  <img className='folder_logo' src={settings} width={16} height={16} alt="" />
                  <p className='folder_name'>Settings</p>
               </div>

            </div>
         </div>
      </div>
   )
}

export default Sidebar
