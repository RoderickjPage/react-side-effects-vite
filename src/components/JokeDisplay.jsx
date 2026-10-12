// JokeDisplay.jsx - shows "Loading..." or the joke in a single <p>.
function JokeDisplay({ joke, loading }) {
  return <p>{loading ? 'Loading...' : joke}</p>
}

export default JokeDisplay