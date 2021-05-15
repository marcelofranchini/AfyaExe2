import styled from 'styled-components'

export const CardContent = styled.div`
    border-radius:22px;
    background:#e2e2e2;
    padding:22px;
  

    & form{
        display:grid;

        & input{
            width:100%auto;
            height:18px;
        }

        & button{
            margin:  10px 0 10px 0;
            background: #F70054;
            border: none;
            height:30px;
            color: #fff;
            text-transform:uppercase;
                border-radius:12px;

        }

    }

`