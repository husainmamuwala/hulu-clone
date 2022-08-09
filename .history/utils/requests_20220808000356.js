const API_KEY = process.env.API_KEY;

export default {
    fetchTrending:{
        title : 'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title : 'Top rated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchAction:{
        title : 'Top rated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },

}