import { CompletedChallenges } from "../components/CompletedChallengs";
import { Countdown } from "../components/Coundown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/profile";

import styles from '../styles/pages/Home.module.css'

import Head from 'next/head'
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}