// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Favourite Marvel Character",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

let fields        = document.getElementById('fields')
let htmlString    = "<form>"

formData.forEach(function(item){
  if(item.type === "text" || item.type === "email" || item.type === "tel"){
    htmlString += `<input type ="${item.type}" placeholder ="${item.label}" id = "${item.id}" />`
  }
  if(item.type === "textarea"){
    htmlString += `<textarea id="${item.id}" placeholder ="${item.label}"></textarea>`
  }
  if(item.type === "select") {
    htmlString += `<select id ="${item.id}">`
    htmlString += `<option value = "">${item.label}</option>`
    item.options.forEach(function(option){
      htmlString += `<option value="${option.value}">${option.label}</option>`
    })
    htmlString += `</select>`
  }
})
htmlString == `</form>`

fields.innerHTML = htmlString

// -------- Your Code Goes Below this Line --------
