//context
import { useMainContext } from "../../context/MainContext";
function EpisodeList() {
  const { totalEpisodes, setEpisodeID } = useMainContext();

  return (
    <div className="episodes section">
      <ul className="episodes__list">
        <li>
          <label htmlFor="episodes">Pick Episode</label>
          <select
            onChange={(e) => setEpisodeID(e.target.value)}
            className="form-select"
          >
            {/* Listing Episodes */}

            <option value="1">Choose...</option>
            {[...Array(totalEpisodes).keys()].map((x, index) => {
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
