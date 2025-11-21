"use client";

import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function PacienteHome() {
  const router = useRouter();

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
        background: "linear-gradient(135deg, #e8f5e9, #e3f2fd)",
      }}
    >
      <div
        style={{
          maxWidth: 880,
          margin: "0 auto",
          background: "white",
          borderRadius: 16,
          padding: "1.8rem",
          boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <h1 style={{ fontSize: "2rem", margin: 0 }}>
            Hola, esta es tu Casa mIA
          </h1>

          <button
            onClick={logout}
            style={{
              background: "#e74c3c",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: 999,
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            Cerrar sesión
          </button>
        </div>

        <p style={{ marginBottom: "1.5rem", color: "#555" }}>
          Aquí verás tus ejercicios diarios y tus logros en la rehabilitación.
        </p>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Rutina de hoy
          </h2>
          <div
            style={{
              padding: "1rem",
              borderRadius: 12,
              border: "1px solid #e0e0e0",
              background: "#fafafa",
            }}
          >
            <p style={{ margin: 0, color: "#777" }}>
              Aquí listaremos los ejercicios con video y feedback automático de IA.
            </p>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Tus logros
          </h2>
          <div
            style={{
              padding: "1rem",
              borderRadius: 12,
              border: "1px solid #bbdefb",
              background: "#e3f2fd",
            }}
          >
            <p style={{ margin: 0, color: "#1565c0" }}>
              Aquí verás medallas por adherencia, progresos en autonomía y metas cumplidas.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
