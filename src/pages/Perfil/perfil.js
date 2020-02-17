import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';
//icons
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import VideocamIcon from '@material-ui/icons/Videocam';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Header from '../../Components/Header/header'
import procfile from '../../assents/procfile.jpg'
import ana from '../../assents/ana.jpg'
import prog1 from '../../assents/prog1.jpg'
import prog2 from '../../assents/prog2.jpg'

import "./perfil.css"
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 850,
    backgroundColor: '#ccc',
    margin: theme.spacing(2),
  },
  media: {
    border: 1,
    margin: 30,
    height: 250,
    borderRadius: 2
  },
}));

function Media(props) {
  const { loading = false } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circle" width={40} height={40} style={{ marginLeft: 10 }} />
          ) : (
              <Avatar
                style={{ marginLeft: 10 }}
                alt="Ted talk"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFsdFwWY-hRjfWOPlYAVH0ebFOab0hCMLlwsScYwTPg0YwAG6B"
              />
            )
        }

        title={
          loading ? (
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
          ) : (
              <p style={{ fontWeight: 'bold', fontSize: '18px', color: 'rgb(128, 121, 121)' }}>Matheus Ricelly</p>
            )
        }
      />
      <p id="legendTop"> {loading ? "" : "Que Final Maneiro, Fiquei Surpreso Com o Que Aconteceu!"}</p>
      {
        loading ? (
          <Skeleton animation="wave" variant="rect" className={classes.media} />
        ) : (
            <CardMedia
              className={classes.media}
              image={ana}
              title="Ted talk"
            />
          )
      }

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (

            <Typography className="controllsPost">
              <ThumbUpOutlinedIcon />
              <p>GOSTEI</p>
              <CommentOutlinedIcon />
              <p>COMENTAR</p>
              <ShareOutlinedIcon />
              <p>COMPARTILHAR</p>
            </Typography>
          )}
      </CardContent>
    </Card >
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Facebook() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <div className="container-feed">
        <div className="preference">
          <div className="profile">

            <img src={procfile}></img>
            <p>Hermes Segundo</p>
          </div>
          <div className="itens">
            <div className="pref">
              <h2>Preferencias</h2>
              <ArrowForwardIosIcon />
            </div>
            <img src={prog1}></img>
            <img src={prog2}></img>
            <img src={prog1}></img>
          </div>
        </div>
        <div className="feed">
          <div className={classes.card} className="post">
            <div className="item1">
              <p>Compartilhe Suas Experiências</p>
            </div>
            <div className="item2">
              <VideocamIcon />

              <button>Partilhar</button>

            </div>
          </div>
          <Media />
          <Media loading />
        </div>
      </div>
    </React.Fragment>
  );
}