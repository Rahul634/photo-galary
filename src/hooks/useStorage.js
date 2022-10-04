import React, { useEffect, useState } from 'react'
import {projectstorage, projectfirestore, timestamp} from "../Firebase/firebase"

function useStorage(file) {
    const [progress, setProgress] = useState(0)
    const [url, setUrl] = useState(null)
    const [error, setError] = useState(null)
    const [random, useRandom] = useState(null)
    useEffect(() => {
        const storageRef = projectstorage.ref(file.name)
        const collectionRef = projectfirestore.collection('images')
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred/snap.totalBytes)*100
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            const createdAt = timestamp()
            console.log(url, createdAt)
            collectionRef.add({url, createdAt})
            setUrl(url)
            
        })
    }, [file])
  return {progress, url, error}
}

export default useStorage