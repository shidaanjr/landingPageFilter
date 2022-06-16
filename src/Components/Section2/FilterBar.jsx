import React, { useState } from 'react'


const FilterBar = ({categories}) => {
  const handleFiterName= (Name)=>{
    const filterData= data.filter((item) =>{
      if(item.name.toLowerCase().includes(Name.toLowerCase())){
       return item
      }
      else{
        return 'no data'
      }
    }
    )
    setData(filterData)
}
  const [Name, setName]= useState('')
  const handleNameChange= (event)=>{
    const {value} = event.target
    setName(value);
    handleFiterName(value);

  }
  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={handleNameChange()}

          />
          
      </div>

      <div className="col-sm-12 my-2">
      <label htmlFor="gender">category</label>
      <select
        className="form-control" id='category'>
        <option value="">Select</option>
        {categories.map((category)=>(
          <option value={category} key={category}>{category}</option>
        ))}
      </select>
    </div>
    
  </div>  
  )
}

export default FilterBar