var container=document.createElement('div')
container.setAttribute('class','grid-cont v1')
//div1 tag----
var div1= document.createElement('div')
div1.setAttribute('class','grid-item col')

var img1=document.createElement('img')
img1.setAttribute('src','download.jfif')
img1.setAttribute('alt','content is load please wait')
img1.setAttribute('class','bbb change')
div1.appendChild(img1);

var div2=document.createElement('div')
div2.setAttribute('class','grid-item col')
div2.setAttribute('style','background-color:white')

var div3=document.createElement('div')
div3.setAttribute('class','grid-item col')

var div4=document.createElement('div')
div4.setAttribute('class','grid-item col')
div4.setAttribute('style','background-color:white')
div4.innerHTML="vadavalli,coimbatore|7904587770|karthickraja11dec@gmail.com|www.kickresume.com"
var br=document.createElement('br')
var hr=document.createElement('hr')

div4.append(br,hr);

var span=document.createElement('span')
span.setAttribute('class','absolute')
var bold=document.createElement('b')
bold.innerHTML='Karthick Raja'

span.appendChild(bold);
var div5=document.createElement('div')
div5.setAttribute('class','text-style')

var h=document.createElement('h2')
var i=document.createElement('i')
i.setAttribute('class','fa fa-user-circle fa-3x change')
var pro=document.createElement('b')
pro.innerHTML="Profile"
h.append(i,pro);

var p=document.createElement('p')
p.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Magni, ducimus veniam voluptate amet odit velit eos nesciunt ipsam Lorem ipsum dolor sit amet consectetur adipisicing Magni, ducimus veniam voluptate amet odit velit eos nesciunt ipsamLorem ipsum dolor sit amet consectetur adipisicing Magni, ducimus veniam voluptate amet odit velit eos nesciunt ipsamLorem ipsum dolor sit amet consectetur adipisicing Magni, ducimus veniam voluptate amet odit velit eos nesciunt ipsamLorem ipsum dolor sit amet consectetur adipisicing Magni, ducimus veniam voluptate amet odit velit eos nesciunt ipsam Magni, ducimus veniam voluptate amet odit velit eos nesciunt ipsam"

div5.append(h,p);

var div6=document.createElement('div')
div6.setAttribute('class','text-style')

var h1=document.createElement('h2')
var i1=document.createElement('i')
i1.setAttribute('class','fa fa-flask fa-3x change')
var pr=document.createElement('b')
pr.innerHTML="Work Experience"
h1.append(i1,pr);

var p1=document.createElement('p')
var table=document.createElement('table')
var tbody=document.createElement('tbody')
var tr=document.createElement('tr')

var td=document.createElement('td')
var bold1=document.createElement('b')
bold1.innerHTML="Community Relations Manager"

td.appendChild(bold1);

var td1=document.createElement('td')
var td2=document.createElement('td')

var td3=document.createElement('td')
td3.innerHTML="09/2019-09/2020"
var br1=document.createElement('br')

tr.append(td,td1,td2,td3,br1);

var tr1=document.createElement('tr')
var td3=document.createElement('td')
td3.innerHTML="alfa tech,tenampet,chennai"

tr1.appendChild(td3);
tbody.append(tr,tr1);
table.appendChild(tbody);
p1.appendChild(table);

var ul=document.createElement('ul')
var l1=document.createElement('li')
l1.innerHTML="Lorem ipsum dolor sit amet consectetur"
var l2=document.createElement('li')
l2.innerHTML="Lorem ipsum dolor sit amet consectetur"
var l3=document.createElement('li')
l3.innerHTML="Lorem ipsum dolor sit amet consectetur"
var l4=document.createElement('li')
l4.innerHTML="Lorem ipsum dolor sit amet consectetur"
var l5=document.createElement('li')
l5.innerHTML="Lorem ipsum dolor sit amet consectetur"

ul.append(l1,l2,l3,l4,l5);
div6.append(h1,p1,ul);

var div7=document.createElement('div')
div7.setAttribute('class','text-style')

var h2=document.createElement('h2')
var i2=document.createElement('i')
i2.setAttribute('class','fa fa-flask fa-3x change')
i2.setAttribute('aria-hidden','true')
var pro2=document.createElement('b')
pro2.innerHTML="Skills"

h2.append(i2,pro2);

var table2=document.createElement('table')
var caption=document.createElement('caption')
var bold2=document.createElement('b')
bold2.innerHTML="Technical Skills"

caption.appendChild(bold2);  

var tbody1=document.createElement('tbody')

var tr2=document.createElement('tr')
var td4=document.createElement('td')
td4.setAttribute('style','width: 50%')
td4.innerHTML="Javascript"

var td5=document.createElement('td')
var input=document.createElement('input')
input.setAttribute('type','range')
input.setAttribute('min','1')
input.setAttribute('max','100')
input.setAttribute('value','75')

td5.appendChild(input);
tr2.append(td4,td5);

var tr3=document.createElement('tr')
var td6=document.createElement('td')
td6.innerHTML="HTML"
var td7=document.createElement('td')
var input1=document.createElement('input')
input1.setAttribute('type','range')
input1.setAttribute('min','1')
input1.setAttribute('max','100')
input1.setAttribute('value','80')

td7.appendChild(input1);
tr3.append(td6,td7);

var tr4=document.createElement('tr')
var td8=document.createElement('td')
td8.innerHTML="CSS"
var td9=document.createElement('td')
var input2=document.createElement('input')
input2.setAttribute('type','range')
input2.setAttribute('min','1')
input2.setAttribute('max','100')
input2.setAttribute('value','70')

td9.appendChild(input2);
tr4.append(td8,td9);

var tr5=document.createElement('tr')
var td10=document.createElement('td')
td10.innerHTML="Bootstrap"
var td11=document.createElement('td')
var input3=document.createElement('input')
input3.setAttribute('type','range')
input3.setAttribute('min','1')
input3.setAttribute('max','100')
input3.setAttribute('value','50')

td11.appendChild(input3);
tr5.append(td10,td11);

tbody1.append(tr2,tr3,tr4,tr5);
table2.append(caption,tbody1);


//mid div
var h3=document.createElement('h2')
h3.innerHTML="Skills"
var i3=document.createElement('i')
i3.setAttribute('class','fa fa-flask fa-3x change')
i3.setAttribute('aria-hidden','true')

h3.appendChild(i3);

var table3=document.createElement('table')
var caption1=document.createElement('caption')
var bold3=document.createElement('b')
bold3.innerHTML="Additional Skills"

caption1.appendChild(bold3);  

var tbody2=document.createElement('tbody')

var tr3=document.createElement('tr')
var td5=document.createElement('td')
td5.setAttribute('style','width: 50%')
td5.innerHTML="Javascript"

var td6=document.createElement('td')
var input1=document.createElement('input')
input1.setAttribute('type','range')
input1.setAttribute('min','1')
input1.setAttribute('max','100')
input1.setAttribute('value','75')

td6.appendChild(input1);
tr3.append(td5,td6);

var tr4=document.createElement('tr')
var td7=document.createElement('td')
td7.innerHTML="HTML"
var td8=document.createElement('td')
var input2=document.createElement('input')
input2.setAttribute('type','range')
input2.setAttribute('min','1')
input2.setAttribute('max','100')
input2.setAttribute('value','80')

td8.appendChild(input2);
tr4.append(td7,td8);

var tr5=document.createElement('tr')
var td9=document.createElement('td')
td9.innerHTML="CSS"
var td10=document.createElement('td')
var input3=document.createElement('input')
input3.setAttribute('type','range')
input3.setAttribute('min','1')
input3.setAttribute('max','100')
input3.setAttribute('value','70')

td10.appendChild(input3);
tr5.append(td9,td10);

var tr6=document.createElement('tr')
var td11=document.createElement('td')
td11.innerHTML="Bootstrap"
var td12=document.createElement('td')
var input4=document.createElement('input')
input4.setAttribute('type','range')
input4.setAttribute('min','1')
input4.setAttribute('max','100')
input4.setAttribute('value','50')

td12.appendChild(input4);
tr6.append(td11,td12);

tbody2.append(tr3,tr4,tr5,tr6);
table3.append(caption1,tbody2);

div7.append(h2,table2,table3);

var div8=document.createElement('div')
div8.setAttribute('class','text-style')

var h3=document.createElement('h2')
var i3=document.createElement('i')
i3.setAttribute('class','fa fa-graduation-cap fa-3x change')
i3.setAttribute('aria-hidden','true')
var pro3=document.createElement('b')
pro3.innerHTML="Education"

h3.append(i3,pro3);

var table4=document.createElement('table')
var tbody3=document.createElement('tbody')
var tr8=document.createElement('tr')
var td16=document.createElement('td')
var bold4=document.createElement('b')
bold4.innerHTML="Engineering immersion program"

td16.appendChild(bold4);

var td17=document.createElement('td')
td17.innerHTML="09/2014-09/2015"

tr8.append(td16,td17);

var brk=document.createElement('br')

var tr9=document.createElement('tr')
var td18=document.createElement('td')
td18.innerHTML="PSG instuite,pelamedu,Coimbatore"

tr9.appendChild(td18);
tbody3.append(tr8,brk,tr9);
table4.appendChild(tbody3);

var para=document.createElement('p')
para.innerHTML="Lorem ipsum, dolor sit amet consectetur adipisicing elit.Iure atque eius eligendi obcaecati, iusto reiciendis dolorum  ut repellendus fugit blanditiis tenetur libero? Ab quam, sunt eius omnis harum similique voluptatibus!"

var unor=document.createElement('ul')
var list1=document.createElement('li')
list1.innerHTML="Magni, ducimus veniam voluptate amet odit velit eos nesciunt ipsam"
var list2=document.createElement('li')
list2.innerHTML="Magni, ducimus veniam voluptate amet odit velit eos nesciunt ipsam"
var list3=document.createElement('li')
list3.innerHTML="Magni, ducimus veniam voluptate amet odit velit eos nesciunt ipsam"

unor.append(list1,list2,list3);  

var table5=document.createElement('table')
var tbody4=document.createElement('tbody')
var tr10=document.createElement('tr')
var td19=document.createElement('td')
var bold5=document.createElement('b')
bold5.innerHTML="B.A English"

td19.appendChild(bold5);

var td20=document.createElement('td')
td20.innerHTML="09/2015-09/2018"

tr10.append(td19,td20);

var brk1=document.createElement('br')
var tr11=document.createElement('tr')
var td21=document.createElement('td')
td21.innerHTML="PSG instuite,pelamedu,Coimbatore"

tr11.appendChild(td21);
tbody4.appendChild(tr10,brk1,tr11);
table5.append(tbody4);

div8.append(h3,table4,para,unor,table5);

var div9=document.createElement('div')
div9.setAttribute('class','text-style')

var head=document.createElement('h2')
var i4=document.createElement('i')
i4.setAttribute('class','fa fa-briefcase fa-3x change')
i4.setAttribute('aria-hidden','true')
var pro5=document.createElement('b')
pro5.innerHTML="Work Experience"

head.append(i4,pro5);

var table6=document.createElement('table')
var tbody5=document.createElement('tbody')
var tr12=document.createElement('tr')
var td22=document.createElement('td')
var bold6=document.createElement('b')
bold6.innerHTML="Event Manager"

td22.appendChild(bold6);

var td23=document.createElement('td')
td23.innerHTML="09/2014-09/2015"

tr12.append(td22,td23);

var brake1=document.createElement('br')

var tr13=document.createElement('tr')
var td24=document.createElement('td')
td24.innerHTML="Amazon,Bangalore"

tr13.appendChild(td24); 
tbody5.append(tr12,brake1,tr13);
table6.append(tbody5);

var unor1=document.createElement('ul')
var lst1=document.createElement('li')
lst1.innerHTML="Magni, ducimus veniam voluptate amet odit velit eos nesciunt ipsam"
var lst2=document.createElement('li')
lst2.innerHTML="Magni, ducimus veniam voluptate amet odit velit eos nesciunt ipsam"
var lst3=document.createElement('li')
lst3.innerHTML="Magni, ducimus veniam voluptate amet odit velit eos nesciunt ipsam"

unor1.append(lst1,lst2,lst3);  

div9.append(head,table6,unor1);


container.append(div1,div2,div3,div4,span,div5,div6,div7,div8,div9);
document.body.appendChild(container);
