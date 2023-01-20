
import Opening from "./compenents/Opening";
import classes from "./HomeLayout.module.css";
import HomeI from "./compenents/HomeI";
const BG = new URL("./Background.jpg", import.meta.url);
const ani = new URL("./animated.jpg", import.meta.url);
function Home(){
    return<section id="Home" className={classes.Infos}>
        <img src={BG} className={classes.bg} alt="None"></img>
        <Opening intro ="Hi my Name is," Name="Esau Lopez" p1="Web Developer" />

        <div className={classes.grid}>
        <HomeI Head="Educated and self taught Web Developer based in the Phoenix Metro Area." image={ani} par="This website is designed using React and hosted using Github Pages. "/>


       </div>

    </section>

}
export default Home;
