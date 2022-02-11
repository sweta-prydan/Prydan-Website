import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Home';

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
    </div>
  )
}
