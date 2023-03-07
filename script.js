const addElement = (headingId, text) => {

    const head = document.getElementById(headingId);

    const newHeading = document.createElement("h1");

    const newText = document.createTextNode(text);

    newHeading.appendChild(newText);

    head.appendChild(newHeading);

}

addElement("headingId", "This is the heading");


const addParagraph = (paragraphOne, paratext) => {

    const para = document.getElementById(paragraphOne);

    const newPara = document.createElement("p");

    const newParaText = document.createTextNode(paratext);

    newPara.appendChild(newParaText);

    para.appendChild(newPara);
}

addParagraph("paragraphOne", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, commodi eum hic dolores officia quam facilis, similique impedit nam qui neque excepturi a consequatur sunt quibusdam beatae accusantium. Atque, pariatur.");


const addList = (firstList, listItems) => {

    const listOne = document.getElementById(firstList);

    const newList = document.createElement("ul")

    listItems.forEach((item) => {
        const newListItem = document.createElement("li");

        const newListItemText = document.createTextNode(item);

        newListItem.appendChild(newListItemText);
        newList.appendChild(newListItem);
    })

    listOne.appendChild(newList);

}

addList("firstList", ["This is first line","This is second line","This is third line","This is fourth line"])


const newSecondPara = (paragraphTwo, paraTwoText) => {

    const newPara = document.getElementById(paragraphTwo);
    const newParaTwo = document.createElement("p")
    const newParaTwoText = document.createTextNode(paraTwoText);

    newParaTwo.appendChild(newParaTwoText);
    newPara.appendChild(newParaTwo);
}
newSecondPara("paragraphTwo","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, commodi eum hic dolores officia quam facilis, similique impedit nam qui neque excepturi a consequatur sunt quibusdam beatae accusantium. Atque, pariatur.")


const addSideheading = (sideheadingOne, newSideheadingText) => {
    
    const sideHeading = document.getElementById(sideheadingOne);

    const newSideHeading = document.createElement("h3");

    const sideHeadingText = document.createTextNode(newSideheadingText);

    newSideHeading.appendChild(sideHeadingText);
    sideHeading.appendChild(newSideHeading);
}
addSideheading("sideheadingOne","This is the side heading");