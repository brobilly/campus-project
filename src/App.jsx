import React from "react";
import {Routes, Route} from 'react-router-dom'
import MainPage from "./Pages/MainPage";
import RsvpForm from './Pages/RsvpForm'
import QrValidation from "./Pages/QrValidation";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path={"/"} element={<MainPage/>} />
          <Route path={"/rsvp"} element={<RsvpForm/>} />
          <Route path={"/qrscan"} element={<QrValidation/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
