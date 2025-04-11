// import { cookies } from 'next/headers'
// // import { NextResponse } from 'next/server'

// export async function OPTIONS() {
//   return new Response(null, {
//     status: 204,
//     headers: {
//       'Access-Control-Allow-Origin': 'http://localhost:5173', // Ou defina 'http://localhost:5173' para maior segurança
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//       'Access-Control-Allow-Credentials': 'true',
//     },
//   })
// }

// export async function GET() {
//   const cookieStore = await cookies()
//   const username = cookieStore.get('username')?.value

//   // console.log('username:', username)

//   if (!username) {
//     return new Response(
//       JSON.stringify({ success: false, message: 'Usuário não autenticado' }),
//       {
//         status: 401,
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

//   return new Response(JSON.stringify({ success: true, username }), {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': 'http://localhost:5173',
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//       'Access-Control-Allow-Credentials': 'true',
//     },
//   })
// }

import { cookies } from 'next/headers'
// import { NextResponse } from 'next/server'

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*', // Ou defina 'http://localhost:5173' para maior segurança
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  })
}

export async function GET() {
  const cookieStore = await cookies()
  const username = cookieStore.get('username')?.value

  // console.log('username:', username)

  if (!username) {
    return new Response(
      JSON.stringify({ success: false, message: 'Usuário não autenticado' }),
      {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Allow-Credentials': 'true',
        },
      },
    )
  }

  return new Response(JSON.stringify({ success: true, username }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  })
}
