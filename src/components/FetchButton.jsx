// FetchButton.jsx - the only button. Calls onFetch (from App) when clicked.
function FetchButton({ onFetch }) {
  return <button onClick={onFetch}>Get a New Joke</button>
}

export default FetchButton