import React from "react";
export default function Timer(props) {
  const nums = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15"
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
          value={props.slot.inter}
          className="interval"
          onChange={() => intervalHandle(inter,props.slot.inter )}
        />
        <label htmlFor={inter}> Minutes</label>
      </div>
    );
  });

  function intervalHandle(id, num) {
   console.log(num)
    const min =  num
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
