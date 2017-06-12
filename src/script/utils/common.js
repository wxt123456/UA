var common = {
  renderBody: function (tpl) {
    $('body').prepend(tpl)
  },
  render: function (obj, tpl) {
    obj.innerHTML = tpl
  }
}

module.exports = common
