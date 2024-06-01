import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [names, setNames] = useState(['Ade', 'Yemi', 'Bola', 'Ayo'])
  const [player, setPlayer] = useState({name: '', age: '', country: ''})
  const [user, setUser] = useState('');

    const handleIncrement = () => {
      setCount((prev) => prev + 1)
    }
    const handleDecrement = () => {
      setCount((prev) => prev - 1)
    }
    const handleReset = () => {
      setCount(0);
    }
    const handleIncrementBy5 = () => {
      for (let i = 0; i < 5; i++) {
        setCount((prev) => prev + 1)
  
    }
  }


        const handleSubmit = (e) => {
          e.preventDefault()
          setNames(prev => [...prev, user])
         
        }


        const handleInputChange = (e) => {
            // console.log(e.name.target)

            const inputName = e.target.name
            const inputValue = e.target.value
            setPlayer((prev) => ({...prev, [inputName]: inputValue}));
        }

    return (
      <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleIncrementBy5}>increase by 5</button>


      <form onSubmit={handleSubmit}>
        <input type="text"
           value={user} 
           onChange={(e) => setUser(e.target.value)}
         />
        <button type="submit">Add Name</button>
        <button type="reset">Reset Input</button>
      </form>


      {names.map((name, index, arr) => (
        <div key={index}>
          <p>Name:{name}</p>
          <p>Index of {index}</p>
        </div>
      ))}


      <form action="">
        Name:<input onChange={handleInputChange} name='name' type="text" />
        <br />
        Age:<input onChange={handleInputChange} name='age' type="text" />
        <br />
        Country:<input onChange={handleInputChange} name='country' type="text" />

        <button type='submit'>Edit player</button>
      </form>


      <div>
      <h2>Player</h2>
      <p>Name: {player.name}</p>
      <p>Age: {player.age}</p>
      <p>Country: {player.country}</p>
      </div>

      
      </>
    )

}
export default App
