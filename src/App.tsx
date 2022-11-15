import React, { useState, useEffect, Component } from 'react'
import "./App.css"
import api from './components/api';

class App extends Component {

  state={ 
    films: [],
  }

  async componentDidMount() {
    const response = await api.get('');

    console.log(response.data)
    this.setState({ films: response.data}) ;
  }

  render(){

    const { films } = this.state;

    return(
      <div>
        <h1 className='titulo'>Lista de Filmes</h1>
        {console.log(films)}
        {films.map(film => (
          <li key={film.id}>
            <h2>
              <strong>Título: </strong>
              {film.title}
              
              

            </h2>
            <img className='imgs' src={film.image}/>
            <h2>{film.release_date}</h2>
          </li>
        ))}

      </div>

    )
  }
}
export default App;









/*
import SearchInput from './components/SearchInput'
import './App.css'

const api = 'https://ghibliapi.herokuapp.com/films'

function App() {
  const [infos, setInfo] = useState({})
  const [text, setText] = useState('' )

  

  useEffect(() => {
    if (text) {
      setInfo({});

      fetch(    
       // `${api}title?filter[text]=${text}&page[limit]=12`
       `${api}`
      )

      .then((response) => response.json())
      .then(result => {
      
        setInfo(result);
      });

    }
  }, [text]);

  
  return (
    <div className="App">
      
      <h4 className='cabecalho'>Filmes</h4>
      <div className="card">
        <SearchInput
        value={text}
        onChange={(search) => setText(search)}
        />
<div>
 {infos.map(
  info => <div key={info.id}> {info.id} - {info.title} </div>
 )}
</div>
        
        </div>
      </div>
     
   
  )
}

export default App
*/