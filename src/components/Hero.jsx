import PC from "../assets/PCPng.png";
import phone from "../assets/phonePNG.png";
import ServiceCard from "./serviceCard.jsx"

export default function Hero() {
  return (
    <div className="heroContainer">
      <div className="rightHero">
        <h1 className="mainTitle">אנחנו הופכים עסקים למותגים</h1>
        <h2 className="subTitle">
          אנחנו יוצרים אתרים, מותגים, וחוויות דיגיטליות שמחברות בין עיצוב מדויק
          לפיתוח חכם בהתאמה מלאה לבקשות שלכם
        </h2>

        <div className="heroServices">
    <ServiceCard
    number="01"
    type="WEB"
    title="אתרים וחוויות דיגיטליות"
    text="אתרי תדמית, דפי נחיתה וחוויות אינטראקטיביות שמחברות בין עיצוב, פיתוח וביצועים"
    pill="Front-end / SEO / CMS"
  />

  <ServiceCard
    number="02"
    type="BRAND"
    title="מיתוג וזהות חזותית"
    text="לוגו, צבעוניות, טיפוגרפיה ושפה גרפית שמייצרת נוכחות עקבית ומקצועית"
    pill="Identity / Guidelines"
  />

  <ServiceCard
    number="03"
    type="DIGITAL"
    title="UX / UI ועיצוב למסכים"
    text="מבנה ברור, היררכיה נכונה וממשקים שנראים מעולה בלי להקריב שימושיות או מהירות"
    pill="Wireframes / UI Systems"
  />
</div>
      </div>

      <div className="leftHero">
        <div className="screenContainer">
          <img src={phone} alt="phone" className="phone" />
          <img src={PC} alt="PC" className="PC" />
        </div>
      </div>
    </div>
  );
}
