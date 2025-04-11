'use client'
import { useState } from 'react'
import LoginModal from './components/modal'
import styles from './page.module.css'

export default function Home() {
  const [modal, setModal] = useState(false)
  return (
    <div className={styles.page}>
      <h1>Site Institucional</h1>

      {modal && <LoginModal />}

      <button onClick={() => setModal(true)}>Modal</button>
    </div>
  )
}
