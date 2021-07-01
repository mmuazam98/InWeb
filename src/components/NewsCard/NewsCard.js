import React, {useState, useEffect, createRef} from 'react';
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import useStyles from './styles';
import classNames from 'classnames';

const NewsCard = ({article: {description, publishedAt, source, title, url, urlToImage }, i, activeArticle}) => {  
	const classes = useStyles();
	const [elRefs, setElRefs] = useState([]);
	const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop-50)

	useEffect(() => {
		setElRefs((refs) => Array(20).fill().map((_,j) => refs[j] || createRef()))
	}, [])

	useEffect(() => {
		if (i === activeArticle && elRefs[activeArticle] ) {
			scrollToRef(elRefs[activeArticle]);
		}
	}, [i, activeArticle, elRefs])

	return(

		<Card ref={elRefs[i]} className={classNames(classes.card, activeArticle===i ? classes.activeCard: null)}>	
			<CardActionArea href={url} target='_blank'>
				<CardMedia className={classes.media} image={urlToImage || 'https://p0.pikrepo.com/preview/551/424/news-closeup-photo.jpg'} />
					<div className={classes.details}>
						<Typography variant='body2' color='textSecondary' component='h2'> {(new Date(publishedAt)).toDateString()} </Typography>
						<Typography variant='body2' color='textSecondary' component='h2'> {source.name} </Typography>
					</div>
					<Typography className={classes.title} gutterBottom variant='h4'> {title} </Typography>
					<CardContent>
						<Typography variant='body2' color='textSecondary' component='p'> {description} </Typography>
					</CardContent>
					<CardActions className={classes.cardActions}>
						<Button size='medium' color='primary'>Read More</Button>
						<Typography variant='h4' color='textSecondary'> {i+1} </Typography>
					</CardActions>
			</CardActionArea>
			
		</Card>


	);
}

export default NewsCard;