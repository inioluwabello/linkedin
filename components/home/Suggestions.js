// TO DO: use useSWR to load suggestions from API
import suggestions from "../../data/suggestions";
import SuggestionItems from "./SuggestionItems";

const Suggestions = () => {
  return (
    <div className="card mt-3">
      <div className="card-content">
        <div className="fl">
          <h6 className="text-lg bold">Add to your feed</h6>
        </div>
        {suggestions.map((item, i) => {
          return <SuggestionItems key={item.id} i={i} suggestion={item} />;
        })}
      </div>
    </div>
  );
};

export default Suggestions;
