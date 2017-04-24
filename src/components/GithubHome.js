import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Spinner from 'react-spinner-material';
import { Link } from 'react-router';
import '../css/github-finder.css'
import { githubDataActionCreator } from '../redux/githubDataRedux';

const mapStateToProps = (state) => ({
	userId: state.githubData.userId,
	spinnerVisible: state.githubUi.spinnerVisible,
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
			<div className="box">
				<div className="container">
					<TextField
						hintText="Please enter github user ID..."
						onChange={this.onChangeText}/>
					<Link to="/github-finder/result">
						<RaisedButton label="submit" onClick={this.onSubmit} primary/>
					</Link>
					
				</div>
				<div >
				<Spinner
						height={20}
						width={20}
						spinnerColor={"#333"}
						spinnerWidth={2}
						show={this.props.spinnerVisible}/>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps)(GithubHome)