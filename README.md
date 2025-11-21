# 🏠 Casa mIA — MVP Hackatón Teletón 2025
**Rehabilitación inteligente en el hogar con IA + Terapeutas + Familiares + Pacientes**

Casa mIA es un prototipo funcional (MVP) desarrollado para la Hackatón Teletón.  
Permite que terapeutas ocupacionales administren el proceso de rehabilitación de pacientes, el paciente realice ejercicios guiados desde su hogar, y sus familiares puedan ver el progreso y recibir alertas importantes.

El sistema está construido con:
- **Next.js 16**
- **Supabase (Auth + DB)**
- **TypeScript**
- **Tailwind (opcional)**
- Arquitectura escalable hacia IA para corrección de ejercicios por cámara.

---

## 🚀 Objetivo del MVP
Crear una plataforma funcional que:

### 👩‍⚕️ Terapeutas
- Gestionen pacientes.
- Creen planes de rehabilitación.
- Envíen alertas a familiares.
- Revisen el progreso diario.

### 👨‍👩‍👦 Familiares
- Vean avances reales del paciente.
- Reciban alertas del terapeuta.
- Confirmar estado de alertas.

### 🧑 Pacientes
- Realicen ejercicios asignados.
- Marquen ejercicios completados.
- Vean progreso diario/semanal.

---

# 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|-----------|-----|
| **Next.js 16** | Frontend y enrutamiento por roles |
| **TypeScript** | Tipado seguro |
| **Supabase Auth** | Registro / Login / Roles (terapeuta, familiar, paciente) |
| **Supabase Database** | Perfiles, ejercicios, sesiones, alertas |
| **Supabase Row Level Security** | Seguridad por usuario |
| **React Hooks** | Manejo de estado |
| **GitHub** | Control de versiones |

---

# 📁 Estructura del proyecto

src/
├── app/
│ ├── login/
│ ├── register/
│ ├── terapeuta/
│ │ ├── home/
│ │ └── create-patient/
│ ├── familiar/
│ │ └── home/
│ ├── paciente/
│ └── home/
│
├── lib/
│ └── supabaseClient.ts
│
└── styles, tests, etc.


---

# 🔐 Variables de entorno (obligatorias)

Crear un archivo **.env.local**:

NEXT_PUBLIC_SUPABASE_URL=TU_URL_AQUI
NEXT_PUBLIC_SUPABASE_ANON_KEY=TU_ANON_KEY_AQUI


Obtienes estos valores desde:

Supabase → Configuración del proyecto → API

---

# ▶️ Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/cabarcn/casamia-web.git
cd casamia-web

2. Instalar dependencias
npm install

3. Ejecutar en modo desarrollo
npm run dev

El proyecto cargará en:

👉 http://localhost:3000

👤 Roles del sistema

El usuario puede registrarse como:

Rol	Descripción
terapeuta	Acceso completo a gestión de pacientes
familiar	Visualiza progreso + alertas
paciente	Ve y completa ejercicios asignados

Base de Datos (Supabase)

Tablas implementadas:

1. profiles
Campo	Tipo	Descripción
id	uuid	PK / referencia a auth.users
full_name	text	Nombre del usuario
role	text	‘terapist’, ‘family’, ‘patient’, ‘admin’
created_at	timestamptz	Fecha de creación
2. Próximas tablas:

patients

plans

sessions

alerts

🔥 Roadmap del Proyecto (MVP → Producción)
✅ Implementado

Login / Registro

Roles con redirección automática

Perfil vinculando auth.users → profiles

Pantallas base para terapeuta, familiar y paciente

Cierre de sesión

Supabase configurado con RLS y políticas seguras

CRUD básico de pacientes

🚀 Próximas etapas

Planes de ejercicios personalizados

Sesiones diarias (ejercicios realizados)

Alertas terapeuta → familiar

Dashboard con gráficos

Integración de IA:

Corrección de movimiento

Detección de rango articular

Seguimiento postural por cámara

🧡 Teletón nunca dejará de ayudar

Gracias por apoyar la innovación en accesibilidad y rehabilitación.