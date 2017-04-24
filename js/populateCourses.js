var searchBtn = document.getElementById("findCourses-btn");
    if (searchBtn.addEventListener)
        searchBtn.addEventListener("click", generateTable, false);
    else if (searchBtn.attachEvent)
        searchBtn.attachEvent('onclick', generateTable);

function generateTable() {
  // var data={
  //   "key_one": "value_one",
  //   "key_two": "value_two",
  //   "key_three": "value_three"
  // };
  var data={
    "Course Code": "E62 BME 559",
    "Description": " This course covers several of the fundamental theories of solid mechanics that are needed to solve problems in biomechanics. The theories of nonlinear elasticity, viscoelasticity, and poroelasticity are applied to a large range of biological tissues including bone, articular cartilage, blood vessels, the heart, skeletal muscle, and red blood cells. Other topics include muscle activation, the biomechanics of development and functional adaptation, and the mechanics of hearing. Prerequisites: BME240 and ESE317 or ESE 318 and 319 or permission of instructor.\n",
     "Title": "Intermediate Biomechanics",
     "Date": "M-W----",
     "Credits": 3,
     "Time": "11:30A-1:00P",
     "Instructor": "Shao"
  }
  //var start end dept days
  var start = $("#start option:selected").text();
  var end = $("#end option:selected").text();
  var dept = $("#dept option:selected").text();
  var days = $("#days option:selected").text();
  var queryString = "html heroku blah" + start + "/";
  //$('<div>' + queryString + '</div>').appendTo(document.getElementById("body"));
  //$('<div>' + end + '</div>').appendTo(document.getElementById("body"));
  //$('<div>' + dept + '</div>').appendTo(document.getElementById("body"));
  //$('<div>' + days + '</div>').appendTo(document.getElementById("body"));


  //$( "#myselect option:selected" ).text();
  // var table = document.createElement("TABLE");

  var $div = $("<div>", {id: "singleCourse", "class": "a"});//
  var $courses1 = $("<div>", {id: "firstRow", "class": "col-sm-12"});//first row
  var $courses2 = $("<div>", {id: "secondRow", "class": "col-sm-12"});//second row
  var $courses3 = $("<div>", {id: "thirdRow", "class": "col-sm-12"});//third row
  var $courses4 = $("<div>", {id: "fourthRow", "class": "col-sm-12"});//third row

  $div.append($courses1);
  $div.append($courses2);
  $div.append($courses3);
  $div.append($courses4);
  $div.appendTo(document.getElementById("body"));












  var codeAttr, descriptionAttr, courseTitleHeader, daysAttr, creditsAttr, timeAttr, professorAttr;

  $("#singleCourse").appendTo(document.getElementById("display"));

  //$("#display tr").remove();
  $.each(data, function(key, val) {
      //$('<tr><td>'+key+'</td><td id="'+key+'">'+val+'</td><tr>').appendTo(document.getElementById("display"));

      switch(key){
        case "Course Code":
          //Course Code
          var code = key + ": " + val;
          codeAttr = $('<h3>' + code + '</h3>').attr('id', 'code').attr('class', 'testClass').attr('class', 'col-md-6');
          break;
        case "Description":
          //Description
          var description = key + ": " + val;
          descriptionAttr = $('<p>' + description + '</p>').attr('id', 'description');
          break;
        case "Title":
          //Course Title
          var title = val;
          courseTitleHeader = $('<h2>' + title + '</h2>').attr('id', 'courseTitle');

        case "Date":
          //Date
          var days = "Days: " + val;
          daysAttr = $('<h4>' + days + '</h4>').attr('id', 'days').attr('class', 'col-md-4');

        case "Credits":
          //Credits
          var credits = key + ": " + val;
          creditsAttr = $('<h4>' + credits + '</h4>').attr('id', 'credits').attr('class', 'col-md-4');

        case "Time":
          //Time
          var time = key + ": " + val;
          timeAttr = $('<h4>' + time + '</h4>').attr('id', 'time').attr('class', 'col-md-4');

        case "Instructor":
          //Professor
          var prof = key + ": " + val;
          professorAttr = $('<h3>' + prof + '</h3>').attr('id', 'professor').attr('class', 'col-md-6');
      }


  });

  $("#firstRow").append(courseTitleHeader);
  $("#secondRow").append(professorAttr);
  $("#secondRow").append(codeAttr);
  $("#thirdRow").append(daysAttr);
  $("#thirdRow").append(timeAttr);
  $("#thirdRow").append(creditsAttr);
  $("#fourthRow").append(descriptionAttr);

  $.getJSON( "https://protected-lowlands-84461.herokuapp.com/universities", function( data ) {
    $.each( data, function( key, val ) {
        //$('<tr><td>'+key+'</td><td id="'+key+'">'+val+'</td><tr>').appendTo(document.getElementById("display"));
    });
  });
}
