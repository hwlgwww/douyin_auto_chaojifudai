exports.click = (element) => {
    var rect = element.bounds();
    var x = rect.centerX();
    var y = rect.centerY();
    click(x, y)
}