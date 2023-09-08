var stactk1 = []
var stactk2 = []
function push(node)
{
    stactk1.push(node)
}
function pop()
{
    if(stactk2.length == 0) {
        while(stactk1.length != 0) {
            stactk2.push(stactk1.pop())
        }
    }
    if (stactk2.length != 0) {
        return stactk2.pop()
    }
}
module.exports = {
    push : push,
    pop : pop
};