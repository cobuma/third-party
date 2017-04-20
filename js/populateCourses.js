var searchBtn = document.getElementById("findCourses-btn");
    if (searchBtn.addEventListener)
        searchBtn.addEventListener("click", generateTable, false);
    else if (searchBtn.attachEvent)
        searchBtn.attachEvent('onclick', generateTable);

function generateTable() {

  // This code tests to see if we are appropriately getting the dropdown menu items
  var start = $("#start option:selected").text();
  var end = $("#end option:selected").text();
  var dept = $("#dept option:selected").text();
  var days = $("#days option:selected").text();
  var queryString = "html heroku blah" + start + "/";
  // Append divs to the page displaying the selected items
  $('<div>' + queryString + '</div>').appendTo(document.getElementById("body"));
  $('<div>' + end + '</div>').appendTo(document.getElementById("body"));
  $('<div>' + dept + '</div>').appendTo(document.getElementById("body"));
  $('<div>' + days + '</div>').appendTo(document.getElementById("body"));

  // Hardcoded toy data, meant to emulate JSON response data
  var data2=[{
          "CourseCode": "E62 BME 559",
          "Description": " This course covers several of the fundamental theories of solid mechanics that are needed to solve problems in biomechanics. The theories of nonlinear elasticity, viscoelasticity, and poroelasticity are applied to a large range of biological tissues including bone, articular cartilage, blood vessels, the heart, skeletal muscle, and red blood cells. Other topics include muscle activation, the biomechanics of development and functional adaptation, and the mechanics of hearing. Prerequisites: BME240 and ESE317 or ESE 318 and 319 or permission of instructor.\n",
           "Title": "Intermediate Biomechanics",
           "Date": "M-W----",
           "Credits": 3,
           "Time": "11:30A-1:00P",
           "Instructor": "Shao"
        },
        {
          "CourseCode": "E62 BME 559",
          "Description": " This course covers several of the fundamental theories of solid mechanics that are needed to solve problems in biomechanics. The theories of nonlinear elasticity, viscoelasticity, and poroelasticity are applied to a large range of biological tissues including bone, articular cartilage, blood vessels, the heart, skeletal muscle, and red blood cells. Other topics include muscle activation, the biomechanics of development and functional adaptation, and the mechanics of hearing. Prerequisites: BME240 and ESE317 or ESE 318 and 319 or permission of instructor.\n",
           "Title": "Intermediate Biomechanics",
           "Date": "M-W----",
           "Credits": 3,
           "Time": "11:30A-1:10P",
           "Instructor": "Shao"
        },
        {
          "CourseCode": "E62 CSE 559",
          "Description": " This course covers several of the fundamental theories of solid mechanics that are needed to solve problems in biomechanics. The theories of nonlinear elasticity, viscoelasticity, and poroelasticity are applied to a large range of biological tissues including bone, articular cartilage, blood vessels, the heart, skeletal muscle, and red blood cells. Other topics include muscle activation, the biomechanics of development and functional adaptation, and the mechanics of hearing. Prerequisites: BME240 and ESE317 or ESE 318 and 319 or permission of instructor.\n",
           "Title": "Intermediate Biomechanics",
           "Date": "M-W----",
           "Credits": 3,
           "Time": "11:20A-1:00P",
           "Instructor": "Shao"
        },
        {
          "CourseCode": "E62 BME 559",
          "Description": " This course covers several of the fundamental theories of solid mechanics that are needed to solve problems in biomechanics. The theories of nonlinear elasticity, viscoelasticity, and poroelasticity are applied to a large range of biological tissues including bone, articular cartilage, blood vessels, the heart, skeletal muscle, and red blood cells. Other topics include muscle activation, the biomechanics of development and functional adaptation, and the mechanics of hearing. Prerequisites: BME240 and ESE317 or ESE 318 and 319 or permission of instructor.\n",
           "Title": "Intermediate Biomechanics",
           "Date": "M-W----",
           "Credits": 3,
           "Time": "11:20A-1:00P",
           "Instructor": "Shao"
        }]

        // Remove the table from the last time the button was pressed
        $("#display tr").remove();



        // Loop for toy data defined on line 13
        // $.each(data, function(key, val) {
        //   $('<tr><td>'+key+'</td><td id="'+key+'">'+val+'</td><tr>').appendTo(document.getElementById("display"));
        // });

        var startResponse;
        var endResponse;

        // We can use the contains function to see if a course code contains the desired dept code
        // i.e. does "E62 BME 234" contain "BME"?
        Array.prototype.contains = function(element){
            return this.indexOf(element) > -1;
        };

        $.each(data2, function(index, jsonObject) {

          // Returns an array of strings, where each entry is word from the CourseCode entry in the JSON data
          // i.e. "CSE 345" ---> ["CSE", "345"].  We can then check the array for the desired dept. code.
          code = jsonObject.CourseCode.split(" ");

          // Separate the beginning and end times from the JSON response
          times = jsonObject.Time.split("-");
          startResponse = times[0];
          endResponse = times[1];

          //  To get the beginning and end times separated:
          //  1.)  Split JSON Time val on '-' character
          //  2.)  Convert to military time:  i.e. 11:30A --> 1130,  1:00P -->  1300
          //       2.a)   Check for 'A' or 'P', and strip it
          //       2.b)   Remove colon, add 1200 to number if it has a 'P'
          //  3.)  Append data rows for all those entries where REQSTartTime <= RESPSTart && REQEndTime >= RESPEnd
           
          if (code.contains("BME") && startResponse == "11:20A" && endResponse == "1:00P") {
            $.each(jsonObject, function(key, val) {
              $('<tr><td>'+key+'</td><td id="'+key+'">'+val+'</td><tr>').appendTo(document.getElementById("display"));
            });  
          }
        });
        
        $.getJSON( "https://protected-lowlands-84461.herokuapp.com/universities", function( data ) {
          $.each( data, function( key, val ) {
              $('<tr><td>'+key+'</td><td id="'+key+'">'+val+'</td><tr>').appendTo(document.getElementById("display"));
          });
        });

  //$( "#myselect option:selected" ).text();
  // var table = document.createElement("TABLE");
  // $("#display tr").remove();
  // $.each(data, function(key, val) {
  //     $('<tr><td>'+key+'</td><td id="'+key+'">'+val+'</td><tr>').appendTo(document.getElementById("display"));
  // });
  
  $.getJSON( "https://protected-lowlands-84461.herokuapp.com/universities", function( data ) {
    $.each( data, function( key, val ) {
        $('<tr><td>'+key+'</td><td id="'+key+'">'+val+'</td><tr>').appendTo(document.getElementById("display"));
    });
  });
}
