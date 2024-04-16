import React, { Fragment, useState } from 'react';

function Galeria() {
  
    const [file, setFile] = useState(null)

    const selectedHandler = e => {
      setFile(e.target.files[0])
    }
  
    const sendHandler = () => {
      if(!file){
        alert('you must upload file')
        return
      }
  
      const formdata = new FormData()
      formdata.append('image', file)
  
      fetch('http://localhost:8080/image/post', {
        method: 'POST',
        body: formdata
      })
      .then(res => res.text())
      .then(res => console.log(res))
      .catch(err => {
        console.error(err)
      })
  
      document.getElementById('fileInput').value = null
  
      setFile(null)
    
    }

    return (
        <>
            <br/><br/><br/>
            <h1 className="text-center text-danger">Galeria de actividades</h1>
            <div className='container mt-5'>
                <div className='card p-3'>
                    <div className='row'>
                        <div className='col-10'>
                            <input id='fileInput' onChange={selectedHandler} className='form-control' type='file' />
                        </div>
                        <div className='col-2'>
                            <button onClick={sendHandler} type='button' className='btn btn-primary'>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Galeria;
