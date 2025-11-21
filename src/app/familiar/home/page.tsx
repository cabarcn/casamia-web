"use client";

import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function FamiliarHome() {
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
        background: "linear-gradient(135deg, #fce4ec, #e3f2fd)",
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
            Vista familia – Casa mIA
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
          Aquí podrás ver el progreso de tu familiar y las recomendaciones del equipo clínico.
        </p>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Progreso de la rehabilitación
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
              Aquí mostraremos gráficos de adherencia y logros funcionales (MVP conectado a IA).
            </p>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Recomendaciones para el hogar
          </h2>
          <ul style={{ paddingLeft: "1.2rem", color: "#555" }}>
            <li>Recordar realizar la rutina de hoy.</li>
            <li>Revisar los ejercicios marcados como prioritarios.</li>
            <li>Registrar cualquier dolor o molestia después de la sesión.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
