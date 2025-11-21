'use server'

import { supabase } from '@/lib/supabaseClient'

// Crear paciente
export async function createPatient(data: {
  full_name: string
  birthdate?: string
  diagnostic?: string
  therapist_id: string
}) {
  const { full_name, birthdate, diagnostic, therapist_id } = data

  // 1. Crear perfil del paciente
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .insert({
      full_name,
      role: 'patient'
    })
    .select()
    .single()

  if (profileError) {
    console.error('Error creando perfil:', profileError)
    return { error: 'No se pudo crear el perfil del paciente' }
  }

  // 2. Registrar datos en tabla patients
  const { error: patientError } = await supabase.from('patients').insert({
    id: profile.id, // mismo ID que profile
    therapist_id,
    full_name,
    birthdate,
    diagnostic
  })

  if (patientError) {
    console.error('Error creando paciente:', patientError)
    return { error: 'No se pudo crear el paciente' }
  }

  return { success: true, profileId: profile.id }
}
