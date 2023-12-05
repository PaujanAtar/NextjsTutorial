export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  // map data to an array of path objects with params (id)
  const paths = data.map((nigga: any) => {
    return {
      params: { id: nigga.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
  const data = await res.json()

  return {
    props: { nigga: data },
  }
}

const Details = ({ nigga }: { nigga: any }) => {
  return (
    <div>
      <h1>{nigga.name}</h1>
      <p>{nigga.email}</p>
      <p>{nigga.website}</p>
      <p>{nigga.address.city}</p>
    </div>
  )
}

export default Details
