import Image from "next/image";
import style from "./hero.module.scss";

const Hero = () => {

  return (
    <section className={style.hero}>

        <div className={style.heroHeader}>

            <h1>TJOTU</h1>
            <p>a new way to do</p>
            <button>
                <span>Learn more</span>
            </button>
        </div>

        <div className={style.heroImage}>

            <Image src="/image/hero.png" alt="image" width={1024} height={1024} />

            <button>
                <span>Request a presentation</span>
            </button>
            
        </div>

    </section>
  )
}

export default Hero