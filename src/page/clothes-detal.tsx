import { useParams } from 'react-router-dom';
import Layout from '../layout/layout';

export default function ClothesDetail() {
    const { id } = useParams();

    return (
        <Layout>
            <h1>Clothe {id}</h1>
        </Layout>
    );
}
