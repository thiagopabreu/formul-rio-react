import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState('')
    const [ email, setEmail ] = useState('')
    const [ cpf, setCpf ] = useState('')
    const [ professional, setProfessional] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({ name: name, cpf: cpf, email: email, professional: professional })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                <input type="name" value={name} name="name" onChange={e => setName(e.target.value)} placeholder="Seu nome aqui"></input>
            </label>
            <br/>
            <label>
                CPF: 
                <input type="text" value={cpf} name="cpf" onChange={e => setCpf(e.target.value)} placeholder="000.000.000-00"></input>
            </label>
            <br/>
            <label>
                E-mail: 
                <input type="email" value={email} name="email" onChange={e => setEmail(e.target.value)} placeholder="exemplo@exemplo.com.br"></input>
            </label>
            <br/>
            <label>
                Trabalha na área? <br/>
                <input type="radio" value={true} name="professional" onChange={ e => setProfessional(e.target.value)}/> Sim
                <input type="radio" value={false} name="professional" onChange={ e => setProfessional(e.target.value)}/> Não
            </label>
            <br/>
            <input type="submit" value="enviar"></input>
        </form>
    )
}

export default Form