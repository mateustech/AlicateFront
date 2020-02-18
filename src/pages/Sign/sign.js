import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import api from '../../server/api';
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" >
        MegaHack
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.error.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  ground: {
    backgroundColor: '#2f3640'
  },
  submit: {
    backgroundColor: theme.palette.error.main,
    marginBottom: 10,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
      color: '#fff',
      opacity: 0.9
    }
  },
  fildText: {
    backgroundColor: '#fff',
  }
}));

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Sign({ history }) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
      api.post('/user/sigIn', {   email,
        password
      }).then(success =>{
        const {firstName, lastName, email: localEmail} = success.data.user;
        const {token} = success.data;
         localStorage.setItem('@alicate_name', `${firstName} ${lastName}`);
         localStorage.setItem('@alicate_email', localEmail);
         localStorage.setItem('@alicate_token', token);
        setLoading(false);
        history.push('/perfil');
      }).catch(error =>{
        const erro = error.response.data.message;
        console.log(erro);
        setError(erro);
        alert(erro)
        setLoading(false);
      });
    }


  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.ground}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Digite seu email"
              name="email"
              autoComplete="email"
              autoFocus
              className={classes.fildText}
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Digite sua senha"
              type="password"
              id="password"
              autoComplete="current-password"
              className={classes.fildText}
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="theme.palette.error.main" />}
              label="Relembre-me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              onpr
            >
              {
                loading == true ?
                    (
                        <ClipLoader
                            css={override}
                            size={50}
                            //size={"150px"} this also works
                            color={"#123abc"}
                            loading={loading}
                        />
                    ):
                    (
                        <Link>Entrar</Link>
                    )
              }

            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/signup' variant="body2">
                  {"Não possui uma conta? Inscrever-se"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}