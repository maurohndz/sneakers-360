import React from 'react';
//styles
import './styles/ItemGrid.css'

const ItemGrid = (props) => {
    const {
        url_img
    } = props.data_sneaker;

    const generateUrl = () => {
        const url = url_img.replace(':index', '01');
        return url;
    }

    const handleClick = () => {
        props.clickSneakerImg(props.id);
    }

    return (
        <div className="ItemGrid" onClick={handleClick}  >
            <div className="ItemGrid-conatiner">
                <img src={generateUrl()} alt="" className="ItemGrid-img" />
            </div>
        </div>
    )
}

export default ItemGrid;
