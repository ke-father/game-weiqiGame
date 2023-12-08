import {GoBoardAnchorPoint} from "./ClassForGame.js";

let GoBoardAnchorPointInstance = GoBoardAnchorPoint.getInstance()
// 关于锚点点击
export const AnchorPointClick = (id) => {
    console.log(id)
    console.log(GoBoardAnchorPointInstance.anchorPointList.find(i => i.id === id))
}
