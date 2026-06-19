import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who can join this workshop?",
      answer:
        "Children between 8 and 14 years of age can join this workshop.",
    },
    {
      question: "Is the workshop online or offline?",
      answer:
        "The workshop is conducted completely online.",
    },
    {
      question: "Do students need prior coding experience?",
      answer:
        "No, the workshop is beginner-friendly and requires no prior experience.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Find answers to the most common questions about the workshop.
        </p>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                shadow-md
                hover:shadow-lg
                transition-all
                duration-300
                overflow-hidden
              "
            >
              <button
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  text-left
                  p-6
                  font-semibold
                  text-lg
                  hover:bg-gray-50
                  transition
                "
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
              >
                <span>{faq.question}</span>

                <span className="text-2xl font-light text-blue-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;