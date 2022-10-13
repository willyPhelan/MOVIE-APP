import { useLocation } from "react-router-dom";
import Moviegrid from "./moviegrid";
import Search from "./Search";
import useDebounce from "./Utils/useDebounce";

function useQuery () {
    return new URLSearchParams(useLocation().search)
}




export default function LandingPage() {
    const query = useQuery()
    const search = query.get('search')
    const debounced = useDebounce(search, 300)
    return (
 <div>
     <Search/>
     <Moviegrid key={debounced} search={debounced}/>
 </div>)

}