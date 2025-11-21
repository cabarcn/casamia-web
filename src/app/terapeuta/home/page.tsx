"use client";

import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function TerapeutaHome() {
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
        background: "linear-gradient(135deg, #e0f7fa, #e8eaf6)",
      }}
    >
      <div
        style={{
          maxWidth: 960,
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
            Panel terapeuta – Casa mIA
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
          Aquí verás a tus pacientes, sus rutinas y alertas clínicas en tiempo real.
        </p>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Próximos pacientes para hoy
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
              Aún no hay pacientes asignados. En la hackathon mostraremos esta lista conectada
              a Supabase.
            </p>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Alertas clínicas
          </h2>
          <div
            style={{
              padding: "1rem",
              borderRadius: 12,
              border: "1px solid #ffe0b2",
              background: "#fff8e1",
            }}
          >
            <p style={{ margin: 0, color: "#8d6e63" }}>
              Aquí aparecerán alertas como baja adherencia, dolor reportado o caídas.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
