import React, { useState, useEffect } from 'react'
import firebase from "./firebase"
import "./Edit.css"
import FileUploader from "react-firebase-file-uploader";

const Edit = (props) => {

    const [project, setProject] = useState({})
    const [status, setStatus] = useState("")
    const [imageName, setImageName] = useState('defaultImage')

    useEffect( () => {
        firebase.firestore().collection("projects").doc(props.id)
        .onSnapshot( snapshot => 
            setProject(snapshot.data())    
        )
    }, [props.id] )

    const saveProject = (e) => {
        setStatus("Updating project, please hold")
        e.preventDefault()
        firebase.firestore().collection("projects").doc(props.id)
            .update(project)
            .then( () => setStatus("Project updated!"))
            .catch( error => {console.log(error.message)})
    }

    const updateValue = (e) => {
        e.persist()

        switch(e.target.type) {
            case 'checkbox':{
                setProject( existingProject => (
                    {
                        ...existingProject,
                        [e.target.name]: e.target.checked
                    })
                )
                break;
            }
            case 'text': {
                setProject( existingProject => (
                    {
                        ...existingProject,
                        [e.target.name]: e.target.value
                    })
                )
                break;
            }
            default: {
                setProject( existingProject => (
                    {
                        ...existingProject,
                        [e.target.name]: e.target.value
                    })
                )
                break;
            }
        }
        
    }

    const uploadStart = () => {
        setStatus("uploading image, please hold")
    }

    const uploadError = (error) => {
        setStatus(error)
    }

    const handleProgress = (percentage) => {
        console.log(percentage)
    }

    const uploadSuccess = (filename) => {
        firebase
        .storage()
        .ref("images")
        .child(filename)
        .getDownloadURL()
        .then(
            url => setProject( existingProject => ({
                ...existingProject,
                [imageName]: url
            } ) )
        )
        setStatus("image uploaded")
    }

    return(
        <main className='editPage'>
            <h1>Edit project {project.title}</h1>
            <form onSubmit={saveProject}>
                <input onChange={updateValue} name="title" className='textInputSmall' value={project.title}/>
                <input onChange={updateValue} name="year" className='textInputSmall' placeholder="year" value={project.year}/>
                <input onChange={updateValue} name="byline" className='textInputSmall' placeholder="Short description for the front page" value={project.byline}/>

                <div className='project-images'>
                    {
                        project.defaultImage &&
                        <div>
                            <h3>Default</h3>
                            <img className="uploaderImage" src= {project.defaultImage} alt="default"></img>
                        </div>
                    }
                    {
                        project.displayImage &&
                        <div>
                            <h3>Display</h3>
                            <img className="uploaderImage" src= {project.displayImage} alt="display"></img>
                        </div>
                    }
                </div>

                <select name='imageName' onChange={e => setImageName(e.target.value)}>
                    <option name='defaultImage' value='defaultImage'>Default image</option>
                    <option name='displayImage' value='displayImage'>Display image</option>
                </select>

                <label>
                    <div className="button">Upload
                        <FileUploader
                            hidden 
                            accept="images/*"
                            storageRef={firebase.storage().ref('images')}
                            onUploadStart={uploadStart}
                            onUploadError={uploadError}
                            onUploadSuccess={uploadSuccess}
                            onProgress={handleProgress}
                        />
                    </div>
                </label>
                <textarea onChange={updateValue} name="description" value={project.description}/>
                <button type="submit">Save</button>
            </form>
            <p>{status}</p>
        </main>
    )
}

export default Edit