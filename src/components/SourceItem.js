import React from 'react'
import '../style/track.css';
const SourceItem = ({ item, onClick, index, currentPlay }) => {
    const nowPlay = currentPlay;
    return (
        <div 
            onClick={ onClick }
            className={ index === nowPlay  ? 'track-line track-line-active' : 'track-line' }>
           <div className="audioname">
               { item[4] }
            </div>
           <div className="audiotime">
                { item[1] }
           </div>
        </div>
    )
}

export default SourceItem
