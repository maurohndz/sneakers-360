import React from 'react';
//hooks
import { useSneakers } from '../hooks/useSneakers';
//component
import ItemGrid from '../components/ItemGrid';
//styles
import './styles/Grid.css';

const Grid = (props) => {
    const data = useSneakers();
    const {
        clickSneaker
    } = props;

    const handleClick = (id_sneaker) => {
        clickSneaker(id_sneaker);
    }

    const generateGrid = () => {
        if(data.length != 0){
            return(
                <div className="Generate-grid">
                    {
                        data.map((sneaker, key)=>{
                            return(
                                <ItemGrid 
                                    key={`sneaker-${key}`}
                                    data_sneaker={sneaker}
                                    id={key}
                                    clickSneakerImg={handleClick}
                                />
                            )
                        })
                    }
                </div>
            )
        }
    }

    return (
        <div className="Grid" >
            <div className="Grid-container">
                {generateGrid()}
            </div>
        </div>
    )
}

export default Grid;
