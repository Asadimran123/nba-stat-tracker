// @ts-ignore
import React from "react"
// @ts-ignore
import  {Route, Routes} from "react-router-dom"
import axios from "axios"
import "../../App.css"
import "../esp/esp_bdit.ttf"

export default function Home(){
    const [news, setNews] = React.useState<any[]>([])

    const fetchNews = async() =>{
        try{
            const options = {
                method: 'GET', 
                url: 'https://6ug3gklzbc.execute-api.us-west-1.amazonaws.com/prod/news',

                }
        
                const response = await axios.request(options);
                setNews(response.data)
            }
        catch(err){
            window.alert(`Could not load player data. Refresh and try again ${err}`);
            console.log(err);
        }
    }

    React.useEffect(()=>{
        fetchNews();
    }, [])

    const results = news.map((article: any)=>{
        return(
            <div className="news-li-wrapper">
                <li className="news-li"><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></li>
                <li className="news-li">source: {article.source}</li>
            </div>

        )
    })


    return(
        <div className="home">
            <h1 className="home-header">Welcome!</h1>
            <h2 style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontStyle: "italic" }}>Latest News</h2>
            <ul className="news-list">
                {results}
            </ul>
        </div>
    )
}