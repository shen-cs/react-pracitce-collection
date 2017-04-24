import React, { Component } from 'react';
import { connect } from 'react-redux';
import GithubBox from './GithubBox';


const mapStateToProps = (state) => ({
	data: state.githubData.data,
	userId: state.githubData.userId,
})

class GithubResult extends Component {
	render() {
		const {data, userId} = this.props;
		return (
			<div>
				<GithubBox data={data} userId={userId}/>
			</div>
		)
	}
}
export default connect(mapStateToProps)(GithubResult);