import React, { useState } from 'react'
import Progress from '../progress/Progress'
import "./header.css"
function Header() {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const type = ["image/png", "image/jpeg"]
    const handleClick = (e) => {
        e.preventDefault()
        const fileinfo = e.target.files[0]
        console.log(fileinfo)
        if(fileinfo && type.includes(fileinfo.type)) {
            setFile(fileinfo)
            
            setError(null)
        }else {
            setFile(null)
            setError("Only png and jpeg files accepted !!")
        }
    }
  return (
    <div className="headerContainer">
        <span className="header">
        <h1 className="headerlogo">Rahul</h1>
        </span>
        <input type="file" className="headerInput" onChange={handleClick}/>
        {error && 
        <span>{error}</span>
        }
        {file && 
        <span>{file.name}</span>
        }
        {file && 
        <Progress file = {file} setFile = {setFile} />
        }
    </div>
  )
}

export default Header