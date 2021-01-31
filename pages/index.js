import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter();

    const getLocale = () => {
        return ['fr', 'de'][Math.round(Math.random())];
    }

    const handleClick = () => {
        router.push('/?bug=true', null, {locale: getLocale()});
    }

    const handleClick2 = () => {
        router.push({
            pathname: `${router.pathname}?bug=true`,
        }, `${router.pathname}?bug=true`, {locale: getLocale()});
    }

    return <div style={{textAlign: 'center', width: '500px', margin: 'auto'}}>
        <br/><br/>

        <p>{`If we are on this page and the url is /{locale}/[param] - this is a bug.`}</p>
        <br/><br/>

        <p>
            <button onClick={handleClick}>Click here until the locale changes 2-3 times and then click "GO BACK" arrow
                in the browser (I think only happens with ?query)
            </button>
        </p>
        <br/><br/>

        <p>
            <button onClick={handleClick2}>Click here and you can see that it's able to circumvent localization (possibly not a bug)</button>
        </p>
        <br/><br/>

        <p>New bug: Go and uncomment getServerSideProps in [param].js, then click this button (it's the same as before).
            It actually executes [param].js code without rendering it!
        </p>
        <p>
            <button onClick={handleClick2}>If getServerSideProps is uncommented - component will execute code but not render when clicking here.</button>
        </p>
    </div>;
}
