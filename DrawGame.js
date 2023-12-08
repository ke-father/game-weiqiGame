import {GoBoardAnchorPoint, AnchorPoint} from "./ClassForGame.js";
import {AnchorPointClick} from "./ActionGame.js";

// 标准棋盘19路
const GoBoardRoadNumber = 19

let GoBoardAnchorPointInstance = GoBoardAnchorPoint.getInstance()

// 绘制棋盘
export const DrawGoBoard = () => {
    const GoBoardMainEle = document.querySelector('#GoBoard').querySelector('.GoBoard_main')
    const GoBoardAnchorPointEle = document.querySelector('#GoBoard').querySelector('.GoBoard_Anchor_point')

    // 横向
    for (let i = 1; i < GoBoardRoadNumber + 1; i++) {
        // 纵向
        for (let k = 1; k < GoBoardRoadNumber + 1; k++) {
            if (i !== 1 && k !== 1) {
                // 创造棋盘
                const GoBoardModuleDiv = document.createElement('div')
                GoBoardModuleDiv.className = `GoBoardModule column${i}-${k}`
                GoBoardMainEle.appendChild(GoBoardModuleDiv)
            }

            // 绘制锚点
            const GoBoardAnchorPointLabel = document.createElement('label')
            GoBoardAnchorPointLabel.className = `GoBoardAnchorPoint anchorPoint${i}-${k}`
            GoBoardAnchorPointLabel.style.top = (i - 1) * 50 - 20 + 'px'
            GoBoardAnchorPointLabel.style.left = (k - 1) * 50 - 20 + 'px'

            // 关于锚点点击
            GoBoardAnchorPointLabel.addEventListener('click', (e) => AnchorPointClick(`anchorPoint${i}-${k}`))

            // 创建锚点
            let anchorPoint = new AnchorPoint()
            GoBoardAnchorPointInstance.add({
                id: `anchorPoint${i}-${k}`,
                anchorPoint: anchorPoint,
                element: GoBoardAnchorPointLabel
            })

            GoBoardAnchorPointEle.appendChild(GoBoardAnchorPointLabel)
        }
    }

    console.log(GoBoardAnchorPointInstance.anchorPointList)
}


