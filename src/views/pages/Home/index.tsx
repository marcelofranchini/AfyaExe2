import React from 'react';
import Footer2 from '../../../components/Footer';
import FormSignIn from '../../../components/Form'
import Nav from '../../../components/Nav'
import { Container } from './styles'
const Home: React.FC = () => {
    return (
        <>
            <Nav />
            <Container>
                <section className="signup-section">
                    <div className="signup-text">
                        Textos
                        </div>
                    <div className="signup-form">
                        <FormSignIn />
                    </div>
                </section>
                <section className="cta-section">
                    <div>Cta</div>

                </section>

            </Container>
            <Footer2 />
        </>
    );
}

export default Home;