import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/qanda.css";

const QAndA = () => {
  const { t, i18n } = useTranslation();

  // Fetch FAQs from locales
  const faqs = t("faqs", { returnObjects: true }) || [];

  // Function to render links dynamically
  const renderAnswerWithLinks = (answer) => {
    const links = {
      Facebook: "https://www.facebook.com/syrianexpertise",
      Instagram: "https://www.instagram.com/syrianexpertise/",
      LinkedIn:
        "https://www.linkedin.com/company/syrianexpertise/posts/?feedView=all",
      "Main group": "https://www.facebook.com/groups/syrianexpertise",
      Health: "https://www.facebook.com/share/p/1Aa3RoBhZd/",
      Engineering:
        "https://www.facebook.com/groups/8825432294176670?locale=ar_AR",
      "Education and Training":
        "https://www.facebook.com/groups/1328408388176909?locale=ar_AR",
      "Economy and Investment":
        "https://www.facebook.com/groups/1395933135121545?locale=ar_AR",
      Law: "https://www.facebook.com/groups/1095639335635146?locale=ar_AR",
      "Technology and IT":
        "https://www.facebook.com/groups/524313823961139?locale=ar_AR",
      survey: "https://syrianexpertise.org/survey", // Replace with the actual survey link
      استبيان: "https://syrianexpertise.org/survey", // Arabic word for survey
      "المجموعة الرئيسية": "https://www.facebook.com/groups/syrianexpertise",
      الصحة: "https://www.facebook.com/share/p/1Aa3RoBhZd/",
      الهندسة: "https://www.facebook.com/groups/8825432294176670?locale=ar_AR",
      "التعليم والتدريب":
        "https://www.facebook.com/groups/1328408388176909?locale=ar_AR",
      "الاقتصاد والاستثمار":
        "https://www.facebook.com/groups/1395933135121545?locale=ar_AR",
      القانون: "https://www.facebook.com/groups/1095639335635146?locale=ar_AR",
      "التكنولوجيا ونظم المعلومات":
        "https://www.facebook.com/groups/524313823961139?locale=ar_AR",
    };

    // Match multi-word phrases first
    const words = Object.keys(links).sort((a, b) => b.length - a.length); // Sort by length to match longer phrases first
    let processedAnswer = answer;

    words.forEach((word) => {
      // Adjust regex to handle Arabic and non-Latin scripts
      const regex = new RegExp(
        `(${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
        "gu" // Use the 'u' flag for Unicode support
      );
      processedAnswer = processedAnswer.replace(
        regex,
        `<a href="${links[word]}" target="_blank" rel="noopener noreferrer">${word}</a>`
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: processedAnswer }} />;
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
                    {renderAnswerWithLinks(faq.answer)}
                  </p>
                  {/* Render question2 and answer2 if they exist */}
                  {faq.question2 && (
                    <h4 className="qanda-faq-question">{faq.question2}</h4>
                  )}
                  {faq.answer2 && (
                    <p className="qanda-faq-answer">
                      {renderAnswerWithLinks(faq.answer2)}
                    </p>
                  )}
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
