'use client' // Indica que este é um componente do lado do cliente

export default function LoginModal() {
  const handleLogin = async () => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'user', password: 'password' }),
    })

    const data = await response.json()

    if (data.success) {
      localStorage.setItem('authToken', data.token) // Armazena o token no localStorage
      alert('Login successful!')
    } else {
      alert('Login failed!')
    }
  }

  return (
    <div
      style={{
        background: '#1212',
        border: '1px solid #444',
        color: '#e2e2e2',
        width: '300px',
        height: '300px',
      }}
    >
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
