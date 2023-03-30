var TOP = 'Top';
var RIGHT = 'Right';
var Directions;
(function (Directions) {
    Directions[Directions["TOP"] = 0] = "TOP";
    Directions[Directions["RIGHT"] = 1] = "RIGHT";
    Directions[Directions["LEFT"] = 2] = "LEFT";
    Directions[Directions["BOTTOM"] = 3] = "BOTTOM";
})(Directions || (Directions = {}));
// enum TimingFunc {		// строковый энам
// 	EASE = 'ease',
// 	EASE_IN = 'ease-in',
// 	LINEAR = 'linear',
// }
function frame(elem, dir, tFunc) {
    if (dir === Directions.RIGHT) {
        console.log(tFunc);
    }
}
frame('id', Directions.RIGHT, 10 /* TimingFunc.EASE_IN */);
