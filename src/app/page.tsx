
import Navbar from "@/component/Navbar/Navbar"
import Hero from "@/component/Hero/Hero"
import Business from "@/component/Cards/Business/Business"
import Vision from "@/component/Cards/Vision/Vision"

import "./globals.scss"
import styles from "./page.module.scss"

export default function Home() {
  return (
    <main className={styles.home}>

      <Navbar />
      <Hero />
      <Business />
      <Vision />

    </main>
  )
}
