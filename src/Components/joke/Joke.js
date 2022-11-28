import {Card,Button} from "react-bootstrap";


let favoriteList =[]

const Joke = (props)=>{
    const handleSave =()=>{ //local storage saugojimas
        let obj={}
        obj["id"] =props.id
        obj["value"]=props.value
        obj["url"]=props.url
        favoriteList.push(obj)
        localStorage.setItem('favoriteJokes',JSON.stringify(favoriteList))
    }
    return(
        <Card>
            <Card.Header>{props.value}</Card.Header>
            <Card.Body>
                <div>{props.url}</div>
                <div><Button onClick={handleSave}>Man patinka</Button></div>
            </Card.Body>
        </Card>
    )
}

export default Joke