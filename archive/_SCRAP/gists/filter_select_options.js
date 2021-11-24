export function bindSelectDataFilter(select1, select2, dataAttr, backFilter) {
  const $select1 = $(select1);
  const $select2 = $(select2);
  const $options = $select2.find("option"); // we need to cache these outside of the DOM; unfortunately this will break <optgroups>
  const changeFunc = () => {
    const $oldOption = $select2.find("option:selected");
    const selectValue = $select1.val();
    if (selectValue && selectValue != "0") {
      $select2.html(
        $options.filter(function () {
          const dataValue = $(this).data(dataAttr);
          return !this.value || !dataValue || selectValue == dataValue;
        })
      );
    } else {
      $select2.html($options);
    }
    if ($oldOption.isDetached()) {
      $select2.find("option:enabled:first").prop("selected", true);
    }
  };
  $select1.on("change", changeFunc);
  changeFunc();
  if (backFilter) {
    $select2.on("change", () => {
      const dataValue = $select2.find("option:selected").data(dataAttr);
      if (dataValue) {
        $select1
          .find("option:enabled")
          .filter(function () {
            return this.value == dataValue;
          })
          .first()
          .prop("selected", true);
      }
    });
  }
}

// helper function
$.fn.isDetached = function () {
  return $.contains(document.documentElement, this);
};
