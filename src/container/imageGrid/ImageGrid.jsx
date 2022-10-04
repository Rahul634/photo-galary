import "./imagegrid.css"
import React from 'react'
import useFirestore from "../../hooks/useFirestore"

function ImageGrid() {
    const {docs} = useFirestore("images")
    console.log("------>>", docs)
  return (
    <div className="imagegrid">
        {docs && docs.map(doc => (
            <div className="image_wrap" key={doc.id}>
                <img className="imagegrid_pic" src={doc.url} alt="uploaded pic" />
            </div>
        ))}
    </div>
  )
}

export default ImageGrid