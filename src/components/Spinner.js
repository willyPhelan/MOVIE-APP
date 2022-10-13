import './Spinner.css'
import { FaSpinner } from 'react-icons/fa';

export default function Spinner () {
    return (
        
        <div className="spinner"> <FaSpinner className='spinning' size={55}/></div>
    )
}