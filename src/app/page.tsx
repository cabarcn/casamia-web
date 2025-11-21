export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#e0f7fa',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Casa mIA</h1>
      <p style={{ fontSize: '1.2rem' }}>
        MVP de rehabilitación inteligente en el hogar.
      </p>
    </main>
  );
}
