import React from 'react';
import './Pagination.css'


const Pagination = ({totalPages,handlePage})=>{
        const buttonsArr = new Array(totalPages).fill(totalPages).map((_,index)=>index + 1);
        console.log(buttonsArr,'buttonsArr');
        return (
            <div id='tpage'>
                {
                    buttonsArr.map(num => {
                        return <button id = 'page' onClick={()=>handlePage(num)}>{num}</button>
                    })
                }
            </div>
        )
    }
export default Pagination