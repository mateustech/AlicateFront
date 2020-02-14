import React, { useState, useEffect } from 'react';
// Styles
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
// Componentes

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

// Menu



export default function Main() {
  const classes = useStyles();
  const [Player, setPlayer] = useState(true)
  const [current, setCurrent] = useState('http://media.w3.org/2010/05/sintel/trailer.mp4')
  const [sources, setSoures] = useState({
    video1: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
    video2: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
    video3: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  });


  function start() {
    var vid = document.getElementById('myvideo')
    vid.play()
  }
  function pausar() {
    var vid = document.getElementById('myvideo')
    vid.pause()
  }
  function play() {
    if (Player) {
      setPlayer(false)
      start()

    } else {
      setPlayer(true)
      pausar()
    }

  }
  function cena1() {
    setCurrent('http://media.w3.org/2010/05/bunny/trailer.mp4')
    var vid = document.getElementById('myvideo')
    vid.autoplay = true;
    vid.load();
  }
  function cena2() {
    setCurrent('http://media.w3.org/2010/05/bunny/movie.mp4')
    var vid = document.getElementById('myvideo')
    vid.autoplay = true;
    vid.load();
  }
  useEffect(() => {

  }, [])

  return (
    <React.Fragment>
      <div className="container">
        <video
          id="myvideo"
          src={current}
        >
        </video>
        <div >
          <Fab variant="extended" size="small" onClick={cena1} className={classes.margin}>
            Cena 1
          </Fab>
          <Fab color="primary" onClick={play} aria-label="add" className={classes.margin}>
            {Player === true ? <PlayArrowIcon /> : <PauseIcon />}
          </Fab>
          <Fab variant="extended" size="small" onClick={cena2} className={classes.margin}>
            Cena 2
          </Fab>

        </div>
      </div>
    </React.Fragment >
  );
}
