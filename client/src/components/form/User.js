import React, { Fragment, useState } from "react";
import Popup from "../popup";
import UsersService from "../../services/usersService";

const Form = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ cpf, setCpf ] = useState('')
    const [ professional, setProfessional] = useState(false)
    const [ trigger, setTrigger ] = useState(false)
    const [ message, setMessage ] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        setTrigger(true)
        try {
            const User = { 
                name: name,
                cpf: cpf,
                email: email,
                isWorking: professional 
            }
            //  * Necessario melhorar implementação de tratamento de dados * 
            // if(userIsEmpty(User)){
            //     setMessage('User is Empty')
            //     throw new Error('Empty')
            // } else if(userExists(User)) {
            //     setMessage('User exists')
            //     throw new Error('User exists')
            // } else {
            //     setMessage('Usuario Registrado')
            //     await UsersService.register(User)
            // }

            await UsersService.register(User)

        } catch (error) {
            console.log(error)
            // if(error.code == "ERR_BAD_REQUEST") 
            //     console.log('Do something')
        }
    }

    const userIsEmpty = (user) => {
        return user === null ? true : false
    }

    const userExists = async (user) => {
        const User = await UsersService.getUser(user.cpf)
        console.log(User.data.cpf)
        console.log(user.cpf)
        console.log(User.data.email)
        console.log(user.email)
        return User.cpf == user.cpf | User.email == user.email ? true : false
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className="register-form">
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

            <Popup trigger={trigger} setTrigger={setTrigger} message={message}/>
        </Fragment>
        
    )
}

export default Form