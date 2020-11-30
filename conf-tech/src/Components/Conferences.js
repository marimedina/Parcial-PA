import React from 'react';
import { Link } from 'react-router-dom';


const Conferences = ({
    datetime,
    description,
    speaker,
    tag,
    title
    
}) => {


    const time = datetime*1000;
    const date = new Date(time)
    const dateTime = date.toLocaleString()

    

    return (
        <div className='container'>
             <div className='col s4 m5 l7'>
                    <div className='card'>
                        <div className="card-content">
                            <span className='card-title'>{title}</span>
                            <h6>{description}</h6>
                            <h6>ORADOR: {speaker}</h6>
                            <h6>TEMA: {tag}</h6>
                            <h6>FECHA Y HORA: {dateTime}hs</h6>
                        </div>
                        <div className="card-action">
                        <Link to={`/${speaker}`} className='blue-text'>Ver informacion del orador</Link>
                        </div>
                    </div>
                </div>
        </div>
    );
}
 
export default Conferences;