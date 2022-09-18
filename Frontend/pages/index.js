import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useRef, useEffect } from 'react';

export default function Home() {
  const canvas = useRef();

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    context.clearRect(0, 0, context.width, context.height);
    context.translate(0.5, 0.5);
    const height = canvas.current.offsetHeight;
    const width = canvas.current.offsetWidth;
    const h = 20;
    const w = 20;
    context.lineWidth = 0.5;
    for (let i = 1; i < 10; i++) {
      // Horizontal
      context.moveTo(0, h * i);
      context.lineTo(width, h * i);
    }

    for (let i = 1; i < 20; i++) {
      // Vertical
      context.moveTo(w * i, 0);
      context.lineTo(w * i, height);
    }

    context.stroke();
  })

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>onTable - RPG Plataform</h1>
        <canvas className={styles.board} ref={canvas} >

        </canvas>
      </div>
    </>
  )
}
