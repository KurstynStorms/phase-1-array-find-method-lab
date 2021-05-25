function superbowlWin(record) {
    function containsWin(element, index, array){
        return (element.result === 'W')
    }
    let superbowlWin = record.find(containsWin)
        console.log(superbowlWin)

if (typeof superbowlWin === "object") {
    return superbowlWin.year
} else {
    return undefined
    }
}