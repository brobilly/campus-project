import React from "react";
import {Routes, Route} from 'react-router-dom'
import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login";
import RsvpForm from './Pages/RsvpForm'
import QrValidation from "./Pages/QrValidation";
import { RequireAuth } from "./components";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path={"/"} element={<MainPage/>} />
          <Route path={"/rsvp"} element={<RsvpForm/>} />
          <Route path={"/login"} element={<Login/>} />
          <Route path={"/qrscan"} element={
            <RequireAuth>
              <QrValidation/>
            </RequireAuth>}/>
        </Routes>
      </div>
    </>
  )
}

export default App