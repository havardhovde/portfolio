import React, { useState, useEffect } from 'react'
import { Router } from "@reach/router"
import "./App.css"
import firebase from "./components/firebase"
import Home from "./components/Home"
import Projects from "./components/Projects"
import ProjectDetails from "./components/ProjectDetails"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Login from "./components/Login"
import Edit from "./components/Edit"

const App = () => {

  const [signedIn, setSignedIn] = useState(false)
  const [projects, setProjects] = useState([])

  useEffect( () => {
    firebase
    .firestore()
    .collection("projects")
    .orderBy("year", 'desc')
    .onSnapshot(
        snapshot => setProjects(snapshot.docs)
    )
  }, [])

  useEffect( () => {
    firebase.auth().onAuthStateChanged(
      user => {
        if(user) {
          setSignedIn(true)
        } else {
          setSignedIn(false)
        }
      }
    )
  })

  return(
      <div className="mainPage">
        <Header signedIn={signedIn} />
        <Router basepath={process.env.PUBLIC_URL}>
          {/* <Home signedIn={signedIn} path="/home/:id" /> */}
          <Home projects={projects} signedIn={signedIn} default path="" />
          <Projects projects={projects} signedIn={signedIn} path="/projects" />
          <ProjectDetails path="/projects/:id" />
          <Contact path="/contact" />
          <Login signedIn={signedIn} setSignedIn={setSignedIn} path="/login" />
          <Edit path="/edit/:id" />
        </Router>
      </div>
  )
}

export default App