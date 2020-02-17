import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUp from './pages/SignUp/signUp'
import Sign from './pages/Sign/sign'
import AoVivo from './pages/AoVivo/aovivo'
import Main from './pages/Main/main'
import Perfil from './pages/Perfil/perfil'
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/sign" component={Sign}></Route>
        <Route exact path="/interact" component={AoVivo}></Route>
        <Route exact path="/perfil" component={Perfil}></Route>
        <Route exact path="/" component={Main}></Route>
      </Switch>
    </BrowserRouter>
  )
}