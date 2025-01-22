assetsDir = 'assets/tech/'
loadAssets()

//document.body.style.backgroundImage = "url(" + BackgroundSource + ")",
document.getElementById("relvHelpBox").innerHTML = "קישור רלוונטי לכתבה, לדוגמה: אתר הנושא, קישור לקניית הפריט טכנולוגיה, בלוג על הנושא.<br />שימו לב שהמחולל מוסיף בעצמו נקודתיים בסוף התיאור!<br />בתיבה הימנית הכניסו את תיאור הכתבה ובתיבה השמאלית את הקישור עצמו.";

/*document.getElementById("updatesforums").innerHTML = ' מלאו את הכתבות האחרונות מאחד מפורומי העדכונים: ',
    $.get("SelectTech.txt", EmbedSelect, "text")*/

document.getElementById("updatesforums2").innerHTML = `
                                            <a href="https://www.fxp.co.il/forumdisplay.php?f=4607" class="dept">עדכוני
    טכנולוגיה</a>, <a href="https://www.fxp.co.il/forumdisplay.php?f=5073" class="dept">חדשות
    מחשבים וחומרה</a>
`


document.title = 'מחולל צוות טכנולוגיה'

