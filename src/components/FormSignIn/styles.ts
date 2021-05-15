import styled from 'styled-components'

export const FormSignInContent = styled.div`
    display:flex;
    background:#e2e2ee;
    border-radius:12px;
    min-height:550px;
    justify-content:center;
    align-items:center;
    width:400px;
       & form{
        display:grid;

        & input{
            width:100%auto;
            height:18px;
        }

        &:focus{
            border:1px solid red
        }

        & button{
            margin:  10px 0 10px 0;
            background: #F70054;
            border: none;
            height:30px;
            color: #fff;
            border-radius:12px;
            text-transform:uppercase;
        }

    }
`