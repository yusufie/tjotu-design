import Image from "next/image"
import style from "./business.module.scss"

const Business = () => {

  return (
    <section className={style.business}>

      <h1>a new step into the business world</h1>

      <div className={style.cards}>

        <div className={style.card}>
          <Image src="/image/individual.png" width={260} height={260} className={style.cardImage} alt="individual" />
        
          <div className={style.cardHeader}>
            <Image src="/icon/ellipse-gradient.svg" width={16} height={16} alt="ellipse" />
            <h2>Individual</h2>
            <Image src="/icon/ellipse-gradient.svg" width={16} height={16} alt="ellipse" />
          </div>
          
          <p>To join the platform, request an invitation code, follow the instructions, and be part of the journey in the new world.</p>
          <span className={style.price}>Free</span>

          <button>
            <span>request an invitation code</span>
          </button>

        </div>

        <div className={style.card}>
          <Image src="/image/enterprise.png" width={260} height={260} className={style.cardImage} alt="enterprise" />

          <div className={style.cardHeader}>
            <Image src="/icon/ellipse-gradient.svg" width={16} height={16} alt="ellipse" />
            <h2>Enterprise & Investor</h2>
            <Image src="/icon/ellipse-gradient.svg" width={16} height={16} alt="ellipse" />
          </div>
          
          <p>It is time to connect your business to Web3.
            <br />
          (Please request a presentation before further transactions.)
          </p>
          <span className={style.price}>$12999</span>

          <button>
            <span>connect your wallet</span>
          </button>

        </div>

      </div>
        
    </section>
  )
}

export default Business