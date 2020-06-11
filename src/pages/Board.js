import React from 'react'
import AudioWrapper from '../components/AudioWrapper'
import audioItems from '../data/audioItems'
import '../style/pagebox.css';
export const Board = ({ activeCart, handleClick, currentPlay }) => {
    return (
        <div className={ activeCart === "board"  ? 'board page-box page-box-active' : 'board page-box' }>
            <div className="audioWrapper">
            <AudioWrapper audioItems={ audioItems.audioItems } handleClick={( handleClick )} currentPlay={ currentPlay }/>
                <div className='track-line signature'>
                    <div className="audioname" >
                    Czyta:
                    </div>
                    <div className="audiotime" >
                    Maciej Kowalik
                    </div>
                </div>
                <div className='track-line signature'>
                    <div className="audioname" >
                    Łączny czas:
                    </div>
                    <div className="audiotime" >
                    13 godz. 25 min.
                    </div>
                </div>
            </div>
            <p className="lista1">Pliki audio <b>(<a href="audio" target="_blank"
            className="lista4">zamieszczone na płycie)</a>
            </b> są zapisane w formacie MP3, można je odtwarzać w dowolnym urządzeniu lub programie obsługującym ten format.
            </p>
            <br/>
        </div>
    )
}