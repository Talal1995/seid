// filepath: /Users/talal.attar/REW/seid/client/src/pages/Q&a.js
import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/qanda.css";

const QAndA = () => {
  const { t, i18n } = useTranslation();

  // Fetch FAQs from locales
  const faqs = t("faqs", { returnObjects: true }) || [];

  // Function to render links for the "Facebook group links" question
  const renderAnswerWithLinks = (answer) => {
    const isArabic = i18n.language === "ar";

    if (answer.includes(isArabic ? "المجموعة الرئيسية" : "Main group")) {
      return (
        <>
          <a
            href="https://www.facebook.com/groups/syrianexpertise"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isArabic ? "المجموعة الرئيسية" : "Main group"}
          </a>
          ,{" "}
          <a
            href="https://www.facebook.com/share/p/1Aa3RoBhZd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isArabic ? "الصحة" : "Health"}
          </a>
          ,{" "}
          <a
            href="https://www.facebook.com/groups/8825432294176670?locale=ar_AR"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isArabic ? "الهندسة" : "Engineering"}
          </a>
          ,{" "}
          <a
            href="https://www.facebook.com/groups/1328408388176909?locale=ar_AR"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isArabic ? "التعليم والتدريب" : "Education and Training"}
          </a>
          ,{" "}
          <a
            href="https://www.facebook.com/groups/1395933135121545?locale=ar_AR"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isArabic ? "الاقتصاد والاستثمار" : "Economy and Investment"}
          </a>
          ,{" "}
          <a
            href="https://www.facebook.com/groups/1095639335635146?locale=ar_AR"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isArabic ? "القانون" : "Law"}
          </a>
          ,{" "}
          <a
            href="https://www.facebook.com/groups/524313823961139?locale=ar_AR"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isArabic ? "التكنولوجيا ونظم المعلومات" : "Technology and IT"}
          </a>
        </>
      );
    }
    return answer;
  };

  return (
    <div className="qanda-page">
      <div className="qanda-container">
        <h1 className="qanda-title">
          {t("faqsPageTitle") || "أسئلة وأجوبة حول المبادرة وعملها"}
        </h1>

        <div className="qanda-content">
          <div className="qanda-details">
            <div className="qanda-faq-container">
              {faqs.map((faq, index) => (
                <div className="qanda-faq-item" key={index}>
                  <h3 className="qanda-faq-question">{faq.question}</h3>
                  <p className="qanda-faq-answer">
                    {faq.question.includes("Facebook group links") ||
                    faq.question.includes("روابط مجموعات الفيسبوك")
                      ? renderAnswerWithLinks(faq.answer)
                      : faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAndA;
