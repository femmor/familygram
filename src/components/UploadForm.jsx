import React, { useState } from 'react'
import Error from './Error'

const UploadForm = () => {
    // Selected file
    const [file, setFile] = useState('')
    const [error, setError] = useState(null)

    // Allowed types
    const types = ['image/jpeg', 'image/png', 'image/jpg']

    const uploadHandler = (e) => {
        let selected = e.target.files[0]
        if(selected && types.includes(selected.type)) {
            setFile(selected)
            setError(null)
        }
        else {
            setFile('')
            setError("Please select an image file type (jpg, jpeg or png)")
        }
    }

    return (
        <>
            
            <form>
                <label>
                    <input type="file" onChange={uploadHandler}/>
                    <span>+</span>
                </label>
                {error ? <Error error={error}/> : 
                    <div>
                        {file.name}
                    </div>}
            </form>
        </>
    )
}

export default UploadForm
