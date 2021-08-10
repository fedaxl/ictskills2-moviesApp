import React, {useRef, useState} from 'react'
import { Container, Card, Form, Button, Alert  } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to log in')
        }
        setLoading(false)
    }

    return (
        <>
            <Container align="center" style={{minHeight: '100vh'}}>
                <div style={{maxWidth: '400px'}}>
                    <Card >
                        <Card.Body >
                            <h2>Log In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" id="email" align="left">
                                    <Form.Label column sm="3">Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group className="mb-3" id="password" align="left">
                                    <Form.Label column sm="3">Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button disabled={loading} variant="primary" type="submit" on>
                                    Log In
                                </Button>
                            </Form>
                            <div align="center">
                              <Link to="/forgot-password">Forgot Password?</Link>
                            </div>
                        </Card.Body>
                    </Card>   
                    <div align="center">
                        Need an account? <Link to="/signup">Sign Up! </Link>
                    </div>
                </div>
            </Container>
        </>
    )
}