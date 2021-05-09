import classes from "./ads.module.css";
import Add from "./add/add";
import { useEffect, useState } from "react";
const Ads = (props) => {
    //кнопка показать еще
    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage, setPostsPerPage] = useState(10);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         setLoading(true);
    //         const res = await props.state.adsData;
    //         setPosts(res);
    //         setLoading(false);
    //     }
    //     fetchPosts();
    // }, []);

    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const { repos } = props;
    if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    //Бесплатная категория
    let adsElementsFree = repos.map(
        repos => {
            if (repos.price == 0) {
                return <Add title={repos.title} price='Бесплатно' image1={repos.image} image2={repos.image} image3={repos.image}  />
            }
        });
    //Платная категория
    
    console.log(repos);

    let adsElementsCost = repos.map(
        repos => {
            if (repos.price != 0) {
                return <Add title={repos.title} price={repos.price + '₽'} image1={repos.image} image2={repos.image} image3={repos.image}/>
            }
        });


    return (
        <main className={classes.main}>
            <div className={classes.header}>Отдам даром</div>
            <div className={classes.adsContent}>
                {adsElementsFree}
            </div>
            <div>
                <div className={classes.header}>Все объявления</div>
                <div className={classes.adsContent}>
                    {adsElementsCost}
                </div>
            </div>
            <div className={classes.display} >Показать еще</div>
        </main>)
}
export default Ads;