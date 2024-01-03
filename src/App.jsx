import React from "react";
import {Routes, Route} from 'react-router-dom'
import MainPage from "./Pages/MainPage";
import RsvpForm from './Pages/RsvpForm'
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path={"/"} element={<MainPage/>} />
          <Route path={"/rsvp"} element={<RsvpForm/>} />
        </Routes>
      </div>
    </>
  )
}

export default App