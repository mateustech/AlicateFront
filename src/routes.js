import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Sign from './pages/Sign/sign'
import AoVivo from './pages/AoVivo/aovivo'
import Interact from './pages/Interagir/interagir'
import Main from './pages/Main/main'
import Perfil from './pages/Perfil/perfil'
import Signup from './pages/SignUp/signUp'
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign" component={Sign}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/interact" component={AoVivo}></Route>
        <Route exact path="/interact/serie" component={Interact}></Route>
        <Route exact path="/perfil" component={Perfil}></Route>
        <Route exact path="/" component={Main}></Route>
      </Switch>
    </BrowserRouter>
  )
}