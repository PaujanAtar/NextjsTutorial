import Link from "next/link"
import styles from "@/styles/Home.module.css"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const NotFound = () => {
  const router = useRouter()
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (count <= 0) {
      router.push("/")
    }
    const timerId = setTimeout(() => {
      setCount((prevCount) => prevCount - 1)
    }, 1000)

    return () => {
      // Cleanup function to clear the timeout when the component unmounts
      clearTimeout(timerId)
    }
  }, [count])

  return (
    <div className="not-found">
      <h1>Fuck off</h1>
      <h2>You are not supposed to be here</h2>
      <Link href="/" className={styles.btn}>
        back to Homepage in {count}
      </Link>
    </div>
  )
}

export default NotFound
