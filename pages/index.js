import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // Javascript in html is called Jsx
  let liveArea = `Ranchoreline Karachi` ; 
  let mynameArr = ["Mubashir" , "Ibrahim"] ;

  return (
    <>

      <div>Hello {`${mynameArr[0]} ${mynameArr[1]}`} ...</div>   
      <div>{liveArea}</div>  


  
    </>
  )
}
