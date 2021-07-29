import React from 'react';
import '../../css/toparea.css'

import createNoteIcon from '../../img/plus.svg'
import searchIcon from '../../img/search.svg'
import filterIcon from '../../img/filter.svg'

function TopArea({handleCN}) {

    return (

        <div className='top_area'>
            <div className="full_top_area">

                <div className="upper_area flex justify-between" onClick={()=>handleCN(true)}>
                    <h2>My Notes</h2>

                    <div className='create_new_btn flex justify-center  item-center'>
                        <img width={14} src={createNoteIcon} alt="" />
                        <p>Create a Note</p>
                    </div>

                </div>

                <div className="search_bar flex justify-between item-center">
                    <div className="search flex">
                        <img width={14} src={searchIcon} alt="" />
                        <input type="text" name="" id="" placeholder='Search here...' />
                    </div>
                    <div className="filter">
                        <img width={14} src={filterIcon} alt="" />
                    </div>
                </div>
                <div className='line'></div>

            </div>
        </div>

    )
}

export default TopArea
