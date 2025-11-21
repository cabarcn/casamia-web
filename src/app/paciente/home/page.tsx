'use client';

export default function PacienteHome() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        background: 'linear-gradient(135deg, #e8f5e9, #e3f2fd)',
      }}
    >
      <div
        style={{
          maxWidth: 880,
          margin: '0 auto',
          background: 'white',
          borderRadius: 16,
          padding: '1.8rem',
          boxShadow: '0 18px 45px rgba(0,0,0,0.12)',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          Hola, esta es tu Casa mIA
        </h1>
        <p style={{ marginBottom: '1.5rem', color: '#555' }}>
          Aquí verás tus ejercicios diarios y tus logros en la rehabilitación.
        </p>

        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
            Rutina de hoy
          </h2>
          <div
            style={{
              padding: '1rem',
              borderRadius: 12,
              border: '1px solid #e0e0e0',
              background: '#fafafa',
            }}
          >
            <p style={{ margin: 0, color: '#777' }}>
              Aquí listaremos los ejercicios con video y feedback automático de IA.
            </p>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
            Tus logros
          </h2>
          <div
            style={{
              padding: '1rem',
              borderRadius: 12,
              border: '1px solid #bbdefb',
              background: '#e3f2fd',
            }}
          >
            <p style={{ margin: 0, color: '#1565c0' }}>
              Aquí verás medallas por adherencia, progresos en autonomía y metas cumplidas.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
