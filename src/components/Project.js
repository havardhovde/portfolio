import React, { useState } from 'react'
import "./Project.css"
import { MdDelete, MdEdit } from "react-icons/md";
import firebase from "./firebase"
import { Link } from "@reach/router"

const Project = (props) => {

    const [activeProject, setActiveProject] = useState(false)

    const deleteProject = () => {
        if (window.confirm("Are you sure you want to delete this?")) {
            firebase.firestore().collection("projects").doc(props.id).delete().then(console.log("Document was deleted")).catch(error => console.log(error))
        }
    }

    return(
        <div className='projectContainer'>
            <div onClick={ () => setActiveProject(!activeProject) } className={activeProject ? "project active" : "project"}>
                {
                    props.data.defaultImage &&
                    <img src={props.data.defaultImage} alt="default" />
                }
                <h2>{props.data.title}</h2>
                {
                    props.data.description &&
                <div className="byLine">{props.data.byline}</div>
                }
                <Link className='readMoreLink' to={"/projects/" + props.id}>Read More</Link>
                {
                    props.signedIn &&
                    <div className= "admin-icons">
                        <Link to={'/edit/' + props.id}>
                            <MdEdit className= "editIcons" />
                        </Link>
                        <MdDelete onClick={deleteProject} className= "editIcons" />
                    </div>
                }
            </div>
        </div>
    )
}

export default Project