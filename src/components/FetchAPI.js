import React, {useState} from 'react'

const FetchAPI = () => {
    const [ pokie, setPokie] = useState ([])

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
            return response.json();
        })
        .then(response => {
            setPokie(response.results)
            console.log("The Pokemon!", response.results);
        })
        .catch(err=>{
            console.log(err);
        });

    }
    return (
    <div>
        <h1>Pokemon!</h1>
        <button onClick={fetchData}>Pokemon</button>

        {
            pokie.map((p, i) => {
                return(
                    <div key ={i}>
                    <h2>{p.name}</h2>
                    </div>
                )})
        }
    </div>
    )
}

export default FetchAPI