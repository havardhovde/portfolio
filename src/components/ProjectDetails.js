import React, { useState, useEffect } from 'react'
import "./ProjectDetails.css"
import firebase from "./firebase"
import parse from 'html-react-parser';
import { Link } from "@reach/router"

const ProjectDetails = (props) => {

    const [project, setProject] = useState()
    const [Prev, setPrev] = useState()
    const [Next, setNext] = useState()

    useEffect( () => {
        firebase
        .firestore()
        .collection("projects")
        .doc(props.id)
        .onSnapshot(
            snapshot => setProject(snapshot.data())
        )
    }, [props.id])

    useEffect ( () => {
        firebase
        .firestore()
        .collection('projects')
        .orderBy('title')
        .get()
        .then( projects  => {
            const array = projects.docs.map( doc => doc.id)
            const myPos = array.indexOf(props.id)
            console.log(array.length)
            setNext ( myPos + 1 === array.length ? array[0] : array[myPos + 1])
            setPrev ( myPos === 0 ? array[array.length - 1] : array[myPos - 1])
        }, [props.id])
    })

    return(
        <main className="project-details">
            {
                project ?
            
            <div>
                <div className='pager'>
                    <Link to={'/projects/' + Prev}>prev</Link>
                    <Link to={'/projects/' + Next}>next</Link>
                </div>
                {
                    project.defaultImage &&
                    <img src={project.defaultImage} alt="default" />
                }
                <h2>{project.title}</h2>
                {
                    project.description &&
                    <div>{ parse(project.description) }</div>
                }
            </div>
            : <h2>Fetching project, please wait</h2>
            }
        </main>
    )
}

export default ProjectDetails