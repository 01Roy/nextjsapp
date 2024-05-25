"use client"
import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Home() {
  const router = useRouter()

  const handleRouter = () => {
    router.push('/contact/1?name="subham&age=24')
  }

  return (
    <div className={styles.section}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <h1>Next JS is Awesome Framework</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium molestiae quisquam doloremque provident omnis iure consequuntur minima aperiam officiis sed.</p>
            <button className='btn btn-warning mx-1'>Read more</button>
            <button className='btn btn-outline-primary mx-1'
              onClick={() => handleRouter()}
            >Contact</button>
          </div>
          <div className='col-lg-6'>
            <Image
              src={"/next.svg"}
              width={250}
              height={250}
              alt='Picture'
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home