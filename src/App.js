import { useEffect } from "react";

import './App.css'
import searchIcon from './search.svg';
//868b8c0d
const API_URL = 'http://www.omdbapi.com?apikey=868b8c0d'
const App = () => {
    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        console.log(data.Search)
    }
    useEffect(()=>{
    searchMovies('Spiderman');
    },[]);
    return (
    <div className="app">
        <h1>MovieFlixer</h1>
    </div>
    );
}

export default App;
