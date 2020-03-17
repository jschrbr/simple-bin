$(document).ready(function() {
  let result = 0;
  function handleSelect(e) {
    e.preventDefault();
    let currentVal = parseInt($(".results").text());
    let selectedVal = parseInt(this.id);
    if (this.attributes[1].value === "false") {
      result = currentVal + selectedVal;
      this.attributes[1].value = "true";
      $(this.firstChild.nextSibling).addClass("pink white-text");
    } else {
      result = currentVal - selectedVal;
      this.attributes[1].value = "false";
      $(this.firstChild.nextSibling).removeClass("pink white-text");
    }
    $(".results").text(result);
  }
  $(".number-select").on("click", handleSelect);

  function handleChange(el, change) {
    el.text("").append(change);
  }

  function changeNum() {
    let children = $(".inputs")
      .children()
      .find("div.chip");
    let indexLength = children.length - 1;
    console.log(this.id);
    switch (this.id) {
      case "bin":
        children.each(function(i, el) {
          handleChange($(el), "1");
        });
        break;
      case "dec":
        children.each(function(i, el) {
          handleChange($(el), Math.pow(2, indexLength - i));
        });
        break;
      default:
        children.each(function(i, el) {
          let sup = $("<sup>").append(indexLength - i);
          handleChange($(el), [2, sup]);
        });
        break;
    }
  }

  $(".btn").on("click", changeNum);
});
