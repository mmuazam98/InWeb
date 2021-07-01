import React, {useState, useEffect} from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import useStyles from './styles';
import wordsToNumbers from 'words-to-numbers';
import NewsCards from '../NewsCards/NewsCards';
import Footer from '../footer/footer';
import Nav from '../../components/nav/Nav'

const myAlanKey = "9f73f61c5a3dcaa028cc1a7442aac10d2e956eca572e1d8b807a3e2338fdd0dc/stage";

const Blogs = () => {
	const [newsArticles, setNewsArticles] = useState([]);
	const [activeArticle, setActiveArticle] = useState(-1);
	const classes = useStyles();

	useEffect(()=>{

		alanBtn({
			key: myAlanKey,
			onCommand: ({command, articles, number}) => {       //{command} = commandData ==> command = commandData.command
				if (command === 'newHeadlines') {
					setNewsArticles(articles);
					setActiveArticle(-1);
				} else if (command === 'highlight') {
					setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
				} else if (command === 'open') {
					const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
					const article =  articles[parsedNumber - 1];

					if (parsedNumber > 20 ) {
						alanBtn().playText('Sorry, something went wrong. Please try again');
					} else if (article) {
						window.open(article.url, '_blank');
						alanBtn().playText('Opening the article.');
					}
					
				}
			}
		});

	}, []);
	return (
			<div>
			<Nav/>
			<div className={classes.logoContainer} >
				<img src={require('../../assets/articles.gif')} className={classes.newsLogo} alt="News Logo"/>
			</div>
			<NewsCards articles={newsArticles} activeArticle={activeArticle}/>
			<Footer/>
		</div>
	)
}

export default Blogs
