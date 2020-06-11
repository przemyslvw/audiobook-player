import React from 'react';
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import audioItems from '../data/audioItems'
import '../style/player.css'

function Player({ currentPlay, onEnd }) {
    const nowPlay = currentPlay;

    return (
        <div>
            <AudioPlayer
                autoPlay
                src={`./audio/${audioItems.audioItems[nowPlay][0]}.mp3`}
                onEnded={ onEnd }
            />
        </div>
    )
}

export default Player
