import '../scss/score.scss'

type ScoreProps = {
  moves: number
  bestScore: number
}

function Score(props:ScoreProps) {

  return (
    <div className="score-container">
      <div className="score">
        <div>
          <span>Moves:</span> {props.moves}
        </div>
        {localStorage.getItem('bestScore') && (
          <div>
            <span>Best score:</span> {props.bestScore}
          </div>
        )}
      </div>
      <div>
        <button onClick={() => {window.location.reload()}}>
          RESTART
        </button>
      </div>
    </div>
  )
}

export default Score