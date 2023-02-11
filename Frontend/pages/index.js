import styles from '../styles/Home.module.css'
import * as React from 'react';
import { useRef, useEffect, useState } from 'react'
import { createGame, addToken } from './game'
import render from './render'
import { PlayerToken, RectToken } from './tokens'

export default function Home() {
  const canvasRef = useRef(null);
  const [game, setGame] = useState(createGame());
  useEffect(() => {
    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    // getContext: CanvasRenderingContext2D
    if (canvasRef.current.getContext) {
      const context = canvasRef.current.getContext("2d");
      context.scale(dpr, dpr);
      render(game, context);
    }
    else {
      console.log("Context not provided.");
    }
  }, [game, setGame])

  const createPlayerToken = () => {
    const token = PlayerToken(2, 2, 1, null, "#333")
    setGame({ ...game, tokens: [...game.tokens, token] })
  }
  const createRectToken = () => {
    const token = RectToken(3, 3, 2, 1, null, "#333")
    setGame({ ...game, tokens: [...game.tokens, token] })
  }
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>onTable - RPG Plataform</h1>
        <canvas className={styles.grid} ref={canvasRef} >
          Canvas not provided
        </canvas>
        <button onClick={() => createPlayerToken()}>Add token</button>
        <button onClick={() => createRectToken()}>Add rect</button>
      </div>
    </>
  )
}
