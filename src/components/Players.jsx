import PlayerList from "./PlayerList";
import useFetch from "./useFetch";

const Players = () => {
  const { data } = useFetch("https://dimba-api.herokuapp.com/players");
  return (
    <div className="container">
      <PlayerList players={data} title="AVAILABLE PLAYERS FOR TRANSFER" />
    </div>
  );
};

export default Players;
