import React, { Component } from 'react';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import ActionHome from 'material-ui/svg-icons/action/home';
export default class extends Component {
	renderItem = (item) => {
		const {data} = this.props;
		return <CardText>{item}: {data[item.toLowerCase()]}</CardText>
	}
	render() {
		const {data, userId} = this.props;
		const textItems = ['Followers', 'Following', 'Public_repos', 'Email'];
		return (
			<Card>
				<CardHeader
				   title={data.name}
				   subtitle={userId}
				   avatar={<a href={data.html_url}><Avatar src={data.avatar_url}/></a>}/>

				{textItems.map(this.renderItem)}
				<CardActions>
					<Link to="/github-finder">
						<RaisedButton label="Back to github finder"
							icon={<ActionHome/>}
							secondary/>
					</Link>
				</CardActions>
			</Card>
		)
	}
}