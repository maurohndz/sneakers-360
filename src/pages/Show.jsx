import React, { useState, useEffect } from 'react';
//styles
import './styles/Show.css';

const Show =  (props) => {
    const data =  props.sneakers;
    const shoe = data[props.id]
    const [value, setValue] = useState(1);
    const [images, setImages] = useState([]);
    const canvas = React.createRef();

    useEffect(()=>{    
        getImg();        
    }, []);

    const handelChange = (e) => {
        setValue(e.target.value)
        loadImage(value)
    }

    const getImg = () => {
        for (let i = 1; i <= 39; i += 1) {
            const imagesArray = images;
            const number = i.toString().padStart(2, '00');            
            const url = shoe.url_img.replace(':index', number);   
            const image = new Image();
            image.src = url;
            image.addEventListener('load', () => {
                imagesArray[i] = image;
                setImages(imagesArray);
                
                if (i === 1) {
                    loadImage(i)
                  }
            })
        }
    }

    const loadImage = (index) => {
        const ctx = canvas.current.getContext('2d');
        ctx.drawImage(images[index], 0, 0, canvas.current.width, canvas.current.height);
    }

    return (
        <div className="Show" >
            <div className="Show-container">
                <canvas 
                    ref={canvas}  
                    width="768" 
                    height="512" 
                ></canvas>
                <input 
                    type="range" 
                    min="1" 
                    max="39" 
                    step="1" 
                    value={value} 
                    id="slider" 
                    onChange={handelChange}
                    className="rang-input"
                />
            </div>
        </div>
    )
}

export default Show;
