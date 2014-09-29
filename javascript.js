function speed()
        {
            // Obtain the current values of distance and time.
            var distance = new Number(
                document.getElementById("distance").value);
            var time = new Number(
                document.getElementById("time").value);
            
            // Set the result to reflect the division of the two numbers.
            document.getElementById("speed").setAttribute(
                "value", distance / time);
        }        
    
