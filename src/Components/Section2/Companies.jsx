import React from 'react'

const Companies = ({item}) => {
  return (
     <div className='col-sm-4'>
        <div className='card my-2'>
          <img src={item?.photo} alt='Company image' className='card-img-top'/>
          <div className='card-body'>
            <h5 className='card-title'>{item?.name}</h5>
            <p className="card-text">{item?.category}</p>
          </div>
        </div>
     </div>  
  )
}

export default Companies