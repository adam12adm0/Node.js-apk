"use client"

import { useState, useEffect } from "react"
import Welcome from "./components/Welcome"
import SearchBar from "./components/SearchBar"
import LessonList from "./components/LessonList"
import ProgressBar from "./components/ProgressBar"
import FAQ from "./components/FAQ"

export default function Home() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // هنا يمكنك إضافة منطق لحساب التقدم الفعلي للمستخدم
    setProgress(30)
  }, [])

  return (
    <div className="min-h-screen">
      <Welcome />
      <header className="bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="container">
          <SearchBar />
        </div>
      </header>
      <main className="container my-8">
        <h1 className="text-3xl font-bold mb-8 text-center">دورة بايثون من الصفر إلى الاحتراف</h1>
        <ProgressBar progress={progress} />
        <p className="text-center mb-8">أنت الآن أتممت {progress}% من الدورة</p>
        <LessonList />
        <FAQ />
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-12">
        <div className="container text-center">&copy; {new Date().getFullYear()} جميع الحقوق محفوظة</div>
      </footer>
    </div>
  )
}

