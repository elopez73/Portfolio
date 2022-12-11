import Info from "./compenents/Info";
import Opening from "./compenents/Opening";
import classes from "./HomeLayout.module.css";
const BG = new URL("./Background.jpg", import.meta.url);
function Home(){
    return<section id="Home" className={classes.Infos}>
        <img src={BG} className={classes.bg} alt="None"></img>
        <Opening intro ="Hi my Name is," Name="Esau Lopez" p1="Aspiring Web Developer" />

        <div className={classes.grid}>

            <Info id="1" text="First" />
            <Info id="4" text="Fourth" />

       </div>

    </section>

}
export default Home;
