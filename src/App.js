import { useState } from 'react';
import './index.css';

export default function App() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		okayToEmail: false
	});
	/**
	 * Challenge: Connect the form to local state
	 *
	 * 1. Create a state object to store the 4 values we need to save.
	 * 2. Create a single handleChange function that can
	 *    manage the state of all the inputs and set it up
	 *    correctly
	 * 3. When the user clicks "Sign up", check if the
	 *    password & confirmation match each other. If
	 *    so, log "Successfully signed up" to the console.
	 *    If not, log "passwords to not match" to the console.
	 * 4. Also when submitting the form, if the person checked
	 *    the "newsletter" checkbox, log "Thanks for signing
	 *    up for our newsletter!" to the console.
	 */

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: type === 'checkbox' ? checked : value
			};
		});
	};

	function handleSubmit(event) {
		event.preventDefault();
		const { password, confirmPassword, okayToEmail } = formData;
		const passMatchMessage =
			password === confirmPassword
				? 'Successfully signed up'
				: 'passwords do not match';
		console.log(passMatchMessage);
		okayToEmail && console.log('Thanks for signing up for our newsletter!');
	}
	return (
		<div className="form-container">
			<form className="form" onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Email address"
					className="form--input"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
				<input
					type="password"
					placeholder="Password"
					className="form--input"
					name="password"
					value={formData.password}
					onChange={handleChange}
				/>
				<input
					type="password"
					placeholder="Confirm password"
					className="form--input"
					name="confirmPassword"
					value={formData.confirmPassword}
					onChange={handleChange}
				/>

				<div className="form--marketing">
					<input
						id="okayToEmail"
						type="checkbox"
						name="okayToEmail"
						onChange={handleChange}
						checked={formData.okayToEmail}
					/>
					<label htmlFor="okayToEmail">I want to join the newsletter</label>
				</div>
				<button className="form--submit">Sign up</button>
			</form>
		</div>
	);
}
