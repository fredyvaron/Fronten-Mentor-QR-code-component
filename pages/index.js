import Image from 'next/image'
import { Inter } from 'next/font/google'
import qr from '../images/image-qr-code.png'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <main >
      <div className='container'>
      <div className='card'>
    <div className='card-header'>
    <Image src={qr} alt='picture qr' className='picture_qr'/>
    </div>
    <div className='card-body'>
      <h1 className='card-title'>
      Improve your front-end skills by building projects
      </h1>
      <p className='card-text'>
      Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>
   </div>
      </div>

   <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
    </main>
  )
}
