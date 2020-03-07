import React, { useState } from 'react'
//hooks
import { useSneakers } from '../hooks/useSneakers'
//components
import Header from './Header';
//page
import Grid from '../pages/Grid';
import Show from '../pages/Show';

const App = () => {
    const data =  useSneakers();
    const [page, setPage] = useState(false);
    const [sneaker, setSneaker] = useState(null);

    const validationPage = () => {
        if(page === false){
            return(
                <Grid 
                    clickSneaker={handleClickSneaker}
                />
            )
        }
        return(
            <Show id={sneaker} sneakers={data} />
        )
    }

    const handleClickSneaker = (id_sneaker) => {
        setSneaker(id_sneaker);
        handlePage()
    }

    const handlePage = () => {
        setPage(!page)
    }

    return (
        <div className='App' >
            {/* {console.log(sneaker)} */}
            <div className="App-conatiner">
                <Header page_status={handlePage} />
                <div className="">
                    {validationPage()}
                </div>
            </div>
        </div>
    )
}

export default App;
