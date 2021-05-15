import React, { useState, useCallback, FormEvent } from 'react';
import { toast } from 'react-toastify'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

import { FormSignInContent } from './styles';

interface IUserLogin {
    usuario: string;
    senha: string;
}

const FormSignIn: React.FC = () => {
    const [formDataContent, setFormDataContent] = useState<IUserLogin>({} as IUserLogin)
    const [isload, setIsLoad] = useState<boolean>(false)

    const history = useHistory()

    const loginSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoad(true)
        api.post('login', formDataContent).then(res => {
            // toast.success('Login efetuado com sucesso !!', {
            //     onClose: () => history.push('/painel'),
            // });

            localStorage.setItem('@tokenAfyaApp', res.data.token)
            toast.success('Login Realizado')
            history.push('/painel')
        }).catch(err => {
            toast.error('Login não realizado')
        }).finally(() => {
            setIsLoad(false)
        })

    }, [formDataContent, history])
    return (
        <FormSignInContent>
            { isload ?
                <p>Carregando</p>
                :
                <form onSubmit={loginSubmit}>
                    <input type="text" placeholder='username'
                        onChange={e => { setFormDataContent({ ...formDataContent, usuario: e.target.value }) }}
                    />
                    <input type="password" placeholder='Senha'
                        onChange={e => { setFormDataContent({ ...formDataContent, senha: e.target.value }) }}
                    />
                    <button type='submit'>
                        Logar
                </button>
                </form>
            }
        </FormSignInContent>
    );
}

export default FormSignIn;