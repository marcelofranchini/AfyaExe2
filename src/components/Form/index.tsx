import React, { useState, useCallback, FormEvent } from 'react';
import { toast } from 'react-toastify'

import { CardContent } from './styles';

import api from '../../services/api'
import { useHistory } from 'react-router-dom'

interface IformPostData {
    nome: string;
    login: string;
    cpf: string;
    senha: string;
}

const Form: React.FC = () => {

    const [formDataContent, setFormDataContent] = useState<IformPostData>({} as IformPostData)
    const [isload, setIsLoad] = useState<boolean>(false)

    const history = useHistory()

    const postSignUpData = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoad(true)
        api.post('usuarios', formDataContent).then(res => {
            toast.success('cadastro realizado com sucesso')

            setTimeout(() => {
                history.push('./login')
            }, 1500)
        }).catch(err => {
            toast.error("Erro: Login Não realizado")
        }).finally(() => setIsLoad(false))

    }, [formDataContent, isload, history])



    return (
        <>
            {
                isload ?
                    (

                        <CardContent>
                            < p > Carregando ...</p >
                        </CardContent >
                    )
                    :
                    (
                        <CardContent>
                            <h3>Crie sua Conta</h3>
                            <form onSubmit={postSignUpData} >
                                <input type="text" placeholder='Seu nome' onChange={e => setFormDataContent({ ...formDataContent, nome: e.target.value })} />
                                <input type="text" placeholder='username' onChange={e => setFormDataContent({ ...formDataContent, login: e.target.value })} />
                                <input type="text" placeholder='cpf' onChange={e => setFormDataContent({ ...formDataContent, cpf: e.target.value })} />
                                <input type="password" placeholder='Senha' onChange={e => setFormDataContent({ ...formDataContent, senha: e.target.value })} />
                                <button type='submit'>
                                    Enviar
                </button>
                            </form>
                        </CardContent>
                    )
            }
        </>
    );
}

export default Form;