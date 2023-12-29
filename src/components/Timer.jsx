import React from 'react'

const Timer = () => {
    var countDownDate = new Date("Feb 17, 2024 00:00:00").getTime();

    // Update the countdown every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the corresponding elements
        document.getElementById("days").textContent = days + "d";
        document.getElementById("hours").textContent = hours + "h";
        document.getElementById("minutes").textContent = minutes + "m";
        document.getElementById("seconds").textContent = seconds + "s";


        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
  return (
    <div>
    <div class=" max-w-full mx-auto bg-white shadow-lg overflow-hidden dark:bg-gray-800">
        <div class="py-2 px-6">
            <div class="flex flex-wrap gap-4 justify-center items-center">
                <div class="border rounded-lg px-2 py-1">
                    <div id="days" class=" dark:text-white font-light text-sm text-gray-800"></div>
                </div>
                <div class="border rounded-lg px-2 py-1">
                    <div id="hours" class=" dark:text-white font-light text-sm text-gray-800"></div>
                </div>
                <div class="border rounded-lg px-2 py-1">
                    <div id="minutes" class=" dark:text-white font-light text-sm text-gray-800"></div>
                </div>
                <div class="border rounded-lg px-2 py-1">
                    <div id="seconds" class=" dark:text-white font-light text-sm text-gray-800"></div>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Timer