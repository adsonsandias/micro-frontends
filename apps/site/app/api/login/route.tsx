/* eslint-disable turbo/no-undeclared-env-vars */
// export async function OPTIONS() {
//   return new Response(null, {
//     status: 204,
//     headers: {
//       'Access-Control-Allow-Origin': '*', // Ou defina 'http://localhost:5173' para maior segurança
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//     },
//   })
// }

// export async function POST(request: Request) {
//   const { username, password } = await request.json()

//   // Simulação de autenticação
//   if (username === 'user' && password === 'password') {
//     return new Response(
//       JSON.stringify({ success: true, token: 'fake-jwt-token' }),
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Access-Control-Allow-Origin': '*', // Permite requisições do Vite
//           'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//           'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//         },
//       },
//     )
//   }

//   return new Response(
//     JSON.stringify({ success: false, message: 'Invalid credentials' }),
//     {
//       status: 401,
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//         'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//       },
//     },
//   )
// }

// import { cookies } from 'next/headers'

// export async function OPTIONS() {
//   return new Response(null, {
//     status: 204,
//     headers: {
//       'Access-Control-Allow-Origin': 'http://localhost:5173',
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//       'Access-Control-Allow-Credentials': 'true',
//     },
//   })
// }
// export async function POST(request: Request) {
//   const { username, password } = await request.json()
//   const cookieStore = await cookies()

//   // Simulação de autenticação
//   if (username === 'user' && password === 'password') {
//     // Define o cookie com o nome do usuário
//     cookieStore.set('username', username, {
//       path: '/',
//       httpOnly: true,
//       sameSite: 'strict',
//       secure: process.env.NODE_ENV === 'production',
//       maxAge: 86400, // 1 dia
//     })

//     return new Response(
//       JSON.stringify({ success: true, token: 'fake-jwt-token', username }),
//       {
//         status: 200,
//         headers: {
//           'Content-Type': 'application/json',
//           'Access-Control-Allow-Origin': 'http://localhost:5173',
//           'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//           'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//           'Access-Control-Allow-Credentials': 'true',
//         },
//       },
//     )
//   }

//   return new Response(
//     JSON.stringify({ success: false, message: 'Invalid credentials' }),
//     {
//       status: 401,
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': 'http://localhost:5173',
//         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//         'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//         'Access-Control-Allow-Credentials': 'true',
//       },
//     },
//   )
// }

// import { cookies } from 'next/headers'

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  })
}

export async function POST(request: Request) {
  const { username, password } = await request.json()
  // const cookieStore = cookies()

  // Simulação de autenticação
  if (username === 'user' && password === 'password') {
    // Define o cookie com o nome do usuário
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Access-Control-Allow-Origin', '*')
    headers.append('Access-Control-Allow-Credentials', 'true')
    headers.append(
      'Set-Cookie',
      `username=${encodeURIComponent(username)}; ` +
        `Path=/; ` +
        `HttpOnly; ` +
        `SameSite=Strict; ` +
        `${process.env.NODE_ENV === 'production' ? 'Secure; ' : ''}` +
        `Max-Age=86400`,
    )

    return new Response(
      JSON.stringify({ success: true, token: 'fake-jwt-token', username }),
      {
        status: 200,
        headers,
      },
    )
  }

  return new Response(
    JSON.stringify({ success: false, message: 'Invalid credentials' }),
    {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
    },
  )
}
