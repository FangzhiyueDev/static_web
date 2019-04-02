/**
 * 加载完成后触发该显示
 */
window.onload = function () {

    var dies = document.getElementsByClassName("die");
    var die_divisions = document.getElementsByClassName("dis_image_division");
    alert(die_divisions.length)
    for (var i = 0; i < dies.length; i++) {
        dies[i].tag = i;
        dies[i].onclick = function (ev) {
            var index = this.tag;
            if (die_divisions[index].className != "zhedieDiv") {
                die_divisions[i].className = "zhedieDiv"
            } else {
                die_divisions[index].className = "dis_image_division"
            }
        }

    }

}