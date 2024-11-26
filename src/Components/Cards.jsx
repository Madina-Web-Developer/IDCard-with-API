import React, { useEffect, useState } from 'react'
import'./Cards.css'
import { DiMagento } from "react-icons/di";

const Cards = () => {

  const [data , setData] = useState([])


  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json =>  setData(json))

  },[])


 
  return (
    <>
    <div className="main_card">

      {
        data.map((alu)=>{
          return(
            <div key={alu.id} className="main_single_card">

                <div className="img_round">
                   <img src="public/N.png" alt="m" />
                </div>

                <div className="img_card">

                 <div className="head">
                 < DiMagento className='icon' />
                 <h1> MR Group </h1>
                 </div>

                </div>

                <div className="i_head">
                  <h2>{alu.name} </h2>
                  <div className="p_c">
<div className="position">
<h3>Web Developer</h3>
</div>
                  </div>

                  <div className="others">
                  <p>ID : <span> {alu.id}</span></p>
                  <p>E-mail: <span> {alu.email}</span></p>
                  <p>Phone:<span> {alu.phone}</span></p>
                  </div>
                </div>

                <div className="info_card"></div>

            </div>

          )
        })
      }

    </div> 

    </>
  )
}
export default Cards                 
