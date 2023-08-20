import Image from "next/image"
import style from "./vision.module.scss"

const Vision = () => {
    
  return (
    <section className={style.vision}>

      <h1>Feature & Use-case</h1>

      <div className={style.cards}>

            <div className={style.container}>
              <div className={style.icon}>
                <Image src="/icon/tabler-arrows.svg" alt="dolar" width="32" height="32" />
              </div>
              <div className={style.info}>
                <h2>Learning by doing</h2>
                <p>
                TJOTU is your new hub to learn real business skills by doing. Are you ready to take a leap?
                </p>
              </div>
            </div>

            <div className={style.container}>
              <div className={style.icon}>
                <Image src="/icon/government.svg" alt="globe" width="32" height="32" />
              </div>
              <div className={style.info}>
                <h2>Hackathon hub</h2>
                <p>
                Take your first step into building things from zero, instead of being trapped in the employment mindset.
                </p>
              </div>
            </div>

            <div className={style.container}>
              <div className={style.icon}>
                <Image src="/icon/zap.svg" alt="zap" width="32" height="32" />
              </div>
              <div className={style.info}>
                <h2>Investment hub</h2>
                <p>
                You planned, and you executed. It was progress, and now it is time to share your product with the world.
                </p>
              </div>
            </div>
      </div>
    </section>
  )
}

export default Vision