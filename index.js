let people = [
    {
      "firstName" : "Jhon",
      "lastName" : "Doe",
      "age" : 40,
      "mail" : "jhon.doe@example.com",
      "address" : "Usa",
      "phone" : "555-785-99-68",
      "birthDate" : "01.05.1984"
    },
    {
      "firstName" : "Leyla",
      "lastName" : "Huseyn",
      "age" : 22,
      "mail" : "leyla.huseyn@example.com",
      "address" : "Azerbaijan",
      "phone" : "555-123-12-13",
      "birthDate" : "04.10.2002"
    },
    {
      "firstName" : "Ali",
      "lastName" : "Aliyev",
      "age" : 33,
      "mail" : "ali.aliyev@example.com",
      "address" : "Azerbaijan",
      "phone" : "555-555-55-55",
      "birthDate" : "05.12.1991"
    },
     {
      "firstName" : "Deniz",
      "lastName" : "Cakir",
      "age" : 18,
      "mail" : "deniz.cakir@example.com",
      "address" : "Turkey",
      "phone" : "555-444-44-44",
      "birthDate" : "15.11.2006"
    },
    {
      "firstName" : "Jane",
      "lastName" : "Mila",
      "age" : 30,
      "mail" : "jane.mila@example.com",
      "address" : "Usa",
      "phone" : "555-785-99-68",
      "birthDate" : "11.01.1994"
    },
]

let root = document.querySelector('root');
let table = document.createElement('table');
table.setAttribute('border','1');

let tr = document.createElement('tr');
let headers = ['First Name', 'Last Name', 'Age', 'Mail', 'Address', 'Phone', 'Birth Date'];

headers.forEach(Htext=>{
    let th = document.createElement('th');
    th.textContent = Htext;
    tr.appendChild(th);
})
table.appendChild(tr)


people.forEach(person=>{
    let rows = document.createElement('tr')

    Object.values(person).forEach(Rtext=>{
        let td = document.createElement('td');
        td.textContent = Rtext;
        rows.appendChild(td)

    })
    table.appendChild(rows)
})
root.appendChild(table)