import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Opening from "./compenents/Opening";
import Info from "./compenents/Info";
import classes from "./about.module.css";
import InfoList from "./compenents/Infolist";
import "./aboutslide.css";

const SP = new URL("./Space.jpg", import.meta.url);
const ab = new URL("./aboutpic.jpg", import.meta.url);
const lis= [{In:"My biggest core vaule is removing your ego, although we still want to have confidence, we must release our ego's and always allow our minds to intake new information. Even if this informtion is contrairy to what we know, asking questions and learning the truth will always benfit your ability to learn."},
{In:'Working hard is an essential core value, it is important to love where you work and what you.'}]
const slides = [
	{ module: <Info id="2" text="Who I am" info1="I am a 24 Year old Web Devloper and Husband. I am originally from California and I am looking to find my way as a Junior Developer. I have several years of experience in both development and general work experience. I am determined and extremely self motivated in my day to day life. " img={ab}/> },
	{ module: <Info id="5" text="Core Values" info1= {<InfoList li={lis} />} />  },
	{ module: <Info id="6" text="Past Experiences" /> },
	{ module: <Info id="7" text="Career Goals" /> },
	{ module: <Info id="8" text="Education" /> },
	{ module: <Info id="9" text="Skills" /> },
	{ module: <Info id="10" text="Hobbies" info1="TESTING"/> },
];

function About() {
	const settings = {


		arrows:false,
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "3rem",
		slidesToShow: 3,

		speed: 500,
		responsive: [
			{
			  breakpoint: 1600,
			  settings: {
				slidesToShow: 2,
				initialSlide: 1,
				infinite: true,

			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,

				initialSlide: 1
			  }
			}
		  ]
		};



	return (
		<section>
			<img src={SP} className={classes.space} alt="None"></img>
			<Opening Name="About me" intro="I love Programing" />

			<div className={classes.page}>
				<Slider {...settings}>
					{slides.map((slide) => (
						<div>{slide.module}</div>
					))}
				</Slider>

			</div>

		</section>
	);
}
export default About;
