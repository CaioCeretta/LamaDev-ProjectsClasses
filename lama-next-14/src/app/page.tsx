import Image from 'next/image'
import styles from './home.module.scss'


const Home = () => {


  return (
    
    <div className='flex gap-8'>
      <div className='flex-1 flex flex-col gap-[3.2rem]'>
        <h1 className='text-[5rem] font-bold'>Creative Thoughts Agency</h1>
        <p className='text-[1.2rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Porro aliquam, animi ut ratione, odio impedit tempora nulla,
          reiciendis expedita beatae neque! Eius quia modi atque maxime,
          asperiores dolorem non harum.</p>


        <div className='flex gap-2'>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>

        <div className="w-[32rem] h-[3rem] relative filter grayscale">
          <Image src="/brands.png" alt="" fill />
        </div>

      </div>

      <div className='flex-1 relative'>
        <Image src="/hero.gif" alt="" fill className="" />
      </div>
    </div>
  )

}

export default Home