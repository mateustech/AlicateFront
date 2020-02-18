import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './signup.css'
import api from "../../server/api";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";

function Copyright() {
  return (
    <Typography variant="body2" color="black" align="center">
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

  paper: {
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15
  },

  form: {
    width: '100%',
  },
  submit: {
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
      opacity: 0.9
    },
    margin: theme.spacing(3, 0, 2),
  },
}));

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function SignUp({ history }) {
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

   function handleSubmit(event) {
    event.preventDefault();
     setLoading(true);
       api.post('/user', {  firstName, lastName, email, password}).then(success =>{
         setLoading(false);
         history.push('/sign');
       }).catch(error =>{
         const erro = error.response.data.message;
         console.log(erro);
         alert(erro);
         setLoading(false);
       })
  }

  const classes = useStyles();

  return (
    <div className="signup">
      <Container maxWidth="xs" >
        <div className={classes.paper}>
          <div className="avatar" >
            <LockOutlinedIcon />
          </div>
          <Typography component="h1" variant="h5" style={{ marginBottom: 20 }}>
            Criar Conta
        </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={event => setFirst(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={lastName}
                  onChange={event => setLast(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="black" />}
                  label="Quero receber inspiração, promoções de marketing e atualizações por e-mail."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
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
                        <Link>Cadastrar</Link>
                    )
              }

            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to={'/sign'} variant="body2" id="check">
                  <label>Ja Tenho Uma Conta? Entrar</label>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>

  );
}