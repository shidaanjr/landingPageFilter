import './App.css'
import Section1 from './Components/Section1/Section1'
import FilterBar from './Components/Section2/FilterBar'
import Companies from './Components/Section2/Companies'
import {data} from './Components/Section2/MOCK_DATA'
import { useState } from 'react'
function App() {
  const [allData, setData]= useState(data)
   const generateCategoryDataForDropDown= () =>{
     return [...new Set(data.map((item)=>item.category))]
   } 
  

  return (
    <div className="App">
      <div className='Container'>
         <Section1/>
         <div className="container">
         <div className="row">
           <div className="col-sm-3">
             <FilterBar 
                categories= {generateCategoryDataForDropDown()}
                setAllData={setData} />
           </div>
           <div className="col-sm-9">
             <div className="row mt-5">
               {allData.map((item) => (
                 <Companies item={item} key={item.id} />
               ))}
             </div>
           </div>
         </div>
       </div>
      </div>
    </div>
  )
}

export default App
