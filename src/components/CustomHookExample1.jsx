import useFetch from '../hooks/useFetch'

//custom hook- use fetch hook to make http requests

function CustomHookExample1() {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  )
  console.log(data)
  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  )
}

export default CustomHookExample1
