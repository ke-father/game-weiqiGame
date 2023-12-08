// 棋子
export class ChessPieces {
}

// 锚点
export class AnchorPoint {
    // 是否已占用
    occupyState = false
}

// 棋盘锚点 总
export class GoBoardAnchorPoint {
    static instance;
    anchorPointList = []

    constructor() {
        return GoBoardAnchorPoint.instance
    }

    static getInstance () {
        if (!GoBoardAnchorPoint.instance) {
            GoBoardAnchorPoint.instance = new GoBoardAnchorPoint()
        }
        return GoBoardAnchorPoint.instance
    }

    add (anchorPoint) {
        this.anchorPointList.push(anchorPoint)
    }

    find (id) {
        return this.anchorPointList.find(i => i.id === id)
    }

    findOccupyState (id) {
        return this.anchorPointList.find(i => i.id === id).anchorPoint.occupyState
    }
}
