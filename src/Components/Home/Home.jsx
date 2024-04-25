import "./Home.scss"
import zermatt from "../../assets/zermatt.jpg"
import zermatt1 from "../../assets/zermatt1.jpg"
import zermatt2 from "../../assets/zermatt2.jpg"
import logoMajo from "../../assets/logoMajo.png"
import Traductor from "../TraductorSelect/Traductor"
import { useTranslation } from "react-i18next"

const Home = () => {

    const { t } = useTranslation();

    return (

        <div className="animation">
            <Traductor />
            <img src={zermatt} className="imgMobileHor" alt="" />
            <img src={zermatt1} className="imgZermatt" alt="" />
            <img src={zermatt2} className="imgMobile" alt="" />
            <div className="datos">
                <h1>NATALIA FORNERO</h1>
                <h2>{t("Home.tecnico")} </h2>
                <h3>{t("Home.agencia")}</h3>
                <p>natifornero@yahoo.com.ar</p>
                <a href="http://www.majopurinan.tur.ar/" target="_blank"><p>www.majopurinan.tur.ar</p></a>
                <div className="flexNumber">
                    <a href="https://api.whatsapp.com/send?phone=5493416836459" target="_blank"><p>341 6836459</p></a>
                    <a href="https://api.whatsapp.com/send?phone=5493412025536" target="_blank"><p>341 2025536</p></a>
                    <a href="https://www.instagram.com/majopurinanviajes/" target="_blank"><p>@majopurinanviajes</p></a>

                </div>
                <img src={logoMajo} className="logoMajo" alt="" />
                <a href="http://www.majopurinan.tur.ar/quienes_somos" target="_blank"><p className="frase">{t("Home.frase")}</p></a>

            </div>
            <div>

            </div>

        </div>
    )
}

export default Home