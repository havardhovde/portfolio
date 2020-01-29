import React, {useState, useEffect } from 'react'
import firebase from "./firebase"
import Project from "./Project"
import "./Projects.css"
import { IoIosAddCircle } from "react-icons/io"
import { navigate } from "@reach/router"
import ClipLoader from "react-spinners/ClipLoader"
import Masonry from "react-masonry-css"

const Projects = (props) => {
    const [projects, setProjects] = useState([])

    const addProject = () => {
        firebase.firestore().collection("projects").add(
            {
                title: "New project",
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                description: "Description"
            }
        )
            .then( doc => navigate("/edit/" + doc.id))
    }

    useEffect( () => {
        firebase
        .firestore()
        .collection("projects")
        .orderBy("title")
        .onSnapshot(
            snapshot => setProjects(snapshot.docs)
        )
    }, [])



    return(
        <main className='projectPage'>
            {
                props.signedIn &&
                <div className="add">
                    <IoIosAddCircle className="editIcons" onClick={addProject} />
                </div>
            }

            <h1>projects</h1>

            {
                projects.length > 0
                ?
                // <div className="projectsContainer">
                <Masonry
                    breakpointCols={
                        {
                            default: 3,
                            1300: 2,
                            1100: 1
                        }
                }
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {
                        projects.map(
                            project => <Project key={project.id} id={project.id} data={project.data()} signedIn={props.signedIn} />
                        )
                    }
                </Masonry> 
            :   <div className="loader">
                    <ClipLoader size={50} />
                </div>
            }
        </main>
    )
}

export default Projects