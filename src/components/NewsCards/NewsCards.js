import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import {Grid, Grow, Typography} from '@material-ui/core';
import useStyles from './styles';

const infoCards = [
  { color: '#3baf8a', title: 'Latest Tech Articles/Blogs', info: 'React, Angular, Javascript, Science, Technology', text: 'Give me the latest Articles' },
  { color: '#F6BA3B', title: 'Articles By Categories', info: 'React, Angular, Javascript, Science, Technology', text: 'Give me the latest Technology' },
  { color: '#ba55d3', title: 'Tech articles/blogs by Sources', info: 'Medium, Stackoverflow, Reddit', text: 'Give me the news from CNN' },
];

const NewsCards = ({articles, activeArticle}) => {
	const classes = useStyles();

	if(!articles.length) {
		return(
			<Grow in>
			<Grid className={classes.container} container alignItems="stretch" spacing = {4}>
				{
					infoCards.map(infoCard => (
						<Grid className={classes.infoCard} item xs={12} sm={6} md={4} lg={4}>
							<div className={classes.card} style={{backgroundColor: infoCard.color}} >
								<Typography variant='h4'>{infoCard.title}</Typography>
								{
									infoCard.info ? 
									(<Typography variant='h4'>
										<strong>
											{infoCard.title.split(' ')[2]}	
										</strong>
											<br />
											{infoCard.info}
									</Typography>) : null
								}
								<Typography variant='h4'>Try Saying: <br/> <i>{infoCard.text}</i> </Typography>
								
							</div>
							<br/><br/><br/>
						</Grid>
					))
				}
			</Grid>
			
			</Grow>
		)
	}

	return(

		<Grow in>

			<Grid className={classes.container} container alignItems="stretch" spacing = {4}>
			
			{
				articles.map((article, i) => (   //Parenthesis in map function for instant return
					<Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}} >
						<NewsCard article={article} activeArticle={activeArticle} i={i} />
					</Grid>
				))
			}

			</Grid>

		</Grow>

	);
}

export default NewsCards;