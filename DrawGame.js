// 标准棋盘19路
const GoBoardRoadNumber = 19

// 绘制棋盘
export const DrawGoBoard = () => {
    const GoBoard = document.querySelector('#GoBoard')

    // 横向
    for (let i = 1; i < GoBoardRoadNumber; i++) {
        // 纵向
        for (let k = 1; k < GoBoardRoadNumber; k++) {
            // 创造棋盘
            const GoBoardModule = document.createElement('div')
            GoBoardModule.className = `GoBoardModule column${i}-${k}`
            GoBoard.appendChild(GoBoardModule)
        }
    }



    console.log(GoBoard)
}
