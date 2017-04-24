import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';
import '../css/github-finder.css'
import { githubDataActionCreator } from '../redux/githubDataRedux';

const mapStateToProps = (state) => ({
	userId: state.githubData.userId,
})

class GithubHome extends Component {
	onChangeText = (e) => {
		const {dispatch} = this.props;
		dispatch(githubDataActionCreator.changeUserId(e.target.value))
	};
	onSubmit = () => {
		const {dispatch, userId} = this.props;
		dispatch(githubDataActionCreator.getGithub(userId));
	}
	render() {
		return (
			<div className="container">
				<TextField
					hintText="Please enter github user ID..."
					onChange={this.onChangeText}/>
				<Link to="/github-finder/result">
					<RaisedButton label="submit" onClick={this.onSubmit} primary/>
				</Link>
			</div>
		)
	}
}

export default connect(mapStateToProps)(GithubHome)