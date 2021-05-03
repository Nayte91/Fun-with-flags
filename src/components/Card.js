const Card = (props ) => {
    const { country } = props;

    const formatNumber = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }

    return (
        <li className="card">
            <img src={ country.flag } alt="flag"/>
            <div className="data-container">
                <ul>
                    <li>{ country.name }</li>
                    <li>{ country.capital }</li>
                    <li>Pop. { formatNumber(country.population) }</li>
                    <li>{ country.region }</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;