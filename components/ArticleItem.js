import articleStyles from '../styles/Article.module.css';

const ArticleItem = ({ article }) => {
  return (
    <a className={articleStyles.card} href={article.url} target="_blank">
      <img src={article.urlToImage} />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    </a>
  )
}
export default ArticleItem