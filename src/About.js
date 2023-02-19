import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Opening from "./compenents/Opening";
import Info from "./compenents/Info";
import classes from "./about.module.css";
import InfoList from "./compenents/Infolist";
import Animated from "./compenents/Animated";
import "./aboutslide.css";


const ab = new URL("./aboutpic.jpg", import.meta.url);
const cv = new URL("./core-values.jpg", import.meta.url);
const ex = new URL("./experience.jpg", import.meta.url);
const cp = new URL("./career.jpg", import.meta.url);
const ed = new URL("./education.jpg", import.meta.url);
const sk = new URL("./skills.jpg", import.meta.url);
const hb = new URL("./hobbies.jpg", import.meta.url);
const liscv = [
	{
		In: "Removing your ego: Although we still want to have confidence, we must release our ego's and always allow our minds to intake new information. Even if this information is contrary to what we know, asking questions and learning the truth will always benefit our ability to learn.",
	},
	{ In: "Working hard: I strive to love where I work and what I do." },
	{
		In: "Caring for others: This gives me drive in what I do and helps me strive to achieve new heights.",
	},
	{
		In: "Innovating: In a world that is consistently changing, innovation and trying new things even when there seems to be no other way is crucial.",
	},
];
const lispe =[
	{
		In: "In 2014 at 16 years old, I gained 2 years worth of customer service and stylist skills."
	},
	{
		In:
		 "In 2016 at 17 Years old, I signed a 6 year contract with the United States Air Force Reserves. I would then end my contract in 2022."
	}
	,
	{
		In:
		 "After returning from boot camp in 2017 I started a full time job as a material handler for Baker Electric, while attending school full time."
	}
	,
	{
		In:
		 "I was accepted into a 4 year degree at GCU and attended from 2018-2020, meanwhile having several part time jobs throughout those years such at Starbucks, Summer installation jobs, and small teaching jobs."
	}
	,
	{
		In:
		 "In 2020 I met my beautiful wife, after a calculated decision, I went to look for a full time position while she finished her nursing degree. I was an employee at UbreakIfix from September- December where I then became an employee at Safelite from December-2020 to July-2021."
	}
	,
	{
		In:
		 "I disliked moving jobs, although I did well and was never forced to leave one, I decided my next job would be one within my same career field. This led me into my current job as an EMR Specialist/Report Developer starting in July 2021."
	}
];
const lised =[
	{
		In: "Obtained my High School Diploma in 2016."
	},
	{
		In:
		 "2017- Embry Riddle, Online. General Education Courses."
	}
	,
	{
		In:
		 "2018- Palomar College, CA. General Education Courses."
	}
	,
	{
		In:
		 "2018 to 2020- Grand Canyon University, AZ. Completed over 70 College credits towards a Bachelors Degree in Computer Science."
	}
	,
	{
		In:
		 "2020 to 2022- Phoenix College, AZ. Completed upper level classes while working full time towards my Computer Science Degree."
	}
	,
	{
		In:
		 "2023- I currently have 90 credits towards my Computer Science Degree and plan to go back to school now that my wife has completed her Nursing Degree."
	}
];
const lissk =[
	{
		In: "C based- From High School to College I have over 7 years of experience from Robotics clubs and general programming classes."
	},
	{
		In:
		 "HTML,CSS, and Javascript- I have 4 years of web development from college courses and freelace projects."
	}
	,
	{
		In:
		 "SQL- I have 1.5 Years of generating SQL queries and generating reports with my current employer."
	}
	,
	{
		In:
		 "React- I have 1 Years of freelance experience/self taught. I have never taken courses, the website you are currently visiting is my first ever React Project."
	}
	,
	{
		In:
		 "Overall, I have over 7 years of customer service, Programming, Code Logic, and work experience."
	}

];
const lishb =[
	{
		In: "Currently I spend my mornings working out and then programming websites before the start of my work day."
	},
	{
		In:
		 "Spending time with my wife and supporting her through her journey as a nurse."
	}
	,
	{
		In:
		 "Avid volleyball player since High School."
	}
	,
	{
		In:
		 "Video games with my life long friends."
	}
	,
	{
		In:
		 "I love movies and anime."
	}
	,
	{
		In:
		 "Christian and beiliver in christ."
	}

];
const slides = [
	{
		module: (
			<Info
				id="2"
				text="Who I am"
				info1="I am a 24 Year old Web Developer and Husband. I am originally from California and I am looking to find my way as a Junior Developer. I have several years of experience in both development and general work experience. I am determined and extremely self motivated in my day to day life. "
				img={ab}
			/>
		),
	},
	{
		module: (
			<Info id="5"
			 text="Core Values"
			  info1={<InfoList li={liscv} />}
			  img={cv} />
		),
	},
	{
	module:(
		<Info id="6"
		text="Past Experiences"
		info1={<InfoList li={lispe} />}
		img={ex}/>
	),
 },
	{ module:(
		 <Info id="7"
	 text="Career Goals"
	 info1="I am hoping to further my career and become a Web Developer, since my time in high school and college I have learned a vast amount of coding languages which include C++, Javascript, HTML, CSS, SQL, and React. I aim to increase my knowledge. I have created two websites where I have purchased Domains and are currently live using Github Pages to host. Given the opportunity, I will utilize all the skills in my arsenal while also gaining and applying new knowledge."
	 img={cp}/>
	),
 },
	{ module:(
		 <Info id="8"
		  text="Education"
		  info1={<InfoList li={lised} />}
		  img={ed}/>
		),
	 },
	{ module: (
		<Info
		 id="9"
		  text="Skills"
		  info1={<InfoList li={lissk} />}
		  img={sk}/>
		   ),
		 },

	{ module:(
		 <Info id="10"
		  text="Hobbies - Life Stlye"
		  info1={<InfoList li={lishb} />}
		  img={hb}/>
		 ),
		 },
];

function About() {
	const settings = {
		arrows: false,
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "3rem",
		slidesToShow: 3,
		dots: true,
		speed: 500,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 2,
					initialSlide: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					initialSlide: 1,
				},
			},
		],
	};

	return (<Animated>
		<section>

			<Opening Name="About me" intro="Get to know me." p1="Slide left or right to discover the topics about me. "/>

			<div className={classes.page}>
				<Slider {...settings}>
					{slides.map((slide) => (
						<div>{slide.module}</div>
					))}
				</Slider>
			</div>
		</section>
		</Animated>
	);
};
export default About;
