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
  $('<div>' + queryString + '</div>').appendTo(document.getElementById("body"));
  $('<div>' + end + '</div>').appendTo(document.getElementById("body"));
  $('<div>' + dept + '</div>').appendTo(document.getElementById("body"));
  $('<div>' + days + '</div>').appendTo(document.getElementById("body"));


  //$( "#myselect option:selected" ).text();
  // var table = document.createElement("TABLE");
  $("#display tr").remove();
  $.each(data, function(key, val) {
      $('<tr><td>'+key+'</td><td id="'+key+'">'+val+'</td><tr>').appendTo(document.getElementById("display"));
  });
  $.getJSON( "https://protected-lowlands-84461.herokuapp.com/universities", function( data ) {
    $.each( data, function( key, val ) {
        $('<tr><td>'+key+'</td><td id="'+key+'">'+val+'</td><tr>').appendTo(document.getElementById("display"));
    });
  });
}
