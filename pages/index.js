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

    return <div style={{textAlign: 'center'}}>
        <p>
            <button onClick={handleClick} style={{width: '400px'}}>Click here until the locale changes 2-3 times and then click "GO BACK" arrow
                in the browser (I think only happens with ?query)
            </button>
        </p>

        <p>
            <button onClick={handleClick2} style={{width: '400px'}}>Click here and you can see that it's able to circumvent localization (possibly not a bug)</button>
        </p>

        <p>{`If we are on this page and the url is /{locale}/[param] - this is a bug.`}</p>
    </div>;
}
