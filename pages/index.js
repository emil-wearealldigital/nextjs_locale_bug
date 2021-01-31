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
            <button onClick={handleClick}>Click here until the locale changes 2-3 times and then click "GO BACK" arrow
                in the browser
            </button>
        </p>

        <p>
            <button onClick={handleClick2}>CLICK HERE AND YOU CAN SEE THAT IT'S ABLE TO CIRCUMVENT LOCALIZATION</button>
        </p>

        <p>{`If we are on this page and the url is /{locale}/[param] - this is a bug.`}</p>
    </div>;
}
