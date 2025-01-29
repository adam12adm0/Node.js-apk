"use client"

import { useState } from "react"
import { FaPython, FaCode, FaDatabase, FaChartBar, FaRobot, FaGlobe, FaLock, FaGamepad } from "react-icons/fa"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const lessons = [
  {
    id: 1,
    title: "مقدمة في بايثون",
    icon: FaPython,
    content: "بايثون هي لغة برمجة عالية المستوى، سهلة التعلم وقوية. تتميز بقواعد بسيطة وإنتاجية عالية.",
  },
  {
    id: 2,
    title: "المتغيرات والأنواع الأساسية",
    icon: FaCode,
    content:
      "المتغيرات هي وسيلة لتخزين البيانات. في بايثون، الأنواع الأساسية تشمل الأعداد الصحيحة، الأعداد العشرية، النصوص، والقيم المنطقية.",
  },
  {
    id: 3,
    title: "الهياكل الشرطية والحلقات",
    icon: FaCode,
    content:
      "الهياكل الشرطية مثل if-else تسمح باتخاذ قرارات في البرنامج. الحلقات مثل for و while تسمح بتكرار العمليات.",
  },
  {
    id: 4,
    title: "الدوال والوحدات",
    icon: FaCode,
    content: "الدوال هي كتل من الكود قابلة لإعادة الاستخدام. الوحدات هي ملفات تحتوي على تعريفات ومتغيرات بايثون.",
  },
  {
    id: 5,
    title: "قواعد البيانات مع بايثون",
    icon: FaDatabase,
    content: "يمكن استخدام بايثون للتعامل مع قواعد البيانات مثل SQLite و MySQL و PostgreSQL.",
  },
  {
    id: 6,
    title: "تحليل البيانات باستخدام بايثون",
    icon: FaChartBar,
    content: "بايثون لديها مكتبات قوية لتحليل البيانات مثل pandas و numpy و matplotlib.",
  },
  {
    id: 7,
    title: "الذكاء الاصطناعي وتعلم الآلة",
    icon: FaRobot,
    content:
      "بايثون هي اللغة المفضلة للعديد من مشاريع الذكاء الاصطناعي وتعلم الآلة، مع مكتبات مثل TensorFlow و PyTorch.",
  },
  {
    id: 8,
    title: "تطوير الويب مع بايثون",
    icon: FaGlobe,
    content: "يمكن استخدام أطر عمل مثل Django و Flask لتطوير تطبيقات الويب باستخدام بايثون.",
  },
  {
    id: 9,
    title: "أمان المعلومات مع بايثون",
    icon: FaLock,
    content: "بايثون لديها أدوات قوية لأمان المعلومات، بما في ذلك التشفير وفك التشفير وتحليل الشبكات.",
  },
  {
    id: 10,
    title: "تطوير الألعاب مع بايثون",
    icon: FaGamepad,
    content: "يمكن استخدام مكتبات مثل Pygame لتطوير ألعاب 2D بسيطة باستخدام بايثون.",
  },
]

export default function LessonList() {
  const [selectedLesson, setSelectedLesson] = useState(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <lesson.icon className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
            <Button
              className="mt-4 bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              onClick={() => setSelectedLesson(lesson)}
            >
              ابدأ الدرس
            </Button>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedLesson} onOpenChange={() => setSelectedLesson(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedLesson?.title}</DialogTitle>
            <DialogDescription>{selectedLesson?.content}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

