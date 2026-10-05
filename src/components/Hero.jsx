import PC from "../assets/PC.svg";
export default function Hero()
{
   return(
    <div className = "heroContainer">
        <div className = "rightHero">
        <h1 className = "mainTitle">אנחנו הופכים עסקים למותגים</h1>
        <h2 className = "subTitle">אנחנו יוצרים אתרים, מותגים, וחוויות דיגיטליות שמחברות בין עיצוב מדויק לפיתוח חכם בהתאמה מלאה לבקשות שלכם</h2>
        </div>

        <div className ="leftHero">
            <div className="PCcontainer">
            <img src= {PC} alt="PC" className="PC"/>
            </div>
        </div>
    </div>
   )
}