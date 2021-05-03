import Navigation from "../components/Navigation";

const About = () => {
    return (
        <div>
            <Navigation />
            <h1>About</h1>
            <br />
            <p>This small project is powered by:</p>
            <ul>
                <li>React 17</li>
                <li>Node 13</li>
                <li>SCSS</li>
                <li>Caddy server</li>
            </ul>
            <br />
            <p>The country list is based on the open API: https://restcountries.eu/rest/v2/all</p>
        </div>
    );
};

export default About;