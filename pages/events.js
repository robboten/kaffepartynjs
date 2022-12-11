import Layout from '../components/Layout/layout';
import EventLayout from '../components/event-layout';
//import { payload } from './api/lorems';

// export async function getStaticProps() {
//     const res = await fetch(`http://localhost:3000/api/lorem`)
//     console.log(res)
//     const json = await res.json()

//     return {
//         props: {
//             paragraph: json.text,
//         },
//         revalidate: 1000000
//     }
// }

// export async function getStaticProps() {
//     const res = await fetch(`http://localhost:3000/api/lorems`)
//     console.log(res)
//     const json = await res.json()

//     return {
//         props: {
//             paragraph: json.text,
//         },
//         revalidate: 1000000
//     }
// }

//function Events({ paragraph }) {
function Events() {
    return (
        <Layout>
            <EventLayout/>
        </Layout>
    );
}

export default Events;