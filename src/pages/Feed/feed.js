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

import HeaderInteract from '../../Components/HeaderInteract/headerinteract'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    margin: theme.spacing(2),
  },
  media: {
    height: 190,
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
            <Skeleton animation="wave" variant="circle" width={40} height={40} />
          ) : (
              <Avatar
                alt="Ted talk"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFsdFwWY-hRjfWOPlYAVH0ebFOab0hCMLlwsScYwTPg0YwAG6B"
              />
            )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
          ) : (
              'Matheus Ricelly'
            )
        }
        subheader={loading ? <Skeleton animation="wave" height={10} width="40%" /> : '5 hours ago'}
      />
      {loading ? (
        <Skeleton animation="wave" variant="rect" className={classes.media} />
      ) : (
          <CardMedia
            className={classes.media}
            image="https://s2.glbimg.com/9Ymj3bSEATfoMOybnAfGW4BceIQ=/0x0:1600x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2019/m/P/0lkvAhS5AGlVYUAzZ3Gg/ana-maria-braga-22-01-19.png"
            title="Ted talk"
          />
        )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
            <Typography variant="body2" color="textSecondary" component="p">
              {
                "Veja o meu Resultado Final do Programda da Ana Maria Braca - Globo, Ficou Muito Bom :D"
              }
            </Typography>
          )}
      </CardContent>
    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Facebook() {
  return (
    <div>
      <HeaderInteract />
      <Media />
      <Media loading />
    </div>
  );
}