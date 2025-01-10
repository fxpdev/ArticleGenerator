assetsDir = 'assets/kos/'
loadAssets()

//document.body.style.backgroundImage = "url(" + BackgroundSource + ")",
document.getElementById("relvHelpBox").innerHTML = "קישור רלוונטי לכתבה, לדוגמה: אתר הנושא, קישור לקניית הפריט טכנולוגייה, בלוג על הנושא.<br />שימו לב שהמחולל מוסיף בעצמו נקודתיים בסוף התיאור!<br />בתיבה הימנית הכניסו את תיאור הכתבה ובתיבה השמאלית את הקישור עצמו.";

/*document.getElementById("updatesforums").innerHTML = ' מלאו את הכתבות האחרונות מאחד מפורומי העדכונים: ',
    $.get("SelectTech.txt", EmbedSelect, "text")*/

document.getElementById("updatesforums2").innerHTML = `
                                            <a href="https://www.fxp.co.il/forumdisplay.php?f=9745">חדשות קולנוע וסדרות</a> 
`

document.title = 'מחולל צוות קולנוע וסדרות'

