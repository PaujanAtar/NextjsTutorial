import styles from "../../styles/Niggas.module.css"
import Link from "next/link"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  console.log(data)
  return {
    props: { niggas: data },
  }
}

const Niggas = ({ niggas }: { niggas: any }) => {
  return (
    <div>
      <h1>All Niggas</h1>
      {niggas?.map((nigga: any) => (
        <Link href={"/niggas/" + nigga.id} key={nigga.id}>
          <div className={styles.single}>
            <h3>{nigga.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Niggas
