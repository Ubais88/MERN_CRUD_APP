import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
  const [data , setData] = useState('');
  const [error , setError] = useState('');

  const getdata = async() => {
    const response = await fetch('http://localhost:8000');

    const result = await response.json();
    if(!response.ok){
        console.log(result.error);
        setError(result.error);
    }
    if(response.ok){
        setData(result);
        setError('');
    }}

    useEffect(() => {
      getdata();
    },[]);
    console.log(data);
    
    const handleDelete = async(id) => {
          const response = await fetch(`http://localhost:8000/${id}`,{
          method:'DELETE',
        });
        const result = await response.json();
        if(!response.ok){
          console.log(result.error);
          setError(result.error);
        }
        if(response.ok){
          setError('Data Deleted Successfully');

          setTimeout(() => {
            setError('')
            getdata()
          }, 2000)
        }
      }

    

  return (
    <div className='container my-2'>
      {error && <div class="alert alert-danger">{error}</div>} 
      <h2 className='text-center'>All Data</h2>
      <dic className="row">
      {data && data.map && data.map((ele) => (
        <div key={ele._id} className="col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{ele.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
            <p className="card-text">{ele.age}</p>
            <Link to="#" className="card-link" onClick={() => handleDelete(ele._id)}>Delete</Link>
            <Link to={`/${ele._id}`} className="card-link">Edit</Link>
          </div>
        </div>
        </div>
      ))}
        
      </dic>
    </div>
  )
}

export default Read