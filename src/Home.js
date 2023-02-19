
import Opening from "./compenents/Opening";
import classes from "./HomeLayout.module.css";
import HomeI from "./compenents/HomeI";
import Animated from "./compenents/Animated";

const ani = new URL("./animated.jpg", import.meta.url);
function Home(){
    return(<Animated>
    <section id="Home" className={classes.Infos}>

        <Opening intro ="Hi my Name is," Name="Esau Lopez" p1="Web Developer" />

        <div className={classes.grid}>
        <HomeI Head="Educated and self taught Web Developer based in the Phoenix Metro Area." image={ani} par="This website is designed using React and hosted using Github Pages. "/>


       </div>

    </section>
    </Animated>
);
};
export default Home;
