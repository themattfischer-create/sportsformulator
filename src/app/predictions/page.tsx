import { supabase } from "../../lib/supabase";

export default async function PredictionsPage() {
  const { data, error } = await supabase
    .from("predictions")
    .select("*")
    .order("id", { ascending: false })
    .limit(50);

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "28px", marginBottom: 8 }}>Predictions</h1>

      {error ? (
        <p style={{ color: "#b00" }}>Error: {error.message}</p>
      ) : !data || data.length === 0 ? (
        <p>No predictions found in the database yet.</p>
      ) : (
        <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
          {data.map((g: any) => (
            <div
              key={g.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: 10,
                padding: 14,
              }}
            >
              <strong>
                {g.away_team} @ {g.home_team}
              </strong>
              <div style={{ marginTop: 6 }}>
                Predicted: {g.away_score} - {g.home_score}
              </div>
              {"home_win_prob" in g && g.home_win_prob != null ? (
                <div style={{ marginTop: 6, color: "#444" }}>
                  Home win prob: {Math.round(g.home_win_prob * 100)}%
                </div>
              ) : null}
              {g.league ? (
                <div style={{ marginTop: 6, color: "#666" }}>{g.league}</div>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}