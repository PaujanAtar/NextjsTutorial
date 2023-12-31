import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam,
        sit libero omnis optio unde veniam velit voluptates id at impedit
        incidunt sunt quas illo repellendus eum autem pariatur explicabo.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam,
        sit libero omnis optio unde veniam velit voluptates id at impedit
        incidunt sunt quas illo repellendus eum autem pariatur explicabo.
      </p>
      <Link href="/niggas" className={styles.btn}>
        See Nigga Listing
      </Link>
    </div>
  )
}
