
const API = 'https://api.themoviedb.org/3'

export default function get (path) { 
    return fetch(API + path, {
        headers: {
            Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNThmNGUyZTg3N2RlNDM5MTA3M2YxZjZmMTdmZWU0ZiIsInN1YiI6IjYzNDRjZjk5NzFmZmRmMDA3ZmIwYmFiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1j7o9J5ciuplt1jzAVoMjxlCX9ZhO_Dn4fsc-XZd88Q',
         'Content-Type': 'application/json;charset=utf-8',
        }
    }).then((response) => response.json())
}