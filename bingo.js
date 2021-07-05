checkList = []

const makeMasu = (i) => {
    const masu = document.createElement("div");

    // コマの番号を５で割った余りからどの列かを出す
    const col = i % 5;
    const randomNumber = Math.floor(Math.random() * 15 + col * 15 + 1);

    checkList.push(randomNumber);
    masu.textContent = randomNumber;

    masu.addEventListener("click", (evt) => {
        evt.target.textContent = "◯";
        checkList[i] = "◯"
        // 期待通りにcheckListが動いているか確認
        console.log(checkList)
    })
    document.querySelector(".bingocard").appendChild(masu);
}

document.querySelector(".bingocard").addEventListener("click", ()=>{
    //タテのチェック
    colA = [checkList[0], checkList[5], checkList[10], checkList[15], checkList[20]];
    colB = [checkList[1], checkList[6], checkList[11], checkList[16], checkList[21]];
    colC = [checkList[2], checkList[7], checkList[12], checkList[17], checkList[22]];
    colD = [checkList[3], checkList[8], checkList[13], checkList[18], checkList[23]];
    colE = [checkList[4], checkList[9], checkList[14], checkList[19], checkList[24]];
    //ヨコのチェック
    rowA = [checkList[0], checkList[1], checkList[2], checkList[3], checkList[4]];
    rowB = [checkList[5], checkList[6], checkList[7], checkList[8], checkList[9]];
    rowC = [checkList[10], checkList[11], checkList[12], checkList[13], checkList[14]];
    rowD = [checkList[15], checkList[16], checkList[17], checkList[18], checkList[19]];
    rowE = [checkList[20], checkList[21], checkList[22], checkList[23], checkList[24]];
    //ナナメのチェック
    diaA = [checkList[0], checkList[6], checkList[12], checkList[18], checkList[24]];
    diaB = [checkList[4], checkList[8], checkList[12], checkList[16], checkList[20]];


    function checkWin(checkArray){
        if(checkArray.every(n=>n==="◯")){
            checkList.fill("1");
            const bingo = document.createElement("div");
            bingo.textContent = "ビンゴ!";
            bingo.setAttribute("class", "bingo");
            document.body.appendChild(bingo);
        }
    }

    checkWin(colA);
    checkWin(colB);
    checkWin(colC);
    checkWin(colD);
    checkWin(colE);
    checkWin(rowA);
    checkWin(rowB);
    checkWin(rowC);
    checkWin(rowD);
    checkWin(rowE);
    checkWin(diaA);
    checkWin(diaB);
});

for (let i = 0; i < 25; i++) {
    makeMasu(i);
}