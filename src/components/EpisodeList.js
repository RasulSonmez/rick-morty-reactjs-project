import { useMainContext } from "../context/MainContext";
function EpisodeList() {
  const { total, setEpisodeID } = useMainContext();

  return (
    <div className="episodes section">
      <ul className="episodes__list">
        <li>
          <label htmlFor="episodes">Pick Episode</label>
          <select
            onChange={(e) => setEpisodeID(e.target.value)}
            className="form-select"
          >
            <option value="1">Choose...</option>
            {[...Array(total).keys()].map((x, index) => {
              return (
                <option key={index} value={x + 1}>
                  Episode - {x + 1}
                </option>
              );
            })}
          </select>
        </li>
      </ul>
    </div>
  );
}

export default EpisodeList;
