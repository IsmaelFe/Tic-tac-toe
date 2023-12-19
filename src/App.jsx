import { useState } from 'react'
import { Square } from './components/Square'
import { Winner } from './components/Winner'
import { TURNS, combosWinner } from './constans'

export function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    for (const combo of combosWinner) {
      const [a, b, c] = combo
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        const newWinner = newBoard[a]
        setWinner(newWinner)
      }
    }

    const whitoutWinner = newBoard.every((element) => {
      return element !== null
    })

    if (whitoutWinner) {
      setWinner('tie')
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <section>
      {
      winner
        ? <Winner win={winner} reset={resetGame} />
        : <div>
          <h1>Tic-Tac-Toe</h1>
          <div className='board'>
            {
      board.map((_, i) => (
        <Square key={i} index={i} updateBoard={updateBoard}>
          {board[i]}
        </Square>
      ))
    }
          </div>
          <section className='turns'>
            <Square isSelected={turn === TURNS.X}>
              {TURNS.X}
            </Square>
            <Square isSelected={turn === TURNS.O}>
              {TURNS.O}
            </Square>
          </section>
          <button onClick={() => resetGame()}>Reset</button>
          </div>
    }
    </section>
  )
}
