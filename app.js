$(document).ready(function(){
    $('#search').click(function(){
        let text = $('#text').val();

        $.ajax({
            url:"http://api.openweathermap.org/data/2.5/weather?q=" + text + "&units=metric&appid=96252dec9c05de24a0b216615e8d7777",
            success:function (data) {

                $('#temp').text(Math.round(data.main.temp));
                $('#city').text(data.name);
                $('#city2').text(data.name);
                $('#about').text(data.weather[0].description);
                $('#real').text(Math.round(data.main.feels_like));
                $('#max').text(Math.round(data.main.temp_max));
                $('#min').text(Math.round(data.main.temp_min));
                $('#visibility').text((data.visibility)/10000);
                $('#pressure').text(data.main.pressure);
                $('#humidity').text(data.main.humidity);
                $('#wind').text(Math.round(data.wind.speed));

                let image = data.weather[0].icon;
                console.log(image);

                let url = "http://openweathermap.org/img/wn/" + image + "@2x.png";
                console.log(url);
                
                $('#wimage').attr("src",url);

            },
            error:function(error){
                alert("Please enter proper city name. e.g. kolkata, siliguri, london, delhi etc");
            }

        })



        $('#text').val("");
    });

    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newdate = day + "/" + month + "/" + year;
    $('#date').text(newdate);
});

