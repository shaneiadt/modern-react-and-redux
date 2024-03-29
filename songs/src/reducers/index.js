import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'No Diggity', duration: '4:00'
        },
        {
            title: 'All Start', duration: '2:17'
        },
        {
            title: 'I Want It That Way', duration: '1:45'
        }
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    switch (action.type) {
        case 'SONG_SELECTED':
            return action.payload;
        default:
            return selectedSong
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});