export default function Home() {
  return (
    <main style={{
      fontFamily: "Prompt, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "#111",
      color: "#f7f7f7",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#FF87D6" }}>
        Soulkey
      </h1>
      <p style={{ fontSize: "1.25rem", maxWidth: "600px" }}>
        แผนที่ชีวิตที่เขียนด้วยมือคุณเอง — จักรวาลที่ไม่มีใคร copy ได้ ✨
      </p>
    </main>
  )
}
