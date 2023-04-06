import {React,useEffect,useState} from 'react';
import "./Home.scss";
import Row from './Row/Row';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiPlus } from 'react-icons/bi';

const api_key = "74fb4c52280ddfefcbb090a371b77783";
const imgUrl = "https://image.tmdb.org/t/p/original"
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const now_playing = "now_playing";
const popularUrl = "popular";
const top_rated = "top_rated";
const genrelist = "genre";

const Home = () => {    
    const [upcomingmovies,setUpcomingmovies] = useState([])
    const [nowplaying,setNowPlaying] = useState([])
    const [popular,setPopular] = useState([])
    const [toprated,setNowTopRated] = useState([])
    const [genre,setGenre] = useState([])
    useEffect(() => {
        
        const fetchUpcomingmovies = async() =>{            
            const {data : {results} } = await axios.get(`${url}/movie/${upcoming}?api_key=${api_key}`);            
            setUpcomingmovies(results);
        }
        const fetchNowPlaying = async() =>{
            const {data : {results} } = await axios.get(`${url}/movie/${now_playing}?api_key=${api_key}`);            
            setNowPlaying(results);
        }
        const fetchpPopular = async() =>{
            const {data : {results} } = await axios.get(`${url}/movie/${popularUrl}?api_key=${api_key}`);            
            setPopular(results);
            console.log(results);
        }
        const fetchpTopRated = async() =>{
            const {data : {results} } = await axios.get(`${url}/movie/${top_rated}?api_key=${api_key}`);            
            setNowTopRated(results);
        }
        const fetchGenre = async() =>{            
            const {data : {genres} } = await axios.get(`${url}/${genrelist}/movie/list?api_key=${api_key}`);            
            setGenre(genres);
            // console.log(genres);
        }
       fetchUpcomingmovies();
       fetchNowPlaying();
       fetchpPopular();
       fetchpTopRated();
       fetchGenre();
    }, []);

    
    return (
        <div className='home'>          

            <div className="banner" style={{backgroundImage:popular[0] ?`url(${imgUrl}${popular[0].poster_path})`:"backgroundColor:#000" }}>
                
                {popular[0] && (<h1>{popular[0].original_title}</h1>)}
                {popular[0] && (<p>{popular[0].overview}</p>)}

                <div>
                    <button type='submit'><BsFillPlayFill />  Play </button>
                    <button type='submit'>My List <BiPlus /></button>
                </div>
            </div>
           
            <Row title={"Upcoming Movies on netflix"} arr={upcomingmovies} />
            <Row title={"Now Playing on netflix"} arr={nowplaying} />
            <Row title={"Popular on netflix"} arr={popular} />
            <Row title={"Top Rated on netflix"} arr={toprated} />

            <div className='genreBox'>
                {
                    genre.map((item)=>(
                        <Link key={item.index} to={`/genre/${item.id}`}>{item.name}</Link>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Home;