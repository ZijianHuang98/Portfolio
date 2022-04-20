import "./testimonials.scss"
import Button from '@mui/material/Button';

export default function testimonials() {
    return (

        <div className="education" id="testimonials"  >
            <h1 className="header">Professional Experience</h1>
            <div className="umsl">
                <div className="logo">
                    <img src="./assets/umsl2.png" alt="umsl logo" />
                </div>
                <h2>University of Missouri - Saint Louis</h2>
                <h3>Computer Science </h3>
                <h3>08/2018 - 08/2022</h3>
                <h3>GPA: 3.7/4.0 Dean's list and Half Scholarship (Fall 2018 - Fall 2021)</h3>
                <h3>Core courses: Web Development, Database management, Operating system, Complier design</h3>
                <h3> Key achievement: 4th Place in 2019 - 2020 National Mathematics Competition (STLCC - Meramec)</h3>
                <br />
                <hr />
                <br />
                <img src="./assets/experience1.png" className="experience" alt="" />
                <h2>Global Orientation Leader</h2>
                <h3>12/2022</h3>
                <h3>University Missouri St. Louis/ International Office • St. Louis, MO</h3>
                <h2>Mathematics Tutor</h2>
                <h3>09/2020 - 08/2021</h3>
                <h3>University Missouri St. Louis/ Tutoring Center • St. Louis, MO</h3>
                <br />
                <Button color="secondary" href="./assets/Zijian_new.pdf" variant="outlined" size="large">Check My Resume in PDF</Button>
            </div>
        </div>
    )
}
