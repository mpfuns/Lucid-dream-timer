export default function Controls(props) {
  return (
    <div id="control">
      <h3>Timer Controls:</h3>
      <button className="hover-button" onClick={props.playtimer}>
        Start/Pause Timer
      </button>
      <button className="hover-button" onClick={props.stopRest}>
        Clear/Reset Timer
      </button>
      <button className="hover-button" onClick={props.testVolume}>
        Test Volume
      </button>
      <div className="radio">
        <input
          className="radio__input"
          type="radio"
          value="silence"
          name="silenceornot"
          id="silence"
          onClick={props.silence}
        />
        <label className="radio__label" htmlFor="silence">
          Silence
        </label>
      </div>
      <div id="clock">
        <p>Interval {props.changeInverval}</p>
        <p>Timer: {props.clock.timer}</p>
      </div>
      <audio id="beep" src="/assets/Beeps.mp3"></audio>
      <audio id="sub1" src="/assets/Sub1s.mp3"></audio>
      <audio id="sub2" src="/assets/Sub2s.mp3"></audio>
    </div>
  );
}
