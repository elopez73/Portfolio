import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import classes from "./emailsend.module.css";



const Result = () => {
	return (
		<p>
			{" "}
			Thank you for reaching out! I look forward to speaking with you soon.
		</p>
	);
};

export const Emailsend = () => {
	const form = useRef();
	const [res, showResult] = useState(false);
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_is2mvos",
				"template_1ic7i9u",
				form.current,
				"sArWHazh_Lmuo7AP5"
			)
			.then(
				(result) => {
					console.log(result.text);
					showResult(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
	const [captchaIsDone,setCaptchaDone] = useState(false);
	function onChange(value) {
		console.log("Captcha value:", value);
		setCaptchaDone(true);
	}
	return (
		<form ref={form} onSubmit={sendEmail}>
			<h1>Contact me below</h1>
			<label>Name</label>
			<input type="text" name="user_name" />
			<label>Email</label>
			<input type="email" name="user_email" />
			<label>Message</label>
			<textarea name="message" />
			<br/>
			<div className={classes.captcha}>
			<ReCAPTCHA
					sitekey="6Ld5eg4kAAAAAFbDR9b-O3PS8j7bxWKlJkGukPFA"
					onChange={onChange}
					theme="dark"


				/>
			</div>
			{ captchaIsDone && <button className={classes.button} type="submit" value="Send">

				<div className={classes.text}>Submit</div>
			</button>}

		</form>
	);
};
