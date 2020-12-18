var city
var country
var region
var ip

var go_ak_1 = atob("aHR0cHM6Ly9nby5sZWFkZ2lkLnJ1L2FmZl9jP29mZmVyX2lkPTUxODcmYWZmX2lkPTM1NjQ1JmFmZl9zdWI9a29uZ2FfcnVfeV9sZ18zNTY0NV81MTg3X2F6Ng==");
var go_ak_2 = atob("aHR0cHM6Ly9nby5sZWFkZ2lkLnJ1L2FmZl9jP29mZmVyX2lkPTUxODcmYWZmX2lkPTM1NTgzJmFmZl9zdWI9a29uZ2FfcnVfeV9sZ18zNTU4M181MTg3X2F6Ng==");
var go_ak_3 = atob("aHR0cHM6Ly9nby5sZWFkZ2lkLnJ1L2FmZl9jP29mZmVyX2lkPTUxODcmYWZmX2lkPTYyODk4JmFmZl9zdWI9a29uZ2FfcnVfeV9sZ182Mjg5OF81MTg3X2F6Ng==");
var go_ak_4 = atob("aHR0cHM6Ly9nby5sZWFkZ2lkLnJ1L2FmZl9jP29mZmVyX2lkPTUxODcmYWZmX2lkPTYxMzUyJmFmZl9zdWI9a29uZ2FfcnVfeV9sZ182MTM1Ml81MTg3X2F6Ng==");
var go_ak_5 = atob("aHR0cHM6Ly9nby5sZWFkZ2lkLnJ1L2FmZl9jP29mZmVyX2lkPTUxODcmYWZmX2lkPTQyODkzJmFmZl9zdWI9a29uZ2FfcnVfeV9sZ180Mjg5M181MTg3X2F6Ng==");
var go_ak_6 = atob("aHR0cHM6Ly9nby5sZWFkZ2lkLnJ1L2FmZl9jP29mZmVyX2lkPTUxODcmYWZmX2lkPTYxNzgwJmFmZl9zdWI9a29uZ2FfcnVfeV9sZ182MTc4MF81MTg3X2F6Ng==");
var go_ak_7 = atob("aHR0cHM6Ly9nby5sZWFkZ2lkLnJ1L2FmZl9jP29mZmVyX2lkPTUxODcmYWZmX2lkPTM1MDQzJmFmZl9zdWI9a29uZ2FfcnVfeV9sZ18zNTA0M181MTg3X2F6Ng==");
var go_ak_8 = atob("aHR0cHM6Ly9nby5sZWFkZ2lkLnJ1L2FmZl9jP29mZmVyX2lkPTUxODcmYWZmX2lkPTYyMzc5JmFmZl9zdWI9a29uZ2FfcnVfeV9sZ182MjM3OV81MTg3X2NwYS1hbmRyZWky"); //Fake

 $.ajax({
     url: 'https://ipinfo.io/json',
     async: false,
     dataType: 'json',
     success: function(json){
         city = json.city
         country = json.country
         region = json.region
         ip = json.ip
     }
 });

 let ciTies20 = ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Nizhny Novgorod', 'Kazan', 'Chelyabinsk', 'Omsk', 'Samara', 'Rostov-na-Donu','Rostov-on-Don', 'Ufa', 'Krasnoyarsk', 'Voronezh', 'Perm', 'Volgograd', 'Krasnodar', 'Saratov', 'Tyumen','Togliatti-on-the-Volga', 'Tolyatti','Izhevsk']
 let reGions20 = ['Tver’ Oblast', 'Kostroma Oblast','Voronezj','Smolensk','Moscow Oblast','Ryazan Oblast','Jaroslavl','Bryansk Oblast','Tambov','Vladimir','Crimea','Tver Oblast', 'Kostroma','Voronezj Oblast','Smolensk Oblast','Moscow','Ryazan','Jaroslavl Oblast','Bryansk','Tambov Oblast','Vladimir Oblast','Tver Oblast', 'Kostroma','Voronezh','Smolensk','Moscow','Ryazan','Yaroslavl','Bryansk','Tambov','Vladimir','Novosibirsk Oblast','Novosibirsk']
 let coUntry20 = ['KZ','UA','UA','IL','BY','KG','US','LV','LT','MD']
 var allinfo = 'city_' + city + '_region_' + region + '_country_' + country + '_IP_' + ip;

 function checkTOP20(city, country, region) {
   var element_city = city;
   var element2 = reGions20.includes(region);
   var element3 = coUntry20.includes(country);

   if (element2 == true || element3 == true || element_city == "Moscow" || element_city == "Saint Petersburg" || element_city == "Novosibirsk"){
     return "go_ak_8";
   }else if (element_city == "Yekaterinburg" || element_city == "Samara"){
     return "go_ak_1";
   }else if (element_city == "Kazan" || element_city == "Chelyabinsk" || element_city == "Nizhny Novgorod"){
     return "go_ak_2";
   }else if (element_city == "Rostov-na-Donu" || element_city == "Rostov-on-Don" || element_city == "Ufa" || element_city == "Omsk"){
     return "go_ak_3";
   }else if (element_city == "Krasnoyarsk" || element_city == "Voronezh" || element_city == "Perm"){
     return "go_ak_4";
   }else if (element_city == "Volgograd" || element_city == "Krasnodar" || element_city == "Saratov"){
     return "go_ak_5";
   }else if (element_city == "Tyumen" || element_city == "Togliatti-on-the-Volga" || element_city == "Tolyatti" || element_city == "Izhevsk"){
     return "go_ak_6";
   }else{
     return "go_ak_7";
   }
 }

if(checkTOP20(city, country, region) == "go_ak_8"){
  document.getElementById('form').innerHTML = '<form name="frm" method="post" onsubmit="return validate()" ><input type="text" name="digits1" id="digits1"  /><a href="" class="trueform" type="button" value="Подтвердить" /></a><input class="button3" name="button3" type="submit" value="Подтвердить" /></form>';
  function validate() {
    var digits = document.frm.digits1.value;
    if(digits == '')
    {
     alert("Подтвердите что вы не робот, введите число");
    }
    else if (digits == '4')
    {
      location.href = `${go_ak_8}&aff_sub4=${allinfo}`;
    }
    else
    {
      alert("Не верный ответ, попробуйте еще раз");
    }
    return false;
  }
}else if (checkTOP20(city, country, region) == "go_ak_1"){
  document.getElementById('form').innerHTML = '<form name="frm" method="post" onsubmit="return validate()" ><input type="text" name="digits1" id="digits1"  /><a href="" class="trueform" type="button" value="Подтвердить" /></a><input class="button3" name="button3" type="submit" value="Подтвердить" /></form>';
  function validate() {
    var digits = document.frm.digits1.value;
    if(digits == '')
    {
     alert("Подтвердите что вы не робот, введите число");
    }
    else if (digits == '4')
    {
      location.href = `${go_ak_1}&aff_sub4=${allinfo}`;
    }
    else
    {
      alert("Не верный ответ, попробуйте еще раз");
    }
    return false;
  }
}else if (checkTOP20(city, country, region) == "go_ak_2"){
  document.getElementById('form').innerHTML = '<form name="frm" method="post" onsubmit="return validate()" ><input type="text" name="digits1" id="digits1"  /><a href="" class="trueform" type="button" value="Подтвердить" /></a><input class="button3" name="button3" type="submit" value="Подтвердить" /></form>';
  function validate() {
    var digits = document.frm.digits1.value;
    if(digits == '')
    {
     alert("Подтвердите что вы не робот, введите число");
    }
    else if (digits == '4')
    {
      location.href = `${go_ak_2}&aff_sub4=${allinfo}`;
    }
    else
    {
      alert("Не верный ответ, попробуйте еще раз");
    }
    return false;
  }
}else if (checkTOP20(city, country, region) == "go_ak_3"){
  document.getElementById('form').innerHTML = '<form name="frm" method="post" onsubmit="return validate()" ><input type="text" name="digits1" id="digits1"  /><a href="" class="trueform" type="button" value="Подтвердить" /></a><input class="button3" name="button3" type="submit" value="Подтвердить" /></form>';
  function validate() {
    var digits = document.frm.digits1.value;
    if(digits == '')
    {
     alert("Подтвердите что вы не робот, введите число");
    }
    else if (digits == '4')
    {
      location.href = `${go_ak_3}&aff_sub4=${allinfo}`;
    }
    else
    {
      alert("Не верный ответ, попробуйте еще раз");
    }
    return false;
  }
}else if (checkTOP20(city, country, region) == "go_ak_4"){
  document.getElementById('form').innerHTML = '<form name="frm" method="post" onsubmit="return validate()" ><input type="text" name="digits1" id="digits1"  /><a href="" class="trueform" type="button" value="Подтвердить" /></a><input class="button3" name="button3" type="submit" value="Подтвердить" /></form>';
  function validate() {
    var digits = document.frm.digits1.value;
    if(digits == '')
    {
     alert("Подтвердите что вы не робот, введите число");
    }
    else if (digits == '4')
    {
      location.href = `${go_ak_4}&aff_sub4=${allinfo}`;
    }
    else
    {
      alert("Не верный ответ, попробуйте еще раз");
    }
    return false;
  }
}else if (checkTOP20(city, country, region) == "go_ak_5"){
  document.getElementById('form').innerHTML = '<form name="frm" method="post" onsubmit="return validate()" ><input type="text" name="digits1" id="digits1"  /><a href="" class="trueform" type="button" value="Подтвердить" /></a><input class="button3" name="button3" type="submit" value="Подтвердить" /></form>';
  function validate() {
    var digits = document.frm.digits1.value;
    if(digits == '')
    {
     alert("Подтвердите что вы не робот, введите число");
    }
    else if (digits == '4')
    {
      location.href = `${go_ak_5}&aff_sub4=${allinfo}`;
    }
    else
    {
      alert("Не верный ответ, попробуйте еще раз");
    }
    return false;
  }
}else if (checkTOP20(city, country, region) == "go_ak_6"){
  document.getElementById('form').innerHTML = '<form name="frm" method="post" onsubmit="return validate()" ><input type="text" name="digits1" id="digits1"  /><a href="" class="trueform" type="button" value="Подтвердить" /></a><input class="button3" name="button3" type="submit" value="Подтвердить" /></form>';
  function validate() {
    var digits = document.frm.digits1.value;
    if(digits == '')
    {
     alert("Подтвердите что вы не робот, введите число");
    }
    else if (digits == '4')
    {
      location.href = `${go_ak_6}&aff_sub4=${allinfo}`;
    }
    else
    {
      alert("Не верный ответ, попробуйте еще раз");
    }
    return false;
  }
}else if (checkTOP20(city, country, region) == "go_ak_7"){
  document.getElementById('form').innerHTML = '<form name="frm" method="post" onsubmit="return validate()" ><input type="text" name="digits1" id="digits1"  /><a href="" class="trueform" type="button" value="Подтвердить" /></a><input class="button3" name="button3" type="submit" value="Подтвердить" /></form>';
  function validate() {
    var digits = document.frm.digits1.value;
    if(digits == '')
    {
     alert("Подтвердите что вы не робот, введите число");
    }
    else if (digits == '4')
    {
      location.href = `${go_ak_7}&aff_sub4=${allinfo}`;
    }
    else
    {
      alert("Не верный ответ, попробуйте еще раз");
    }
    return false;
  }
}
