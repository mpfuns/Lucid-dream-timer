export default function Playsound(props) {
  function handletime(event) {
    props.handle(event.target.id);
  }

  return (
    <div id="play">
      <h3> Play Sound:</h3>
      <div className="radio">
        <input
          className="radio__input"
          type="radio"
          value="1"
          name="timeChoices"
          id="one"
          onClick={handletime}
        />
        <label className="radio__label" htmlFor="one">
          One Time
        </label>
        <input
          className="radio__input"
          type="radio"
          value="3"
          name="timeChoices"
          id="three"
          onClick={handletime}
        />
        <label className="radio__label" htmlFor="three">
          Three Times
        </label>
        <input
          className="radio__input"
          type="radio"
          value="9"
          name="timeChoices"
          id="nine"
          onClick={handletime}
        />
        <label className="radio__label" htmlFor="nine">
          Nine Times
        </label>
      </div>

      <p>
        If the timer isn’t waking you up, using “Nine Times” makes it much more
        effective.
      </p>
    </div>
  );
}
