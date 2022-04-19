import { useState } from "react";
import "./works.scss";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Employee Management App",
            desc:
                "Used Angular,Spring boot, and mySQL to build an employee management App, users can search, add, delete, and modify employees",
            img:
                "./assets/emp.png",
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Pokemon Application",
            desc:
                "Used Express, Superagent to build APIs, and ths application will display all the pokemons and their basic information which you search",
            img:
                "./assets/pok.png",
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Amazon Game",
            desc:
                "Used React and node.js to build a interesting game, feel free to try it out with your friends.",
            img:
                "./assets/ama.png",
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="works" id="works">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src={d.img}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="assets/arrow2.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/arrow2.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    );
}