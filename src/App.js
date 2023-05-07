import React, { useEffect, useRef } from "react";
import "./styles.css";
import Timer from "./Comp/Timer";
import Controls from "./Comp/Controls";
import Sounds from "./Comp/Sounds";
import Pred from "./Comp/Pred";
import Playsound from "./Comp/Playsound";

//
export default function App() {
  //state for clock
  const [missItem, setMissitem] = React.useState(false);
  const [changeInverval, setChangeInverval] = React.useState(0);
  const [clock, setClock] = React.useState({
    status: "begin",
    timer: "00:00",
    soundtype: "",
    soundtime: "",
    soundid: "",
    silence: false
  });

  const [slot, setSlot] = React.useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0
  });

  //for play sound  on click

  function howManytimes(num) {
    setClock((prev) => {
      return {
        ...prev,
        soundtime: num
      };
    });
  }
  //for sound on click
  function whatSound(music, id) {
    setClock((prev) => {
      return {
        ...prev,
        soundtype: music,
        soundid: id
      };
    });
  }

  // for the timer
  function addMinutes(spot, timeset) {
    if (clock.status !== "begin") {
      return;
    }

    setSlot((pre) => {
      return {
        ...pre,
        [spot]: timeset
      };
    });
  }

  // for pred
  function preset(array) {
    console.log(array);
    return setSlot({
      interval1: array[0],
      interval2: array[1],
      interval3: array[2],
      interval4: array[3],
      interval5: array[4],
      interval6: array[5],
      interval7: array[6],
      interval8: array[7],
      interval9: array[8],
      interval10: array[9],
      interval11: array[10],
      interval12: array[11],
      interval13: array[12],
      interval14: array[13],
      interval15: array[14]
    });
  }

  // silence button
  function silence() {
    let flip = !clock.silence;
    setClock((prev) => {
      return {
        ...prev,
        silence: flip
      };
    });
    document.getElementById("silence").checked = flip;
  }

  //test volume button
  function testVolume() {
    const sound = document.getElementById(clock.soundtype);
    sound.play();
  }

  //start timer button
  // make setInverval and clearInverval
  const funtimer = useRef();
  useEffect(() => {
    return () => {
      clearInterval(funtimer.current);
    };
  }, []);
  useEffect(() => {
    if (clock.status === "counting") {
      funtimer.current = setInterval(() => {
        clearInterval(funtimer.current);
        decrementTime(clock.timer);
      }, 1000);
    } else if (clock.status === "pause") {
      console.log("pause");
      clearInterval(funtimer.current);
    } else if (clock.status === "rest") {
      console.log("rest");
      clearInterval(funtimer.current);
      document.getElementById(clock.soundtime).checked = false;
      document.getElementById(clock.soundid).checked = false;
      setClock({
        status: "begin",
        timer: "00:00",
        soundtype: "",
        soundtime: "",
        soundid: "",
        silence: false
      });
      setChangeInverval(0);
    }
  }, [clock.status, clock.timer]);

  //fix  this one
  function decrementTime(timeString) {
    let timeDisplay = timeString.split(":");
    let minuteDisplay = parseInt(timeDisplay[0], 10);
    let secondDisplay = parseInt(timeDisplay[1], 10);

    secondDisplay -= 1;
    if (secondDisplay === -1) {
      secondDisplay = 59;
      minuteDisplay -= 1;
    }

    if (secondDisplay <= 9) {
      secondDisplay = "0" + secondDisplay;
    }
    if (minuteDisplay <= 9) {
      minuteDisplay = "0" + minuteDisplay;
    }
    let gotime = minuteDisplay + ":" + secondDisplay;
    setClock((prev) => {
      return {
        ...prev,
        timer: gotime
      };
    });
    if (clock.timer === "00:00") {
      goingUpInter();
      silenceOrNah();
    }
  }

  // play
  function silenceOrNah() {
    if (clock.silence === true) {
      return console.log("silence");
    } else {
      alarmsound(clock.soundtime);
    }
  }

  function alarmsound(tietok) {
    let count = 0;
    let sound = document.getElementById(clock.soundtype);
    switch (tietok) {
      case "one":
        sound.play();
        break;
      case "three":
        sound.play();
        sound.onended = function () {
          count = count + 1;
          if (count <= 2) {
            sound.play();
          }
          if (count === 2) {
            return;
          }
        };

        break;
      case "nine":
        sound.play();
        sound.onended = function () {
          count = count + 1;
          if (count <= 8) {
            sound.play();
          }
          if (count === 8) {
            return;
          }
        };
        break;
      default:
        console.log(
          `Something went wrong  type of sound: ${clock.soundtype} how many times:${clock.soundtime}`
        );
    }
  }

  //breakdown
  function goingUpInter() {
    let addNewInter = changeInverval + 1;
    setChangeInverval(addNewInter);
    let newNameInter = `interval${addNewInter}`;
    return newTimeOfInter(newNameInter);
  }
  function restInter() {
    let inter1 = changeInverval;
    setChangeInverval(inter1);
    let newNameInter = `interval${inter1}`;
    return newTimeOfInter(newNameInter);
  }

  function newTimeOfInter(title) {
    let piece = slot.find((piece) => piece === title);

    if (piece === 0) {
      return restInter();
    }

    let string = piece < 10 ? `0${piece}:00` : `${piece}:00`;

    setClock((prev) => {
      return {
        ...prev,
        timer: string,
        status: "counting"
      };
    });
  }

  //change status for  button
  function playtimer() {
    if (clock.soundtime === "" || clock.soundtype === "") {
      setMissitem(!missItem);
    } else if (clock.status === "begin") {
      goingUpInter();

      return setMissitem(false);
    } else if (clock.status === "counting") {
      return setClock((prev) => {
        return {
          ...prev,
          status: "pause"
        };
      });
    } else if (clock.status === "pause") {
      return setClock((prev) => {
        return {
          ...prev,
          timer: prev.timer,
          status: "counting"
        };
      });
    }
  }
  function stopRest() {
    setClock((prev) => {
      return {
        ...prev,
        status: "rest"
      };
    });
  }

  return (
    <div className="App">
      <h1 id="title">Lucid Dream Flash Timer</h1>
      <Timer handle={addMinutes} slot={slot} />
      <Controls
        clock={clock}
        changeInverval={changeInverval}
        silence={silence}
        stopRest={stopRest}
        testVolume={testVolume}
        playtimer={playtimer}
      />
      <Sounds handle={whatSound} missItem={missItem} />
      <Pred handle={preset} />
      <Playsound handle={howManytimes} />
    </div>
  );
}
