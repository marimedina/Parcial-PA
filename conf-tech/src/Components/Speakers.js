import React from 'react';
import { useParams } from 'react-router-dom';
import getSpeakerByName from '../Selectors/getSpeakerByName';
import Conferences from './Conferences';



const Spearkers = (props) => {

    const {speaker} = useParams();

    const speakerData = getSpeakerByName(speaker)
    

    const {
        biography,
        category,
        image,
        jobtitle,
        name,
        twitter,
        workplace
    } = speakerData

    
    return (
        <div>
            <div className='col s4 m5 l7'>
                <div className='card horizontal'>
                    <div className='card-image'>
                        <img src={image} className='center-align'></img>
                    </div>
                    <div className='container'>
                        <div className='card-stacked center'>
                            <h4>{name}</h4>
                            <h6>{biography}</h6>
                            <h6>TITULO: {jobtitle}</h6>
                            <h6>LUGAR DE TRABAJO: {workplace}</h6>
                            <h6>CATEGORIA: {category}</h6>
                            <h6>TWITTER: {twitter}</h6>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    );
}
 
export default Spearkers;