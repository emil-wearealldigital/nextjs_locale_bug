import {useRouter} from "next/router";

export default function Page(props) {
    const router = useRouter();

    // Check node.js console when getServerSideProps is uncommented
    console.log(router.pathname);
    // You can also try throwing an exception here, it shows very well...

    return 'This page should be shown only if the url is /{locale}/[param], otherwise it\'s a bug.';
}

// export async function getServerSideProps(context) {
//     return {
//         props: {
//             data: []
//         },
//     }
// }
