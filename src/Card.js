import React from 'react'

const Input = ({ label }) => (
	<label className='Input'>
		<span className='Input__label'>{label}</span>
		<input className='Input__elm' type='text' />
	</label>
)

const Button = ({ title, outlined, onClick }) => (
	<button
		className={outlined ? 'Btn Btn--outline' : 'Btn Btn--solid'}
		onClick={onClick}
		children={title}
	/>
)

const SuccessIndicator = ({ type }) => (
	<div className={`SuccessIndicator ${type}`}>
		<span>Saved!</span>
	</div>
)

const Form = () => (
	<div>
		<Input label='Name' />
		<Input label='Email' />
		<Input label='Title' />
	</div>
)

const Card = ({ success, onClick, type, title, children }) => (
	<div className='Card__container'>
	<div className='Card'>
		<header className='Card__header'>
			<h4 className='Card__title'>{title}</h4>
			<div className='Card__tools'>
				<Button title='Cancel' outlined />
				<Button title='Submit' onClick={onClick} />
			</div>
		</header>
		<section className='Card__content'>
			{success && <SuccessIndicator type={type} />}
			<Form />
		</section>
	</div>
</div>
)


export default class extends React.Component {
	state = {
		success: true
	}

	render () {
		return (
			<Card
				{...this.props}
				success={this.state.success}
				onClick={() => this.setState({ success: !this.state.success })}
			/>
		)
	}
}
