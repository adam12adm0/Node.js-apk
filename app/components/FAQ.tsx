"use client"

import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const faqs = [
  {
    question: "هل هذه الدورة مناسبة للمبتدئين؟",
    answer: "نعم، هذه الدورة مصممة لتناسب المبتدئين وتبدأ من الأساسيات.",
  },
  {
    question: "كم من الوقت يستغرق إكمال الدورة؟",
    answer: "يعتمد ذلك على وتيرة تعلمك، ولكن يمكن إكمال الدورة في حوالي 8-12 أسبوعًا إذا خصصت ساعة يوميًا للدراسة.",
  },
  {
    question: "هل سأحصل على شهادة بعد إكمال الدورة؟",
    answer: "نعم، ستحصل على شهادة إتمام الدورة بعد إكمال جميع الدروس والاختبارات.",
  },
  {
    question: "هل هناك دعم متاح أثناء الدورة؟",
    answer: "نعم، لدينا منتدى للطلاب حيث يمكنك طرح الأسئلة والتفاعل مع المدربين والطلاب الآخرين.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">الأسئلة الشائعة</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg">
            <button
              className="flex justify-between items-center w-full p-4 text-right"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

