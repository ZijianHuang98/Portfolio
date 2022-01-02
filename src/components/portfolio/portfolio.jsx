import "./portfolio.scss"

export default function portfolio() {
    return (
        <div className="portfolio" id = "portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Feature</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Desing</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/p1.jpeg" alt="" />
                    <h3>
                        Banking App
                    </h3>
                </div>
                <div className="item">
                    <img src="assets/p1.jpeg" alt="" />
                    <h3>
                        Banking App
                    </h3>
                </div>
                <div className="item">
                    <img src="assets/p1.jpeg" alt="" />
                    <h3>
                        Banking App
                    </h3>
                </div>
                <div className="item">
                    <img src="assets/p1.jpeg" alt="" />
                    <h3>
                        Banking App
                    </h3>
                </div>
                <div className="item">
                    <img src="assets/p1.jpeg" alt="" />
                    <h3>
                        Banking App
                    </h3>
                </div>
                <div className="item">
                    <img src="assets/p1.jpeg" alt="" />
                    <h3>
                        Banking App
                    </h3>
                </div>
            </div>
        </div>
    )
}
