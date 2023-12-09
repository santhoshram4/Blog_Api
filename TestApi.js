import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


function Blog() {

    const [data, setData] = useState([])
    const [records, setRecords] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setData(res.data)
                setRecords(res.data);

            })
            .catch(err => console.log(err));

    }, [])
    const Filter = (event) => {
        setRecords(data.filter(f => f.title.toLowerCase().includes(event.target.value)))
    }

    return (

        <div className="blog-container">
            <h1>BLOG</h1>
            <div className='search'>
                <input type='text' className='form-control' onChange={Filter} placeholder='search'></input>
            </div>
            <div className="card-container">
                {records.map((d, i) => (
                    <div key={i} className="blog-card">
                        <p className="p1">{d.id}</p>
                        <h4 className="h4">{d.title}</h4>
                        <p className="p">{d.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog




<style>
  * {
  margin: 10px;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  font-family: 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.blog-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  background-color: #f3eded;
  border-radius: 51px;
  
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #f3eded;
}

.blog-card {
  max-width: 300px;
  margin: 15px;
  padding: 15px;
  border: 1px solid #ccc;
  background-color: rgb(57, 225, 225);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.blog-card:hover {
  transform: scale(1.05);
  background-color: rgb(8, 200, 171);
}

.search{
  justify-content: center;
  margin: 0 25%;
}
.search input{
  justify-content: center;
  border:2px solid rgb(57, 225, 225);
}
.p1 {
  color: #f9f7f7;
  font-size:25px;
  font-weight: bold;

}

.h4 {
  text-transform: capitalize;
}

.p {
  color: #555;
  text-align: justify;
  text-transform: capitalize;
  padding: 5px;

}
  </style>
