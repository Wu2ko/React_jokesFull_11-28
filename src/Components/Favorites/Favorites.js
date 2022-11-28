import Joke from "../joke/Joke";
import {Row} from "react-bootstrap";
import {useEffect, useState} from "react";


const Favorites=()=>{
    const [jokeList,setJokeList] = useState([])
    const data = JSON.parse(window.localStorage.getItem('favoriteJokes'))

    useEffect(()=> {
        if (data.length) {
            setJokeList(state => ([...state, ...data]))
        }
    },[]
)

//console.log(jokeList)
    return(
        <>
            {jokeList &&
            <div><h2>Mano juokeliai</h2>
                <div>
                    <Row>
                        {jokeList.map(joke => (<Joke id={joke.id} value={joke.value} url={joke.url}/>))}
                    </Row>
                </div>
            </div>
            }

            </>
    )


}
export default Favorites