import React, { useState } from 'react'

// Define the types for the props (if needed) and state
interface IProps {
  // You can pass additional props if needed
}

interface ILoginState {
  email: string
  password: string
  errorMessage: string
}

const Login: React.FC<IProps> = () => {
  // Define the initial state using useState hook
  const [loginState, setLoginState] = useState<ILoginState>({
    email: '',
    password: '',
    errorMessage: '',
  })

  // Handle input changes for both email and password
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // Validate and handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { email, password } = loginState

    if (!email || !password) {
      setLoginState((prevState) => ({
        ...prevState,
        errorMessage: 'Both fields are required',
      }))
      return
    }

    // Simulate login success/failure
    if (email === 'test@example.com' && password === 'password') {
      setLoginState({
        email: '',
        password: '',
        errorMessage: '',
      })
      alert('Login successful')
    } else {
      setLoginState((prevState) => ({
        ...prevState,
        errorMessage: 'Invalid email or password',
      }))
    }
  }

  return (
    <div>
      <h2>Login</h2>
      {/* <form onSubmit={handleSubmit}> */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={loginState.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={loginState.password}
          onChange={handleInputChange}
        />
      </div>
      {loginState.errorMessage && (
        <p style={{ color: 'red' }}>{loginState.errorMessage}</p>
      )}
      <div>
        <button type="submit">Login</button>
      </div>
      {/* </form> */}
    </div>
  )
}

export default Login
