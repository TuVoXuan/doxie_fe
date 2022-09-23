import Container from '../components/Container/Container';
import Title from '../components/title/Title';
import Layout from '../layout/layout';

export default function HomePage() {
    return (
        <Layout background="gray">
            <h1>Home page Home page</h1>
            <Container>
                <Title mainTitle="Shopping cart" subTitle="tshirt" titleBold={true} />
            </Container>
        </Layout>
    );
}
