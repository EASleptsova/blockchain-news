import ArticleList from '../components/ArticleList';

function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const url = 'http://newsapi.org/v2/everything?' +
    'q=Blockchain&' +
    `from=${Date.now()}` +
    'sortBy=popularity&' +
    `apiKey=${process.env.API_KEY}`
  const resp = await fetch(url)
  const jsonResponse = await resp.json()
  return {
    props: {
      articles: jsonResponse.articles || []
    }
  }
}

export default Home