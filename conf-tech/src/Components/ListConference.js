import React from 'react';
import Conferences from './Conferences';
import {conference} from '../Data/Estructura-conf-tech';


const ListConference = () => {
    console.log(conference);
    return (
        <div className='card-columns'>
            {conference && conference.map(conf => (
                <Conferences
                    key={conf.title}
                    {...conf}
                />
            ))}
        </div>
    );
}
 
export default ListConference;