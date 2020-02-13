import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export default function Main() {
  const [play, setPlay] = useState(true)
  return (
    <>
      <Fab color="primary" aria-label="add" onClick={() => { if (play) { setPlay(false) } else { setPlay(true) } }}>
        {play == true ? <PlayArrowIcon /> : <PauseIcon />}
      </Fab>
    </>
  );
}
