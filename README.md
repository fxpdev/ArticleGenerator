# FXP – Official Article Generator for the Content Team

[![N|Solid](https://fxpdev.github.io/interfacePicturesGenerator//images/Content.png)](https://nodesource.com/products/nsolid)

## New Features

- Added a [gaming template][gam].
- Created a new [interface pictures generator][ipg].

---

## How to Add a New Department

Follow these steps to add a new department to the Article Generator:

1. **Create a New Directory:**  
   - Inside the `assets` folder, create a new directory.  
   - Base its content on one of the existing directories for consistency.

2. **Update the Department List:**  
   - Add the department name to the `deptList` array in the `scriptMain.js` file.

3. **Modify the Submission Logic:**  
   - Add the department to the `submitForm` function in `scriptMain.js`.

4. **Adjust the ID Handling:**  
   - Include the department under the `getId` function in `scriptMain.js` (above `window.onbeforeunload`).

---

## Technologies Used

The Article Generator uses a variety of web technologies to function properly:

- [HTML][HTM]
- [JavaScript][JavaScript]
- [CSS][CS]
- jQuery
- Proxy
- Some BitBake scripting

---

## License

Licensed under the [Apache License 2.0][lic].

---

**Open Source, Hell Yeah!**

[//]: # (These reference links are stripped out when rendered but kept for version control purposes)

[HTM]: <https://github.com/fxpdev/ArticleGenerator/blob/master/index.html>
[CS]: <https://github.com/fxpdev/ArticleGenerator/blob/master/%D7%9E%D7%97%D7%95%D7%9C%D7%9C%20%D7%A6%D7%95%D7%95%D7%AA%20%D7%AA%D7%95%D7%9B%D7%9F_files/styleMain.css>
[JavaScript]: <https://github.com/fxpdev/ArticleGenerator/blob/master/%D7%9E%D7%97%D7%95%D7%9C%D7%9C%20%D7%A6%D7%95%D7%95%D7%AA%20%D7%AA%D7%95%D7%9B%D7%9F_files/scriptMain.js>
[gam]: <https://fxpdev.github.io/ArticleGenerator/?dept=gaming>
[ipg]: <https://fxpdev.github.io/interfacePicturesGenerator//>
[lic]: <https://github.com/fxpdev/ArticleGenerator/blob/master/LICENSE>
