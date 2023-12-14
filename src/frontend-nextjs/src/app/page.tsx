import Image from 'next/image'
import Link from 'next/link'
import imageHome from '@/app/assets/imageHome.31a1f696.svg';

import './page.css'

export default function Home() {
  return (
    <main>        
      <div className="containerHome">
        <div>
          <h1>
            Praticar esportes com pessoas da sua região é mais divertido e seguro com o <a>cadê meu time?</a>
          </h1>
          <p>
            É simples! Basta se cadastrar no aplicativo e escolher o esporte que você deseja praticar. Em seguida, você poderá ver todos os eventos que estão acontecendo perto de você. 
            Se você encontrar um evento que lhe interesse, basta se inscrever para participar.
           </p>
          <div className="buttonHome">
            <Link href="/register">Junte-se ao nosso time</Link>
          </div>
        </div>
        <Image src={imageHome} alt="home" />
      </div>               
    </main>
  )
}
