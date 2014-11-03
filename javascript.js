    function speed1()
        {
            // Obtain the current values of distance and time.
            var distance1 = new Number(
                document.getElementById("distance1").value);
            var time1 = new Number(
                document.getElementById("time1").value);
            
            // Set the result to reflect the division of the two numbers.
            document.getElementById("speed1").setAttribute(
                "value", distance1/time1);
        }      
      function speed2()
        {
            // Obtain the current values of distance and time.
            var distance2 = new Number(
                document.getElementById("distance2").value);
            var time2 = new Number(
                document.getElementById("time2").value);
            
            // Set the result to reflect the division of the two numbers.
            document.getElementById("speed2").setAttribute(
                "value", distance2 / time2);
        }  function speedmean()
        {
           var distance1 = new Number(
                document.getElementById("distance1").value);
            var time1 = new Number(
                document.getElementById("time1").value);
            var distance2 = new Number(
                document.getElementById("distance2").value);
            var time2 = new Number(
                document.getElementById("time2").value);
            


            // Set the result to reflect the mean of the two numbers.
            document.getElementById("speedmean").setAttribute("value", ((distance1/time1)+(distance2/time2))/2);

        }       
    
