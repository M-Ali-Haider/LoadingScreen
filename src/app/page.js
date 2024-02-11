'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import LoadingScreen from "@/LoadingScreen/loading";
import { AnimatePresence } from "framer-motion";
export default function Home() {

  const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
      document.body.style.cursor = 'default'
    },2000)
  })

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
      { isLoading && <LoadingScreen/> }
      </AnimatePresence>
    </main>
  );
}
