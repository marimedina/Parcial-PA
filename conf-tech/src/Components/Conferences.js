import React from 'react';
import { Link } from 'react-router-dom';


const Conferences = ({
    datetime,
    description,
    speaker,
    tag,
    title
    
}) => {




    

    return (
        <div className='container'>
             <div className='col s4 m5 l7'>
                    <div className='card'>
                        <div className="card-content">
                            <span className='card-title'>{title}</span>
                            <h6>{description}</h6>
                            <h6>Orador: {speaker}</h6>
                            <h6>Tema: {tag}</h6>
                            <h6>Fecha y hora:</h6>
                        </div>
                        <div className="card-action">
                        <Link to={`/${speaker}`}>Ver informacion del orador</Link>
                        </div>
                    </div>
                </div>
        </div>
    );
}
 
export default Conferences;