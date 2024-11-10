"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { TbArrowBarToRight } from "react-icons/tb";
import Link from 'next/link';
import Image from 'next/image';
import styles from "./about.module.css";

export default function Project() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className={styles.maindiv}>
      <h1 className={styles.h}>OUR PROJECTS</h1>
      <div className={`${styles.embla} ${styles.main}`} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
          <Link href="cv\panacloud.html">
        <div  className={styles.container}>
          <Image
            src="/cv/screenshot-pana.png"
            alt="HTML"
            height={320}
            width={320}
            className={styles.miles1}
          />
        </div>
      </Link>
          
              <Link href="https://www.figma.com/proto/CZZRjCAOWmG9uoQ0WqBGyw/Untitled?node-id=1-2&node-type=canvas&t=tC3SakRKZuEPngjv-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">
        <div className={styles.container}>
          <Image
            src="/cv/WhatsApp Image 2024-11-07 at 04.29.58_0240609f.jpg"
            alt="HTML"
            height={200}
            width={200}
            className={styles.miles1}
          />
        </div>
      </Link>
      
           
      
      <Link href="cv/RESUME BUILDER.html">
        <div className={styles.container}>
          <Image
            src="/cv/blur-resume-pic.jpeg"
            alt="HTML"
            height={300}
            width={300}
            className={styles.miles1}
          />
        </div>
      </Link> 
      
      </div>
      <div className={styles.embla__slide}>
      <Link href="https://docs.google.com/presentation/d/1br8BF2W5r8oHRH8US01FyJM3-VW7hLBUWJ4nPuUTE-Y/edit?usp=sharing">
        <div className={styles.container}>
          <Image
            src="/cv/WhatsApp Image 2024-11-07 at 04.44.02_274f5971.jpg"
            alt="HTML"
            height={200}
            width={200}
            className={styles.miles1}
          />
        </div>
      </Link>
      <Link href="cv/Aqsa resume.html">
              <div className={styles.container}>
                <Image
                  src="/cv/Screenshot_7-11-2024_8414_.jpeg"
                  alt="HTML"
                  height={350}
                  width={350}
                  className={styles.miles1}
                />
              </div> </Link>
      
      <Link href="/cv/calculater.html">
        <div className={styles.container}>
          <Image
            src="/cv/cal.jpeg"
            alt="HTML"
            height={250}
            width={250}
            className={styles.miles1}
          />
        </div>
      </Link> </div>
      <div className={styles.embla__slide}><Link href="cv/form.html">
        <div className={styles.container}>
          <Image
            src="/cv/resume-form1.jpeg"
            alt="HTML"
            height={350}
            width={350}
            className={styles.miles1}
          />
        </div>
      </Link> 
      <Link href="cv\panacloud.html">
        <div className={styles.container}>
          <Image
            src="/cv/screenshot-pana.png"
            alt="HTML"
            height={320}
            width={320}
            className={styles.miles1}
          />
        </div>
      </Link>
          
              <Link href="https://www.figma.com/proto/CZZRjCAOWmG9uoQ0WqBGyw/Untitled?node-id=1-2&node-type=canvas&t=tC3SakRKZuEPngjv-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">
        <div className={styles.container}>
          <Image
            src="/cv/WhatsApp Image 2024-11-07 at 04.29.58_0240609f.jpg"
            alt="HTML"
            height={200}
            width={200}
            className={styles.miles1}
          />
        </div>
      </Link> <div/>
      
      </div>
         center
          </div>



        </div>
        <button className="bg-purple-500 w-[220px] rounded-[20px] mt-[6px] text-[30px] font-bold flex items-center justify-center gap-2">
  See more <TbArrowBarToRight />
</button>

      </div>
    
  );
}



