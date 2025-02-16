"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "HOW DO YOU ADVERTISE ?",
    answer:
      "You can fill out the form on our website with your contact and company details. We're also available at support@unisip.in or through our social media if you'd prefer to reach out directly. You can give us a call at (+91) 8981554464",
  },
  {
    question:"HOW MUCH DOES IT COST TO ADVERTISE ?",
    answer:"The cost depends on the type of customization, bottle design, labeling, and branding services required. We offer flexible pricing based on your needs and order volume. Contact us for a tailored quote!"
  },
  {
    question: "HOW MUCH TIME DOES IT TAKE TO GET THINGS RUNNING ?",
    answer:
      "Once we finalize the order, it can be processed in as little as one weeks. Timelines vary based on order size and customizations.",
  },
  {
    question: "HOW UNISIP IS BETTER THAN TRADITIONAL BRANDING ?",
    answer:
      "UniSip offers personalized, high-quality bottle branding that enhances product appeal, reinforces brand identity, and provides a unique touch compared to standard packaging solutions.",
  },
  {
    question: "WHAT IS THE MINIMUM ORDER QUANTITY ?",
    answer:
      "Our minimum order quantities vary depending on the specific product and service. We strive to accommodate businesses of all sizes, so please contact our sales team for detailed information.",
  },
  {
    question: "WHAT IF YOU HAVE COMPLETELY NEW NEED ?",
    answer:
      "We specialize in customization! Share your idea, and our team will work with you to create a unique solution that fits your branding goals.",
  },
]

const FAQItem = ({ item, isOpen, toggleOpen }: { item: FAQItem; isOpen: boolean; toggleOpen: () => void }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-sm mb-4 bg-blue-50">
      <button
        className="flex justify-between items-center w-full py-3 px-4 sm:py-4 sm:px-6 text-left text-gray-900 font-medium transition-all duration-300 hover:bg-gray-100 rounded-lg"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-${item.question.replace(/\s+/g, "-")}`}
      >
        <span className="text-base sm:text-lg font-extrabold">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={`faq-${item.question.replace(/\s+/g, "-")}`}
        role="region"
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 p-3 sm:p-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-700 text-sm sm:text-base font-bold">{item.answer}</p>
      </div>
    </div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-gray-50 py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 text-center mb-8 sm:mb-10">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="bg-blue-950 shadow-lg rounded-xl p-4 sm:p-6">
          {faqData.map((item, index) => (
            <FAQItem key={index} item={item} isOpen={openIndex === index} toggleOpen={() => toggleOpen(index)} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
