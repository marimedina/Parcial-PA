import {speaker} from '../Data/Estructura-conf-tech';

const getSpeakerByName = (name) => {
    
    return speaker.filter(
        (sp) => sp.name.toUpperCase() === name.toUpperCase()
    )[0];
}

export default getSpeakerByName