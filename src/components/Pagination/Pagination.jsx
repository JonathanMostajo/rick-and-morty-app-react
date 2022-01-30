import { useState } from 'react';
import "./Pagination.scss"

export default function Pagination({getCharacters, getLocations, totalPages}) {
    const [actualPage, setActualPage] = useState(1);

    const pages = totalPages.pages;


    const changePage = (actualPage) => {
        setActualPage(actualPage)
        if (getCharacters) {
            getCharacters(actualPage)
        } else{
            getLocations(actualPage)
        }
        /* getCharacters(newPage);
        setActualPage(newPage) */
    }
    return (
    <div className='c-pagination'>
    {actualPage >1 ?<button className='c-pagination__button' onClick={()=> changePage(actualPage -1)}>{"<"}</button> : <button hidden></button>}
        <span className='c-pagination__button'>{actualPage}</span>
       {actualPage < pages ? <button className='c-pagination__button' onClick={()=> changePage(actualPage +1)}>{">"}</button>:<button hidden></button>}
    </div>
    )
}
