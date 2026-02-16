export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        SportsFormulator
      </h1>

      <h2 style={{ fontSize: "20px", color: "#555" }}>
        Today’s Predicted Scores
      </h2>

      <div style={{ marginTop: "30px" }}>
        <div
          style={{
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        >
          <strong>Kansas @ Houston</strong>
          <p>Predicted Score: 72 - 77</p>
          <p>Houston Win Probability: 64%</p>
        </div>

        <div
          style={{
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <strong>Duke @ North Carolina</strong>
          <p>Predicted Score: 74 - 71</p>
          <p>North Carolina Win Probability: 42%</p>
        </div>
      </div>
    </main>
  );
}
