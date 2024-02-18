import React from "react";

import "./Hero.scss"

import Facebook from '../img/facebook.png';
import Instagram from '../img/instagram.png';
import Twitter from '../img/Twitter.png';
import Divan1 from "../img/Divan1.jpg";
import Divan2 from "../img/Divan2.jpg";
import Divan3 from "../img/Divan3.jpg";

function Hero() {

    const [divans, setDivans] = React.useState(Divan1)

    const xref = React.useRef()

    const APIdivans = [
            {
                id: 1,
                poster: Divan1,
                malumot: "Comfort Launge Chairs",
            },
        
            {
                id: 2,
                poster: Divan2,
                malumot: "Comfort Launge Chairs",
            },
        
            {
                id: 3,
                poster: Divan3,
                malumot: "Comfort Launge Chairs",
            },
    ]
    
    return (
        <>
        <section className="hero">
            <div className="container">

                <picture className="hero__picture">
                    <img src={Facebook} alt="Facebook" />
                    <img src={Instagram} alt="Instagram" />
                    <img src={Twitter} alt="Twitter" />
                </picture>

                <div className="hero__info">

                    <div className="costs">

                    <h1 className="hero__heading">100% Quality Guranty</h1>
                    <h1 className="hero__heading--h1">Find Classy Furnitures <br/> For Your Comfort</h1>
                    <p className="hero__text">All the Lorem Ipsum generators on the Internet tend to predefined <br/> chunks  this the first true generator on the Internet. </p>

                        <div className="costss">
                            <strong className="hero__cost--strong">Start From</strong>
                            <p className="hero__cost--text">102.99 USD</p>
                            <button ref={xref} onClick={() => {
                                xref.current.classList.add("block")
                            }} className="hero__button">Buy Now</button>
                        </div>


                        <div ref={xref} className="hero__modal"
                          onClick={(evt) => {
                            if (evt.target.matches(".hero__modal")) {
                                xref.current.classList.remove("block")
                            }
                        }}>
                            <div className="hero__modal--info">
                                <h2 className="hero__modal--heading">Hali beri Pulingiz yetmaydi <br/> <br/>  bunaqangi Divanda o'tirishga</h2>
                                <button className="hero__modal--button" ref={xref} onClick={() => {
                                    xref.current.classList.remove("block")
                                }}>X</button>
                            </div>
                        </div>

                    </div>
                    <div className="pic__div">

                    <picture className="pictur__bac">
                        <img className="divansss" src={divans} alt="divans"  width={496} height={553}/>
                    </picture>

                    <div className="API__div" >
                        {APIdivans.map((item) => (
                            <div key={item.id} className="divvv" >
                                <img 
                                className="item"
                                src={item.poster}
                                onClick={() => (
                                    setDivans(
                                        item.id === 1
                                        ? Divan1
                                        :item.id === 2
                                        ? Divan2
                                        : Divan3
                                    )
                                )}

                                alt="Imglars"
                                width={89}
                                height={74}
                                />

                                <p className="API__text">Comfort Launge <br/> Chairs</p>

                            </div>
                        ))}
                    </div>
                    </div>
                </div>

                <div className="popular">
                    <h4 className="popular__heading">Popular shades</h4>
                    <span className="spanchalar">.</span>
                    <span className="spanchalar1">.</span>
                    <span className="spanchalar2">.</span>
                    <span className="spanchalar3">.</span>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;