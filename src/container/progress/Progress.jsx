import React from 'react'
import "./progress.css"
import useStorage from '../../hooks/useStorage'
import { useEffect } from 'react'
function Progress({file, setFile}) {
    const {url, progress} = useStorage(file)
    console.log(progress)
    useEffect(() => {
        if(url) {
            setFile(null)
        }
    }, [url, setFile])
  return (
    <div className="progress" style={{width:progress+"%"}}>

    </div>
  )
}

export default Progress