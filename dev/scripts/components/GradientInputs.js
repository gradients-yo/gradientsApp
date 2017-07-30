import React from 'react';


class CreateGradient extends React.Component {

	handleChange(e) {
		e.preventDefault();
		const gradient = {
			base: this.base.value
		}
		console.log(gradient);
	}
	render() {
		return (
			<form onSubmit={(e) => this.handleChange(e)}>
				<label for="hex">Starting hex value🌈    </label>
				<input ref={(input) => this.base = input} type="text" name="hex" placeholder="#663399"/>
			</form>
		)
	}
}




export default CreateGradient;