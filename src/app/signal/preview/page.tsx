export default function SignalPreview() {
  return (
    <div style={{
      fontFamily: "Verdana, Geneva, sans-serif",
      background: "#f6f6ef",
      minHeight: "100vh",
      margin: 0,
      padding: "20px 0",
    }}>
      <div style={{ maxWidth: 660, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a
            href="/signal"
            style={{ fontSize: 11, color: "#ff6600", textDecoration: "none", fontWeight: "bold" }}
          >
            ← Subscribe to The Signal
          </a>
          <span style={{ fontSize: 10, color: "#828282" }}>Issue #1 Preview</span>
        </div>
        <iframe
          src="/signal-preview.html"
          style={{
            width: "100%",
            height: "calc(100vh - 80px)",
            border: "1px solid #e0d8ce",
            background: "#fff",
          }}
          title="The Signal — Issue #1 Preview"
        />
      </div>
    </div>
  );
}
