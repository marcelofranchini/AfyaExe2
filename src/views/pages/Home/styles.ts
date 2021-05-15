import styled from 'styled-components'

export const Container = styled.div`
    
        margin: 0 auto;
        width: 80%;

        .signup-section{
                display:flex;
                height:calc(100vh - 100px);

                .signup-text{
                      flex:1;
                      background:blue;
               }
                .signup-form{
                      flex:1;
                      background:green;
               }
        }

        .cta-section{
                display:flex;
                height:calc(100vh - 100px);
                background:purple;

        }

        
    
`