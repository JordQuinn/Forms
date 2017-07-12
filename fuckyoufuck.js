let fields = document.querySelector('#fields')

let htmlStr = '<form>'

formData.forEach(function(item){
  if (item.type === 'text' || item.type === 'email' || item.type === 'tel') {
    htmlStr += `<input type="${item.type}" placeholder="${item.label}" id="${item.id}" />`
  }
  if (item.type === 'textarea') {
    htmlStr += `<textarea id="${item.id}" placeholder="${item.label}"></textarea>`
  }
  if (item.type === 'select') {
    htmlStr += `<select id="${item.id}">`
    htmlStr += `<option value="">${item.label}</option>`
    item.options.forEach(function(option){
      htmlStr += `<option value="${option.value}">${option.label}</option>`
    })
    htmlStr += '</select>'
  }
})

htmlStr += '</form>'

fields.innerHTML = htmlStr
