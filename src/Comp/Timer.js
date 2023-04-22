import React from "react";
export default function Timer(props) {
  const nums = [
    "interval1",
    "interval2",
    "interval3",
    "interval4",
    "interval5",
    "interval6",
    "interval7",
    "interval8",
    "interval9",
    "interval10",
    "interval11",
    "interval12",
    "interval13",
    "interval14",
    "interval15"
  ];

  const sets = nums.map((inter) => {
    return (
      <div className="intervals-Group">
        <label htmlFor={inter}> Interval {inter} </label>
        <input
          type="number"
          placeholder="0"
          key={inter}
          id={inter}
          value={`${props.slot}.${inter}`}
          className="interval"
          onChange={() => intervalHandle(inter)}
        />
        <label htmlFor={inter}> Minutes</label>
      </div>
    );
  });

  function intervalHandle(id, event) {
    const min = event.target.value;
    const intervalName = `interval${id}`;
    if (min < 0) {
      return;
    }
    return props.handle(intervalName, min);
  }

  return (
    <div id="timer">
      <h3>Timer:</h3>
      {sets}
    </div>
  );
}
