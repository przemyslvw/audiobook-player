import React from 'react'
import SourceItem from './SourceItem';

const AudioWrapper = ({ audioItems, handleClick, currentPlay }) => 
    audioItems !== [] &&
    audioItems !== null &&
    audioItems.map((item, index) =>  
        item.length > 1 &&
        <SourceItem item={ item } key={ index } onClick={() => handleClick(index)} index={ index } currentPlay={ currentPlay }/>
    )

export default AudioWrapper
