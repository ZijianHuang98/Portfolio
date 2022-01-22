import "./works.scss"

export default function Work() {
    return (
        <div className="works" id = "works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src="assets/mobile.png" alt="" />
                            </div>
                            <h2>Title</h2>
                            <p>
                                我是一只小臭猪我谁都不爱！
                            </p>
                            <span>Project</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="rightContainer">
                            <img src="assets/chicago.png" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
