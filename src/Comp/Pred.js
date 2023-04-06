export default function Pred(props) {
  const nap6 = [8, 4, 12, 16, 20, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const nap5 = [4, 4, 12, 20, 40, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const nap4 = [15, 15, 30, 30, 60, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const nap3 = [6, 3, 9, 18, 20, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const nap2 = [60, 30, 60, 15, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <div id="pred">
      <h3>Predefined Timer Setups:</h3>
      <button className="hover-button" onClick={() => props.handle(nap6)}>
        Load Rhythm Nap 6
      </button>
      <button className="hover-button" onClick={() => props.handle(nap5)}>
        Load Rhythm Nap 5
      </button>
      <button className="hover-button" onClick={() => props.handle(nap4)}>
        Load Rhythm Nap 4
      </button>
      <button className="hover-button" onClick={() => props.handle(nap3)}>
        Load Rhythm Nap 3
      </button>
      <button className="hover-button" onClick={() => props.handle(nap2)}>
        Load Rhythm Nap 2
      </button>
      <p>
        When it gets to an interval set zero it will repeat the prevoius
        interval forever.
      </p>
    </div>
  );
}
