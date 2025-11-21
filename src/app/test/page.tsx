'use client';

import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';

export default function TestPage() {
  const [count, setCount] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase.from('patients').select('*');
      if (error) {
        console.error(error);
        setErrorMsg(error.message);
      } else {
        setCount(data?.length ?? 0);
      }
    };
    load();
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Prueba Supabase
      </h1>
      {errorMsg ? (
        <p style={{ color: 'red' }}>Error: {errorMsg}</p>
      ) : (
        <p>Pacientes en la base de datos: {count}</p>
      )}
    </main>
  );
}
