import styles from '../styles/Home.module.css'
import * as React from 'react';
import { useRef, useEffect } from 'react'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");


  })

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>onTable - RPG Plataform</h1>
        <canvas className={styles.grid} ref={canvasRef} >

        </canvas>
      </div>
    </>
  )
}
