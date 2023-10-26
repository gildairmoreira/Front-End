// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const canal = 'CFBCursos'
const nome = 'Bruno Campos'

function Topo() {
  return(
    <div>
      <div>Logo</div>
      <div>{canal}</div>
      <div>{nome}</div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
    <Topo/>
    </main>
  )
}
