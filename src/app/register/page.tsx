'use client';

import { FormEvent, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState<'family' | 'therapist'>('family');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      // 1) Crear usuario en Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setErrorMsg(error.message);
        setLoading(false);
        return;
      }

      const user = data.user;

      if (!user) {
        setErrorMsg('No se pudo obtener el usuario después del registro.');
        setLoading(false);
        return;
      }

      // 2) Crear perfil vinculado al usuario
      const { error: profileError } = await supabase.from('profiles').insert({
        id: user.id,
        full_name: fullName,
        role: role,
      });

      if (profileError) {
        console.error(profileError);
        setErrorMsg('El usuario se creó, pero hubo un problema al guardar el perfil.');
        setLoading(false);
        return;
      }

      setSuccessMsg('Cuenta creada correctamente. Redirigiendo al inicio...');
      setTimeout(() => {
        router.push('/'); // luego lo cambiaremos para ir al dashboard según rol
      }, 1500);
    } catch (err: any) {
      console.error(err);
      setErrorMsg('Ocurrió un error inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #e0f7fa, #e8eaf6)',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 420,
          padding: 32,
          borderRadius: 16,
          background: 'white',
          boxShadow: '0 18px 45px rgba(0,0,0,0.15)',
        }}
      >
        <h1 style={{ fontSize: '1.8rem', marginBottom: 8, textAlign: 'center' }}>
          Crear cuenta en Casa mIA
        </h1>
        <p style={{ fontSize: '0.95rem', marginBottom: 24, textAlign: 'center' }}>
          Registra a un familiar o terapeuta para comenzar la rehabilitación en el hogar.
        </p>

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: 4 }}>
            Nombre completo
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 10px',
              marginBottom: 12,
              borderRadius: 8,
              border: '1px solid #ccc',
            }}
          />

          <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: 4 }}>
            Rol
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as 'family' | 'therapist')}
            style={{
              width: '100%',
              padding: '8px 10px',
              marginBottom: 12,
              borderRadius: 8,
              border: '1px solid #ccc',
            }}
          >
            <option value="family">Familiar / Cuidador</option>
            <option value="therapist">Terapeuta ocupacional</option>
            <option value="patient">Paciente</option>
          </select>

          <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: 4 }}>
            Correo electrónico
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 10px',
              marginBottom: 12,
              borderRadius: 8,
              border: '1px solid #ccc',
            }}
          />

          <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: 4 }}>
            Contraseña
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 10px',
              marginBottom: 16,
              borderRadius: 8,
              border: '1px solid #ccc',
            }}
          />

          {errorMsg && (
            <p style={{ color: 'red', fontSize: '0.85rem', marginBottom: 8 }}>{errorMsg}</p>
          )}
          {successMsg && (
            <p style={{ color: 'green', fontSize: '0.85rem', marginBottom: 8 }}>{successMsg}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: 999,
              border: 'none',
              background: '#5c6bc0',
              color: 'white',
              fontWeight: 600,
              cursor: loading ? 'default' : 'pointer',
              opacity: loading ? 0.7 : 1,
              marginBottom: 8,
            }}
          >
            {loading ? 'Creando cuenta...' : 'Crear cuenta'}
          </button>

          <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: 8 }}>
            ¿Ya tienes cuenta? Próximamente agregaremos el inicio de sesión.
          </p>
        </form>
      </div>
    </main>
  );
}
