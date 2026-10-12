
import { useState, useEffect, useCallback } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

const JOKE_URL = 'https://v2.jokeapi.dev/joke/Programming?type=single'

function App() {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchJoke = useCallback(() => {
    setLoading(true)

    fetch(JOKE_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        return response.json()
      })
      .then((data) => {
        if (data.error) {
          throw new Error('Failed to fetch joke')
        }

        setJoke(data.joke)
      })
      .catch(() => {
        setJoke('Could not load a joke. Please try again.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetchJoke()
  }, [fetchJoke])

  return (
    <div className="app">
      <JokeDisplay joke={joke} loading={loading} />
      <FetchButton onFetch={fetchJoke} />
    </div>
  )
}

export default App
