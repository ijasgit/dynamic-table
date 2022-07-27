var table = document.createElement('table');
var tr = document.createElement('tr');

var arrheader = ['Photo', 'Name', 'Mobile', 'Batch','Git', 'Refby', 'Location', 'Placement_status'];
var array = [{
  img: 'image/arun.jpeg',
  Name: 'ijas',
  mobile: '85214578',
  Batch: 'FSD-10',
  Git: 'link',
  Refby: 'FB',
  Location:'Chennai',
  placment_status:'proces'
},
  {
    img: 'image/clenton.jpg ',
    Name: 'Arun',
    mobile: '85214578',
    Batch: 'FSD-10',
    Git: 'link',
    Refby: 'FB',
    Location:'Chennai',
    placment_status:'proces'
  },
  {
    img: 'image/kumares.jpeg',
    Name: 'gopi',
    mobile: '85214578',
    Batch: 'FSD-10',
    Git: 'link',
    Refby: 'FB',
    Location:'Chennai',
    placment_status:'proces'
  },
  {
    Photo: 1,
    Name: 'ram',
    mobile: '85214578',
    Batch: 'FSD-10',
    Git: 'link',
    Refby: 'FB',
    Location:'Chennai',
    placment_status:'proces'
  },
  {
    Photo: 1,
    Name: 'siva',
    mobile: '85214578',
    Batch: 'FSD-10',
    Git: 'link',
    Refby: 'FB',
    Location:'Chennai',
    placment_status:'proces'
  }
];

for (var j = 0; j < arrheader.length; j++) {
  var th = document.createElement('th');  

  var text = document.createTextNode(arrheader[j]);  
  th.appendChild(text);
  tr.appendChild(th);
}
table.appendChild(tr);

// for (var i = 0; i < array.length; i++) {
  array.forEach((kumar)=>{
  var tr = document.createElement('tr');

  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');
  var td8 = document.createElement('td');

  var text1 = document.createElement('img');
  text1.src=kumar.img;
  td1.appendChild(text1);
  
  text1.setAttribute('class','image' );
  var text2 = document.createTextNode(kumar.Name);
  var text3 = document.createTextNode(kumar.mobile);
  var text4 = document.createTextNode(kumar.Batch);
  var text5 = document.createTextNode(kumar.Git);
  var text6 = document.createTextNode(kumar.Refby);
  var text7 = document.createTextNode(kumar.Location);
  var text8 = document.createTextNode(kumar.placment_status);
  





  



  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  td4.appendChild(text4);
  td5.appendChild(text5);
  td6.appendChild(text6);
  td7.appendChild(text7);
  td8.appendChild(text8);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  tr.appendChild(td8);


  table.setAttribute("border", "solid 1px");
  table.setAttribute('style', 'width: 100%');
  tr.setAttribute('id', 'ce');
    
   
  table.appendChild(tr);
})
document.body.appendChild(table);










































