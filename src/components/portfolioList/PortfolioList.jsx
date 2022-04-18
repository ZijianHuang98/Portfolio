import "./poertfolioList.scss"

export default function PortfolioList({id,title,active,setSelected}) {
    return (
        <li className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}>
            <h2>{title}</h2>
        </li>
    );
}
