assetsDir = 'assets/tech/'
loadAssets()

//document.body.style.backgroundImage = "url(" + BackgroundSource + ")",
$("#gamingOnly").hide(),
    $("#gamingOnly2").hide(),
    $("#onlygaming3").hide(),
    document.getElementById("relvHelpBox").innerHTML = "קישור רלוונטי לכתבה, לדוגמה: אתר הנושא, קישור לקניית הפריט טכנולוגייה, בלוג על הנושא.<br />שימו לב שהמחולל מוסיף בעצמו נקודתיים בסוף התיאור!<br />בתיבה הימנית הכניסו את תיאור הכתבה ובתיבה השמאלית את הקישור עצמו.";

/*document.getElementById("updatesforums").innerHTML = ' מלאו את הכתבות האחרונות מאחד מפורומי העדכונים: ',
    $.get("SelectTech.txt", EmbedSelect, "text")*/

document.getElementById("updatesforums2").innerHTML = `
                                            <a href="https://www.fxp.co.il/forumdisplay.php?f=4607" class="dept">עדכוני
                                        מולטימדיה,</a> <a href="https://www.fxp.co.il/forumdisplay.php?f=4603"
                                                          class="dept">עדכוני
                                        אנדרואיד,</a> <a href="https://www.fxp.co.il/forumdisplay.php?f=4602"
                                                         class="dept">עדכוני
                                        Apple,</a> <a href="https://www.fxp.co.il/forumdisplay.php?f=5073" class="dept">עדכוני
                                        מחשבים וחומרה</a>
`
//document.getElementById("dept-gaming").src = "images/dept-tech.png",
//document.getElementById("dept-gaming").alt = "צוות טכנלוגיה",

document.title = 'מחולל צוות טכנולוגיה'

