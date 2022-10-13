import './Search.css'
import {FaSearch} from 'react-icons/fa'

import { useHistory, useLocation} from 'react-router-dom'

function useQuery () {
    return new URLSearchParams(useLocation().search)
}

export default function Search() {
    const query = useQuery();
    const search = query.get("search");
  
    
    const history = useHistory();
  
   
    const handleSubmit = (e) => {
      e.preventDefault();
     
    };
    
    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='searchbox'>
                <input className='searchinput' type='text'  value={search ?? ''} 
                onChange={(evento) => {
                const value = evento.target.value
                 
                  history.push("/?search=" + value);
                }} placeholder='Enter your search'/>
                <button className='buscar' type= 'Submit'> <FaSearch size={15}/> </button>
                </div>
                
            </form>
       
    )
}