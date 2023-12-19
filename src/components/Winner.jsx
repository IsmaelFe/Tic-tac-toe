import { Square } from './Square'

export function Winner ({ win, reset }) {
  const winnerOrNot = win !== 'tie' ? 'El ganador es:' : ''
  return (
    <div className='winner'>
      <h3>{winnerOrNot}</h3>
      <Square>
        {win}
      </Square>
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}
