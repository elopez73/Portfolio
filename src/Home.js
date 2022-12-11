
import Opening from "./compenents/Opening";
import classes from "./HomeLayout.module.css";
const BG = new URL("./Background.jpg", import.meta.url);
function Home(){
    return<section id="Home" className={classes.Infos}>
        <img src={BG} className={classes.bg} alt="None"></img>
        <Opening intro ="Hi my Name is," Name="Esau Lopez" p1="Web Developer" />

        <div className={classes.grid}>
        <Opening   p1="To learn about me, see my pojects and contact me click above." />


       </div>

    </section>

}
export default Home;
