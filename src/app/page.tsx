import { supabase } from "../lib/supabase";

export default async function Home() {
  const today = new Date().toISOString().split("T")[0];

  const { data, error } = await supabase
    .from("predictions")
    .select("*")
    .eq("game_date", today);

  if (error) {
    return <div>Error loading predictions.</div>;
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        SportsFormulator
      </h1>

      <h2 style={{ fontSize: "20px", color: "#555" }}>
        Today’s Predicted Scores
      </h2>

      <div style={{ marginTop: "30px" }}>
        {data && data.length > 0 ? (
          data.map((game: any) => (
            <div
              key={game.id}
              style={{
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            >
              <strong>
                {game.away_team} @ {game.home_team}
              </strong>
              <p>
                Predicted Score: {game.away_score} - {game.home_score}
              </p>
              <p>
                {game.home_team} Win Probability:{" "}
                {Math.round(game.home_win_prob * 100)}%
              </p>
            </div>
          ))
        ) : (
          <p>No predictions available for today.</p>
        )}
      </div>
    </main>
  );
}