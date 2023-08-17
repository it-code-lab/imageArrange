function showImg(){

    let containerCnt = document.getElementById("containerCnt").value;
    let containerBorder = document.getElementById("containerBorder").value;
    let imgCnt = document.getElementById("imgCnt").value;
    let lastCntImgCnt = document.getElementById("lastCntImgCnt").value;
    let imgNm = document.getElementById("imgNm").value;
    let imgWidth = document.getElementById("imgWidth").value;

    //let imageElement = '<img src="img/' + imgNm + '" />';

    let imageElement = '<img style = "width: ' + imgWidth + 'px " src="' + imgNm + '" />';

    let newHTML = '';

    for (let index = 0; index < containerCnt - 1; index++) {
        newHTML = newHTML + '<div class="imgContainer" style="display: flex; flex-wrap: wrap; margin:5px; padding: 5px; border:' + containerBorder + ' ">';

        for (let j = 0; j < imgCnt; j++) {
            newHTML = newHTML + imageElement ;   
        }

        newHTML = newHTML + '</div>';

    }

    newHTML = newHTML + '<div class="imgContainer" style="display: flex; flex-wrap: wrap; margin:5px; padding: 2px; border:' + containerBorder + ' ">';

    for (let j = 0; j < lastCntImgCnt; j++) {
        newHTML = newHTML + imageElement ;   
    }

    newHTML = newHTML + '</div>';

    document.getElementById("outerContainer").innerHTML = newHTML;
}

function copyOuterHTML(){
    navigator.clipboard.writeText(document.getElementById("copyContainerHTML").innerHTML);
}