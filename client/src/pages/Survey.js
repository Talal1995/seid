import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/survey.css";

const SurveyPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const direction = isRTL ? "rtl" : "ltr";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    ageGroup: "",
    country: "",
    province: "",
    email: "",
    phone: "",
    abroadDuration: "",
    educationLevel: "",
    specialization: "",
    currentJob: "",
    workExperience: "",
    willingToContribute: "",
    contributionFields: [],
    contributionMethod: "",
    additionalComments: "",
    // New fields based on the survey
    engineeringSpecialty: "",
    medicalSpecialty: "",
    socialScienceSpecialty: "",
    educationSpecialty: "",
    economicsSpecialty: "",
    lawSpecialty: "",
    mediaSpecialty: "",
    artSpecialty: "",
    computerScienceSpecialty: "",
    agricultureSpecialty: "",
    naturalScienceSpecialty: "",
    hasComments: "no",
    commentText: "",
  });

  // Engineering specialties
  const engineeringSpecialties = [
    { value: "", label: isRTL ? "اختر" : "Select" },
    { value: "civil", label: isRTL ? "الهندسة المدنية" : "Civil Engineering" },
    {
      value: "architecture",
      label: isRTL ? "الهندسة المعمارية" : "Architecture",
    },
    {
      value: "mechanical",
      label: isRTL ? "الهندسة الميكانيكية" : "Mechanical Engineering",
    },
    {
      value: "electrical",
      label: isRTL ? "الهندسة الكهربائية" : "Electrical Engineering",
    },
    {
      value: "communications",
      label: isRTL ? "هندسة الاتصالات" : "Communications Engineering",
    },
    {
      value: "computer",
      label: isRTL ? "هندسة الحاسوب" : "Computer Engineering",
    },
    {
      value: "industrial",
      label: isRTL ? "الهندسة الصناعية" : "Industrial Engineering",
    },
    {
      value: "chemical",
      label: isRTL ? "الهندسة الكيميائية" : "Chemical Engineering",
    },
    {
      value: "environmental",
      label: isRTL ? "الهندسة البيئية" : "Environmental Engineering",
    },
    {
      value: "aerospace",
      label: isRTL ? "هندسة الطيران والفضاء" : "Aerospace Engineering",
    },
    {
      value: "mechatronics",
      label: isRTL ? "هندسة الميكاترونيكس" : "Mechatronics Engineering",
    },
    {
      value: "nuclear",
      label: isRTL ? "الهندسة النووية" : "Nuclear Engineering",
    },
  ];

  // Medical specialties
  const medicalSpecialties = [
    { value: "", label: isRTL ? "اختر" : "Select" },
    { value: "general", label: isRTL ? "الطب العام" : "General Medicine" },
    { value: "surgery", label: isRTL ? "الجراحة" : "Surgery" },
    { value: "pediatrics", label: isRTL ? "طب الأطفال" : "Pediatrics" },
    {
      value: "obstetrics",
      label: isRTL ? "طب النساء والتوليد" : "Obstetrics and Gynecology",
    },
    {
      value: "cardiology",
      label: isRTL ? "طب القلب والأوعية الدموية" : "Cardiology",
    },
    { value: "oncology", label: isRTL ? "طب الأورام" : "Oncology" },
    {
      value: "gastroenterology",
      label: isRTL ? "طب الجهاز الهضمي" : "Gastroenterology",
    },
    {
      value: "pulmonology",
      label: isRTL ? "طب الجهاز التنفسي" : "Pulmonology",
    },
    { value: "neurology", label: isRTL ? "طب الأعصاب" : "Neurology" },
    { value: "ophthalmology", label: isRTL ? "طب العيون" : "Ophthalmology" },
    { value: "ent", label: isRTL ? "طب الأنف والأذن والحنجرة" : "ENT" },
    {
      value: "nephrology",
      label: isRTL ? "طب الكلى والمسالك البولية" : "Nephrology",
    },
    { value: "psychiatry", label: isRTL ? "الطب النفسي" : "Psychiatry" },
    {
      value: "anesthesiology",
      label: isRTL ? "التخدير والعناية المركزة" : "Anesthesiology",
    },
    { value: "pharmacy", label: isRTL ? "الصيدلة" : "Pharmacy" },
    { value: "nursing", label: isRTL ? "التمريض" : "Nursing" },
    {
      value: "physiotherapy",
      label: isRTL ? "العلاج الفيزيائي وإعادة التأهيل" : "Physiotherapy",
    },
    {
      value: "publichealth",
      label: isRTL ? "الصحة العامة والوبائيات" : "Public Health",
    },
    { value: "dentistry", label: isRTL ? "طب الأسنان" : "Dentistry" },
    {
      value: "laboratory",
      label: isRTL ? "المختبرات الطبية" : "Medical Laboratories",
    },
  ];

  // Social Science specialties
  const socialScienceSpecialties = [
    { value: "", label: isRTL ? "اختر" : "Select" },
    { value: "sociology", label: isRTL ? "علم الاجتماع" : "Sociology" },
    { value: "psychology", label: isRTL ? "علم النفس" : "Psychology" },
    {
      value: "politicalscience",
      label: isRTL ? "العلوم السياسية" : "Political Science",
    },
    { value: "anthropology", label: isRTL ? "الأنثروبولوجيا" : "Anthropology" },
    { value: "history", label: isRTL ? "التاريخ" : "History" },
    { value: "philosophy", label: isRTL ? "الفلسفة" : "Philosophy" },
    {
      value: "linguistics",
      label: isRTL ? "علم اللغات والترجمة" : "Linguistics",
    },
    { value: "geography", label: isRTL ? "الجغرافيا" : "Geography" },
    { value: "archaeology", label: isRTL ? "علم الآثار" : "Archaeology" },
    {
      value: "religiousstudies",
      label: isRTL ? "الدراسات الدينية" : "Religious Studies",
    },
  ];

  // Education specialties
  const educationSpecialties = [
    { value: "", label: isRTL ? "اختر" : "Select" },
    {
      value: "generaleducation",
      label: isRTL ? "التربية العامة" : "General Education",
    },
    {
      value: "primaryeducation",
      label: isRTL ? "التعليم الابتدائي" : "Primary Education",
    },
    {
      value: "secondaryeducation",
      label: isRTL ? "التعليم الثانوي" : "Secondary Education",
    },
    {
      value: "educationaladmin",
      label: isRTL ? "الإدارة التربوية" : "Educational Administration",
    },
    {
      value: "specialeducation",
      label: isRTL ? "التعليم الخاص" : "Special Education",
    },
    {
      value: "educationaltechnology",
      label: isRTL ? "تقنيات التعليم" : "Educational Technology",
    },
    {
      value: "professionaldevelopment",
      label: isRTL ? "التدريب والتطوير المهني" : "Professional Development",
    },
    {
      value: "physicaleducation",
      label: isRTL ? "التربية البدنية والرياضية" : "Physical Education",
    },
  ];

  // Economics specialties
  const economicsSpecialties = [
    { value: "", label: isRTL ? "اختر" : "Select" },
    { value: "economics", label: isRTL ? "الاقتصاد" : "Economics" },
    {
      value: "publicadmin",
      label: isRTL ? "الإدارة العامة" : "Public Administration",
    },
    {
      value: "businessadmin",
      label: isRTL ? "إدارة الأعمال" : "Business Administration",
    },
    { value: "accounting", label: isRTL ? "المحاسبة" : "Accounting" },
    { value: "finance", label: isRTL ? "التمويل والاستثمار" : "Finance" },
    { value: "marketing", label: isRTL ? "التسويق" : "Marketing" },
    {
      value: "internationaltrade",
      label: isRTL ? "التجارة الدولية" : "International Trade",
    },
    { value: "hr", label: isRTL ? "إدارة الموارد البشرية" : "Human Resources" },
    {
      value: "projectmanagement",
      label: isRTL ? "إدارة المشاريع" : "Project Management",
    },
  ];

  // Law specialties
  const lawSpecialties = [
    { value: "", label: isRTL ? "اختر" : "Select" },
    { value: "publiclaw", label: isRTL ? "القانون العام" : "Public Law" },
    { value: "privatelaw", label: isRTL ? "القانون الخاص" : "Private Law" },
    {
      value: "internationallaw",
      label: isRTL ? "القانون الدولي" : "International Law",
    },
    { value: "humanrights", label: isRTL ? "حقوق الإنسان" : "Human Rights" },
    {
      value: "commerciallaw",
      label: isRTL ? "القانون التجاري" : "Commercial Law",
    },
    {
      value: "financiallaw",
      label: isRTL ? "القانون المالي والمصرفي" : "Financial Law",
    },
    {
      value: "maritimelaw",
      label: isRTL ? "القانون البحري والجوي" : "Maritime Law",
    },
    {
      value: "environmentallaw",
      label: isRTL ? "القانون البيئي" : "Environmental Law",
    },
    { value: "judiciary", label: isRTL ? "القضاء والمحاماة" : "Judiciary" },
  ];

  // Media specialties
  const mediaSpecialties = [
    { value: "", label: isRTL ? "اختر" : "Select" },
    { value: "journalism", label: isRTL ? "الصحافة" : "Journalism" },
    {
      value: "broadcasting",
      label: isRTL ? "الإعلام المرئي والمسموع" : "Broadcasting",
    },
    {
      value: "digitalmedia",
      label: isRTL ? "الإعلام الرقمي" : "Digital Media",
    },
    {
      value: "publicrelations",
      label: isRTL ? "العلاقات العامة" : "Public Relations",
    },
    {
      value: "politicalcomm",
      label: isRTL ? "الاتصال السياسي" : "Political Communication",
    },
    {
      value: "mediamanagement",
      label: isRTL ? "إدارة وسائل الإعلام" : "Media Management",
    },
    {
      value: "advertising",
      label: isRTL ? "الإعلان والتسويق الإعلامي" : "Advertising",
    },
    {
      value: "editing",
      label: isRTL ? "التحرير والصياغة الإعلامية" : "Editing",
    },
  ];

  // Art specialties
  const artSpecialties = [
    { value: "", label: isRTL ? "اختر" : "Select" },
    { value: "finearts", label: isRTL ? "الفنون الجميلة" : "Fine Arts" },
    {
      value: "graphicdesign",
      label: isRTL ? "التصميم الجرافيكي" : "Graphic Design",
    },
    {
      value: "interiordesign",
      label: isRTL ? "التصميم الداخلي" : "Interior Design",
    },
    {
      value: "industrialdesign",
      label: isRTL ? "التصميم الصناعي" : "Industrial Design",
    },
    { value: "directing", label: isRTL ? "الإخراج الفني" : "Directing" },
    {
      value: "photography",
      label: isRTL ? "التصوير الفوتوغرافي" : "Photography",
    },
    {
      value: "calligraphy",
      label: isRTL ? "الخط العربي والزخرفة" : "Calligraphy",
    },
    { value: "music", label: isRTL ? "الموسيقى" : "Music" },
    {
      value: "performingarts",
      label: isRTL ? "الفنون الأدائية" : "Performing Arts",
    },
    {
      value: "animation",
      label: isRTL ? "الرسوم المتحركة والوسائط المتعددة" : "Animation",
    },
  ];

  // Computer Science specialties
  const computerScienceSpecialties = [
    { value: "", label: isRTL ? "اختر" : "Select" },
    {
      value: "computerscience",
      label: isRTL ? "علوم الحاسوب" : "Computer Science",
    },
    {
      value: "softwareengineering",
      label: isRTL ? "هندسة البرمجيات" : "Software Engineering",
    },
    {
      value: "cybersecurity",
      label: isRTL ? "أمن المعلومات والأمن السيبراني" : "Cybersecurity",
    },
    {
      value: "networks",
      label: isRTL ? "الشبكات وأنظمة الاتصالات" : "Networks",
    },
    {
      value: "dataanalysis",
      label: isRTL ? "تحليل البيانات والذكاء الاصطناعي" : "Data Analysis & AI",
    },
    {
      value: "robotics",
      label: isRTL ? "الروبوتات والأنظمة الذكية" : "Robotics",
    },
    { value: "vr", label: isRTL ? "تقنيات الواقع الافتراضي والمعزز" : "VR/AR" },
    {
      value: "informationsystems",
      label: isRTL ? "إدارة نظم المعلومات" : "Information Systems",
    },
  ];

  // Agriculture specialties
  const agricultureSpecialties = [
    { value: "", label: isRTL ? "اختر" : "Select" },
    {
      value: "sustainableagriculture",
      label: isRTL ? "الزراعة المستدامة" : "Sustainable Agriculture",
    },
    {
      value: "agriculturalengineering",
      label: isRTL ? "الهندسة الزراعية" : "Agricultural Engineering",
    },
    { value: "soilscience", label: isRTL ? "علوم التربة" : "Soil Science" },
    {
      value: "cropproduction",
      label: isRTL ? "إنتاج المحاصيل" : "Crop Production",
    },
    {
      value: "animalproduction",
      label: isRTL ? "الإنتاج الحيواني" : "Animal Production",
    },
    {
      value: "foodscience",
      label: isRTL ? "علوم الأغذية والتغذية" : "Food Science",
    },
    { value: "ecology", label: isRTL ? "الإيكولوجيا والبيئة" : "Ecology" },
    {
      value: "watermanagement",
      label: isRTL ? "إدارة المياه والموارد الطبيعية" : "Water Management",
    },
    {
      value: "renewableenergy",
      label: isRTL ? "الطاقة المتجددة والبيئة" : "Renewable Energy",
    },
  ];

  // Natural Science specialties
  const naturalScienceSpecialties = [
    { value: "", label: isRTL ? "اختر" : "Select" },
    { value: "physics", label: isRTL ? "الفيزياء" : "Physics" },
    { value: "chemistry", label: isRTL ? "الكيمياء" : "Chemistry" },
    { value: "biology", label: isRTL ? "البيولوجيا (علم الأحياء)" : "Biology" },
    { value: "mathematics", label: isRTL ? "الرياضيات" : "Mathematics" },
    {
      value: "earthscience",
      label: isRTL ? "علوم الأرض والجيولوجيا" : "Earth Sciences",
    },
    { value: "astronomy", label: isRTL ? "علم الفلك والفضاء" : "Astronomy" },
    {
      value: "biotechnology",
      label: isRTL ? "البيوتكنولوجيا (التكنولوجيا الحيوية)" : "Biotechnology",
    },
    {
      value: "environmentalscience",
      label: isRTL ? "العلوم البيئية" : "Environmental Science",
    },
  ];

  // Syrian provinces
  const syrianProvinces = [
    { value: "", label: isRTL ? "اختر" : "Select" },
    { value: "damascus", label: isRTL ? "دمشق" : "Damascus" },
    { value: "ruraldamascus", label: isRTL ? "ريف دمشق" : "Rural Damascus" },
    { value: "aleppo", label: isRTL ? "حلب" : "Aleppo" },
    { value: "homs", label: isRTL ? "حمص" : "Homs" },
    { value: "hama", label: isRTL ? "حماة" : "Hama" },
    { value: "latakia", label: isRTL ? "اللاذقية" : "Latakia" },
    { value: "tartus", label: isRTL ? "طرطوس" : "Tartus" },
    { value: "idlib", label: isRTL ? "إدلب" : "Idlib" },
    { value: "deirezzor", label: isRTL ? "ديرالزور" : "Deir ez-Zor" },
    { value: "raqqa", label: isRTL ? "الرقة" : "Raqqa" },
    { value: "qamishli", label: isRTL ? "القامشلي" : "Qamishli" },
    { value: "hasakah", label: isRTL ? "الحسكة" : "Al-Hasakah" },
    { value: "suwayda", label: isRTL ? "السويداء" : "As-Suwayda" },
    { value: "daraa", label: isRTL ? "درعا" : "Daraa" },
    { value: "quneitra", label: isRTL ? "القنيطرة" : "Quneitra" },
  ];

  useEffect(() => {
    // Animation effect similar to home page
    const surveyTitle = document.querySelector(".survey-title");
    if (surveyTitle) {
      surveyTitle.style.opacity = "0";
      setTimeout(() => {
        surveyTitle.style.opacity = "1";
        surveyTitle.style.animation = "fadeInDown 0.8s ease-out forwards";
      }, 100);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        contributionFields: checked
          ? [...prevData.contributionFields, value]
          : prevData.contributionFields.filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(
          isRTL ? "تم إرسال البيانات بنجاح!" : "Data submitted successfully!"
        );
        setFormData({
          firstName: "",
          lastName: "",
          gender: "",
          ageGroup: "",
          country: "",
          province: "",
          email: "",
          phone: "",
          abroadDuration: "",
          educationLevel: "",
          specialization: "",
          currentJob: "",
          workExperience: "",
          willingToContribute: "",
          contributionFields: [],
          contributionMethod: "",
          additionalComments: "",
          engineeringSpecialty: "",
          medicalSpecialty: "",
          socialScienceSpecialty: "",
          educationSpecialty: "",
          economicsSpecialty: "",
          lawSpecialty: "",
          mediaSpecialty: "",
          artSpecialty: "",
          computerScienceSpecialty: "",
          agricultureSpecialty: "",
          naturalScienceSpecialty: "",
          hasComments: "no",
          commentText: "",
        });
      } else {
        alert(
          isRTL ? "حدث خطأ أثناء إرسال البيانات." : "Error submitting data."
        );
      }
    } catch (error) {
      console.error("Error submitting survey:", error);
      alert(
        isRTL
          ? "فشل إرسال البيانات، الرجاء المحاولة لاحقًا."
          : "Failed to submit data, please try again later."
      );
    }
  };

  // Helper function to render specialty fields based on selected specialization
  const renderSpecialtyFields = () => {
    switch (formData.specialization) {
      case "engineering":
        return (
          <label>
            {isRTL ? "التخصص الهندسي:" : "Engineering Specialty:"}
            <select
              name="engineeringSpecialty"
              value={formData.engineeringSpecialty}
              onChange={handleChange}
              required
            >
              {engineeringSpecialties.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        );
      case "medicine":
        return (
          <label>
            {isRTL ? "التخصص الطبي:" : "Medical Specialty:"}
            <select
              name="medicalSpecialty"
              value={formData.medicalSpecialty}
              onChange={handleChange}
              required
            >
              {medicalSpecialties.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        );
      case "socialscience":
        return (
          <label>
            {isRTL ? "تخصص العلوم الاجتماعية:" : "Social Science Specialty:"}
            <select
              name="socialScienceSpecialty"
              value={formData.socialScienceSpecialty}
              onChange={handleChange}
              required
            >
              {socialScienceSpecialties.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        );
      case "education":
        return (
          <label>
            {isRTL ? "تخصص التعليم:" : "Education Specialty:"}
            <select
              name="educationSpecialty"
              value={formData.educationSpecialty}
              onChange={handleChange}
              required
            >
              {educationSpecialties.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        );
      case "economics":
        return (
          <label>
            {isRTL ? "تخصص الاقتصاد وإدارة الأعمال:" : "Economics Specialty:"}
            <select
              name="economicsSpecialty"
              value={formData.economicsSpecialty}
              onChange={handleChange}
              required
            >
              {economicsSpecialties.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        );
      case "law":
        return (
          <label>
            {isRTL ? "التخصص القانوني:" : "Law Specialty:"}
            <select
              name="lawSpecialty"
              value={formData.lawSpecialty}
              onChange={handleChange}
              required
            >
              {lawSpecialties.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        );
      case "media":
        return (
          <label>
            {isRTL ? "تخصص الإعلام:" : "Media Specialty:"}
            <select
              name="mediaSpecialty"
              value={formData.mediaSpecialty}
              onChange={handleChange}
              required
            >
              {mediaSpecialties.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        );
      case "art":
        return (
          <label>
            {isRTL ? "التخصص الفني:" : "Art Specialty:"}
            <select
              name="artSpecialty"
              value={formData.artSpecialty}
              onChange={handleChange}
              required
            >
              {artSpecialties.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        );
      case "computerscience":
        return (
          <label>
            {isRTL ? "تخصص علوم الحاسوب:" : "Computer Science Specialty:"}
            <select
              name="computerScienceSpecialty"
              value={formData.computerScienceSpecialty}
              onChange={handleChange}
              required
            >
              {computerScienceSpecialties.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        );
      case "agriculture":
        return (
          <label>
            {isRTL ? "التخصص الزراعي:" : "Agriculture Specialty:"}
            <select
              name="agricultureSpecialty"
              value={formData.agricultureSpecialty}
              onChange={handleChange}
              required
            >
              {agricultureSpecialties.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        );
      case "naturalscience":
        return (
          <label>
            {isRTL ? "تخصص العلوم الطبيعية:" : "Natural Science Specialty:"}
            <select
              name="naturalScienceSpecialty"
              value={formData.naturalScienceSpecialty}
              onChange={handleChange}
              required
            >
              {naturalScienceSpecialties.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        );
      default:
        return null;
    }
  };

  return (
    <div className="survey-container" dir={direction}>
      <h1 className="survey-title">
        {isRTL
          ? "استبيان جمع بيانات الخبرات السورية في المهجر"
          : t("survey.pageTitle")}
      </h1>
      <p className="survey-description">
        {isRTL
          ? "يهدف هذا الاستبيان إلى رسم خريطة للخبرات السورية حول العالم، وتفعيلها في خدمة إعادة الإعمار والتنمية. شارك بياناتك، وكن جزءًا من بناء مستقبل سوريا."
          : "This survey aims to map Syrian expertise around the world and activate it in service of reconstruction and development. Share your data and be part of building Syria's future."}
      </p>

      <form onSubmit={handleSubmit}>
        <h2>{isRTL ? "المعلومات الشخصية" : "Personal Information"}</h2>

        <label>
          {t("survey.name")}:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          {t("survey.surname")}:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          {t("survey.sex")}:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">{isRTL ? "اختر" : "Select"}</option>
            <option value="male">{isRTL ? "ذكر" : "Male"}</option>
            <option value="female">{isRTL ? "أنثى" : "Female"}</option>
          </select>
        </label>

        <label>
          {t("survey.AgeGroup")}:
          <select
            name="ageGroup"
            value={formData.ageGroup}
            onChange={handleChange}
            required
          >
            <option value="">{isRTL ? "اختر" : "Select"}</option>
            <option value="18-less">
              {isRTL ? "أقل من 18 سنة" : "Under 18"}
            </option>
            <option value="18-29">
              {isRTL ? "18 - 29 سنة" : "18 - 29 years"}
            </option>
            <option value="30-39">
              {isRTL ? "30 - 39 سنة" : "30 - 39 years"}
            </option>
            <option value="40-49">
              {isRTL ? "40 - 49 سنة" : "40 - 49 years"}
            </option>
            <option value="50-59">
              {isRTL ? "50 - 59 سنة" : "50 - 59 years"}
            </option>
            <option value="60-more">
              {isRTL ? "60 سنة فأكثر" : "60+ years"}
            </option>
          </select>
        </label>

        <label>
          {t("survey.currentCountryOfResidence")}:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          {isRTL ? "المحافظة في سوريا:" : "Syrian Province:"}
          <select
            name="province"
            value={formData.province}
            onChange={handleChange}
            required
          >
            {syrianProvinces.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          {t("survey.email")}:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <small>
            {isRTL
              ? "(سيتم استخدام بريدك الإلكتروني لإرسال الإصدارات والتحديثات المهمّة وكذلك بخصوص مواضيع ذات صلة بمساهمتك في المبادرة)"
              : "(Your email will be used to send important updates and information related to your contribution to the initiative)"}
          </small>
        </label>

        <label>
          {t("survey.phone")} ({isRTL ? "اختياري" : "optional"}):
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <small>
            {isRTL
              ? "(قد نستخدم رقم هاتفك للاتصال بك بخصوص مواضيع تتناسب مع خبراتك ومجالك ذات صلة بمساهمتك في المبادرة)"
              : "(We may use your phone number to contact you regarding topics related to your expertise and your contribution to the initiative)"}
          </small>
        </label>

        <h2>{isRTL ? "الحالة في المهجر" : "Exile Status"}</h2>

        <label>
          {t("survey.durationOfStayInExile")}:
          <select
            name="abroadDuration"
            value={formData.abroadDuration}
            onChange={handleChange}
            required
          >
            <option value="">{isRTL ? "اختر" : "Select"}</option>
            <option value="less-5">
              {isRTL ? "أقل من 5 سنوات" : "Less than 5 years"}
            </option>
            <option value="5-10">
              {isRTL ? "5 - 10 سنوات" : "5 - 10 years"}
            </option>
            <option value="10-15">
              {isRTL ? "10 - 15 سنة" : "10 - 15 years"}
            </option>
            <option value="more-15">
              {isRTL ? "أكثر من 15 سنة" : "More than 15 years"}
            </option>
          </select>
        </label>

        <h2>{isRTL ? "المستوى التعليمي" : "Educational Level"}</h2>

        <label>
          {t("survey.highestDegree")}:
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            required
          >
            <option value="">{isRTL ? "اختر" : "Select"}</option>
            <option value="incomplete">
              {isRTL
                ? "لم أكمل التعليم الأساسي"
                : "Did not complete basic education"}
            </option>
            <option value="basic">
              {isRTL ? "شهادة تعليم أساسي" : "Basic education certificate"}
            </option>
            <option value="secondary">
              {isRTL ? "تعليم ثانوي" : "Secondary education"}
            </option>
            <option value="diploma">
              {isRTL ? "دبلوم مهني" : "Professional diploma"}
            </option>
            <option value="bachelor">
              {isRTL ? "بكالوريوس" : "Bachelor's degree"}
            </option>
            <option value="master">
              {isRTL ? "ماجستير" : "Master's degree"}
            </option>
            <option value="phd">{isRTL ? "دكتوراه" : "PhD"}</option>
          </select>
        </label>

        <label>
          {t("survey.fieldOfStudy")}:
          <select
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
          >
            <option value="">{isRTL ? "اختر" : "Select"}</option>
            <option value="engineering">
              {isRTL ? "الهندسة" : "Engineering"}
            </option>
            <option value="medicine">
              {isRTL ? "الطب والصحة" : "Medicine and Health"}
            </option>
            <option value="socialscience">
              {isRTL
                ? "العلوم الاجتماعية والإنسانية"
                : "Social and Human Sciences"}
            </option>
            <option value="education">
              {isRTL ? "التعليم والتربية" : "Education"}
            </option>
            <option value="economics">
              {isRTL
                ? "الاقتصاد وإدارة الأعمال"
                : "Economics and Business Administration"}
            </option>
            <option value="law">{isRTL ? "الحقوق والقانون" : "Law"}</option>
            <option value="media">
              {isRTL ? "الإعلام والصحافة" : "Media and Journalism"}
            </option>
            <option value="art">
              {isRTL ? "الفنون والتصميم" : "Arts and Design"}
            </option>
            <option value="computerscience">
              {isRTL
                ? "علوم الحاسوب والتكنولوجيا"
                : "Computer Science and Technology"}
            </option>
            <option value="agriculture">
              {isRTL ? "الزراعة والبيئة" : "Agriculture and Environment"}
            </option>
            <option value="naturalscience">
              {isRTL
                ? "العلوم الطبيعية والتطبيقية"
                : "Natural and Applied Sciences"}
            </option>
          </select>
        </label>

        {renderSpecialtyFields()}

        <h2>{isRTL ? "الخبرة العملية" : "Work Experience"}</h2>

        <label>
          {t("survey.yourCurrentRole")}:
          <select
            name="currentJob"
            value={formData.currentJob}
            onChange={handleChange}
            required
          >
            <option value="">{isRTL ? "اختر" : "Select"}</option>
            <option value="health">
              {isRTL ? "الصحة والطب" : "Health and Medicine"}
            </option>
            <option value="engineering">
              {isRTL ? "الهندسة والتكنولوجيا" : "Engineering and Technology"}
            </option>
            <option value="education">
              {isRTL
                ? "التعليم والبحث الأكاديمي"
                : "Education and Academic Research"}
            </option>
            <option value="business">
              {isRTL ? "الأعمال والتجارة" : "Business and Commerce"}
            </option>
            <option value="law">
              {isRTL ? "القانون والسياسة" : "Law and Politics"}
            </option>
            <option value="arts">
              {isRTL ? "الفنون والإعلام" : "Arts and Media"}
            </option>
            <option value="humanitarian">
              {isRTL
                ? "العمل الإنساني والتنمية"
                : "Humanitarian Work and Development"}
            </option>
            <option value="publicservice">
              {isRTL
                ? "الخدمات العامة والإدارة"
                : "Public Services and Administration"}
            </option>
            <option value="unemployed">
              {isRTL ? "لا أعمل حاليًا" : "Currently Unemployed"}
            </option>
          </select>
        </label>

        <label>
          {t("survey.yearsOfExperience")}:
          <select
            name="workExperience"
            value={formData.workExperience}
            onChange={handleChange}
            required
          >
            <option value="">{isRTL ? "اختر" : "Select"}</option>
            <option value="less-3">
              {isRTL ? "أقل من 3 سنوات" : "Less than 3 years"}
            </option>
            <option value="3-7">{isRTL ? "3 - 7 سنوات" : "3 - 7 years"}</option>
            <option value="8-15">
              {isRTL ? "8 - 15 سنة" : "8 - 15 years"}
            </option>
            <option value="more-15">
              {isRTL ? "أكثر من 15 سنة" : "More than 15 years"}
            </option>
          </select>
        </label>

        <h2>{isRTL ? "المساهمة في سوريا" : "Contribution to Syria"}</h2>

        <label>
          {t("survey.desireToContribute")}
          <select
            name="willingToContribute"
            value={formData.willingToContribute}
            onChange={handleChange}
            required
          >
            <option value="">{isRTL ? "اختر" : "Select"}</option>
            <option value="yes">{isRTL ? "نعم" : "Yes"}</option>
            <option value="no">{isRTL ? "لا" : "No"}</option>
            <option value="unsure">
              {isRTL ? "غير متأكد حالياً" : "Not sure yet"}
            </option>
          </select>
        </label>

        {formData.willingToContribute === "yes" && (
          <>
            <label>
              {isRTL
                ? "ما هي المجالات التي ترغب في المساهمة فيها؟"
                : "Which fields would you like to contribute to?"}
              <select
                name="contributionFields"
                multiple
                value={formData.contributionFields}
                onChange={(e) => {
                  const options = e.target.options;
                  const selectedValues = [];
                  for (let i = 0; i < options.length; i++) {
                    if (options[i].selected) {
                      selectedValues.push(options[i].value);
                    }
                  }
                  setFormData({
                    ...formData,
                    contributionFields: selectedValues,
                  });
                }}
                required={formData.willingToContribute === "yes"}
              >
                <option value="urban">
                  {isRTL
                    ? "التخطيط العمراني وإعادة الإعمار"
                    : "Urban Planning and Reconstruction"}
                </option>
                <option value="education">
                  {isRTL ? "التعليم والتدريب" : "Education and Training"}
                </option>
                <option value="health">
                  {isRTL
                    ? "الصحة والخدمات الطبية"
                    : "Health and Medical Services"}
                </option>
                <option value="economy">
                  {isRTL
                    ? "الاقتصاد وريادة الأعمال"
                    : "Economy and Entrepreneurship"}
                </option>
                <option value="technology">
                  {isRTL
                    ? "التكنولوجيا والتحول الرقمي"
                    : "Technology and Digital Transformation"}
                </option>
                <option value="law">
                  {isRTL ? "القانون والحوكمة" : "Law and Governance"}
                </option>
                <option value="media">
                  {isRTL ? "الإعلام والتواصل" : "Media and Communication"}
                </option>
              </select>
              <small>
                {isRTL
                  ? "(يمكنك اختيار أكثر من مجال باستخدام مفتاح Ctrl أو Command)"
                  : "(You can select multiple fields using Ctrl or Command key)"}
              </small>
            </label>

            <label>
              {isRTL
                ? "ما هي الطريقة التي تفضلها للمساهمة؟"
                : "What is your preferred method of contribution?"}
              <select
                name="contributionMethod"
                value={formData.contributionMethod}
                onChange={handleChange}
                required={formData.willingToContribute === "yes"}
              >
                <option value="">{isRTL ? "اختر" : "Select"}</option>
                <option value="remote">
                  {isRTL ? "تقديم استشارات عن بعد" : "Remote Consulting"}
                </option>
                <option value="onsite">
                  {isRTL
                    ? "السفر إلى سوريا والمساهمة ميدانيًا"
                    : "Travel to Syria and Contribute On-site"}
                </option>
                <option value="financial">
                  {isRTL
                    ? "تقديم دعم مالي أو لوجستي"
                    : "Provide Financial or Logistical Support"}
                </option>
                <option value="conferences">
                  {isRTL
                    ? "المشاركة في مؤتمرات وورش عمل"
                    : "Participate in Conferences and Workshops"}
                </option>
              </select>
            </label>
          </>
        )}

        <h2>{isRTL ? "معلومات إضافية" : "Additional Information"}</h2>

        <label>
          {isRTL
            ? "هل لديك أي اقتراحات أو تعليقات تود مشاركتها؟"
            : "Do you have any suggestions or comments you would like to share?"}
          <select
            name="hasComments"
            value={formData.hasComments}
            onChange={handleChange}
          >
            <option value="no">
              {isRTL ? "لا يوجد تعليقات" : "No comments"}
            </option>
            <option value="yes">
              {isRTL
                ? "نعم، أود مشاركة تعليق"
                : "Yes, I would like to share a comment"}
            </option>
          </select>
        </label>

        {formData.hasComments === "yes" && (
          <label>
            {t("survey.moreDetails")}:
            <textarea
              name="commentText"
              value={formData.commentText}
              onChange={handleChange}
              rows="4"
            />
          </label>
        )}

        <div className="form-footer">
          <p className="privacy-notice">
            {isRTL
              ? "شكرًا لمشاركتك! سيتم استخدام هذه البيانات بسرية تامة لدعم جهود التنمية وإعادة الإعمار."
              : "Thank you for your participation! This data will be used confidentially to support development and reconstruction efforts."}
          </p>
          <button type="submit">{t("survey.submit")}</button>
        </div>
      </form>
    </div>
  );
};

export default SurveyPage;
