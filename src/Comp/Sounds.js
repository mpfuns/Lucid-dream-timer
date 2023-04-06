export default function Sounds(props) {
  function handletime(event) {
    props.handle(event.target.value, event.target.id);
  }

  return (
    <div id="sounds">
      <h3>Sounds:</h3>
      <div className="radio">
        <input
          className="radio__input"
          type="radio"
          value="beep"
          name="soundChoices"
          id="beep-1"
          onClick={handletime}
        />
        <label className="radio__label" htmlFor="beep-1">
          Beep
        </label>
        <input
          className="radio__input"
          type="radio"
          value="sub1"
          name="soundChoices"
          id="sub-drive-1"
          onClick={handletime}
        />
        <label className="radio__label" htmlFor="sub-drive-1">
          Sub Drive 1
        </label>
        <input
          className="radio__input"
          type="radio"
          value="sub2"
          name="soundChoices"
          id="sub-drive-2"
          onClick={handletime}
        />
        <label className="radio__label" htmlFor="sub-drive-2">
          Sub Drive 2
        </label>
      </div>
      <p>
        {props.missItem ? "Please pick your sound and how many times" : ""}{" "}
      </p>
    </div>
  );
}
