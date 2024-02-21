import Image from "next/image"

import styles from './styles.scss'

const AboutPage = () => {
  return (
    <div>
      <div className='w-100 h-[30rem] relative object-cover'>
        <Image
          src="https://images.pexels.com/photos/19235985/pexels-photo-19235985/free-photo-of-paris-with-eiffel-tower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Man showing graphs"
          fill  
        />
      </div>
    </div>
  )
}

export default AboutPage
