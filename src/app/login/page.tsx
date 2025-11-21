"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: any) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // Obtener perfil desde la tabla profiles
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    // Redirección según rol
    if (profile?.role === "therapist") {
      router.push("/terapeuta/home");
    } else if (profile?.role === "family") {
      router.push("/familiar/home");
    } else {
      router.push("/paciente/home");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f2f2f2",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "10px",
          width: "350px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ fontSize: "1.8rem", textAlign: "center" }}>Iniciar sesión</h1>

        <form onSubmit={handleLogin} style={{ marginTop: "1rem" }}>
          <label>Email</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <label>Contraseña</label>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          {error && (
            <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "0.7rem",
              background: "#3b82f6",
              color: "white",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {loading ? "Ingresando..." : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}
