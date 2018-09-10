---
name: "Royal Hackaway 2019"
is-public: true

start: "2019-02-01T12:00:00+00:00"
end: "201-02-03T12:00:00+00:00"

short-description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."

# Used for styling
color: "#F37021"
display-date: "02-03 Feb 2019"

layout: event

location: "Windsor Building, on Campus"

map:
  coords:
    lat: "51.4253791"
    lng: "-0.5674995"
  placeID: "ChIJXUCjP_55dkgR4OIhA2pQA6A"


venue_floor_plan: ""

tickets: "https://tickets.royalhackaway.com/"


internet:
  ssid: ""
  username: ""
  password: ""

schedule:
  "Saturday — Day 1":
    -
      - "10:00"
      - "Registration Opens"
    -
      - "11:00"
      - "Opening Ceremony"
    -
      - "12:00"
      - "Hacking Begins"
    -
      - "13:00"
      - "Lunch"
    -
      - "15:00"
      - "Using APIs (Workshop)"
    -
      - "16:00"
      - "Git and GitHub (Workshop)"
    -
      - "16:00"
      - "How to manage your team and win at hackathons (Workshop)"
    -
      - "18:00"
      - "Dinner"
    -
      - "21:00"
      - "MLH Minigame"
    -
      - "23:59"
      - "Midnight Pizza"
  "Sunday — Day 2":
    -
      - "08:00"
      - "Breakfast"
    -
      - "12:00"
      - "Hacking Ends w/ Lunch"
    -
      - "13:00"
      - "Presentations"
    -
      - "15:00"
      - "Judging"
    -
      - "16:00"
      - "Closing Ceremony"
---
<section id="countdown">
  <div class="container inner-top-md">
    <div class="row">
      <div class="col-md-8 col-sm-9 center-block text-center">
        <header id="countdown-1"></header>
      </div>
    </div>
  </div>
</section>

<section id="text">
  <div class="container inner-top-md">
    <div class="row">
      <div class="col-md-8 col-sm-9 center-block text-center">
        <p>
          Dinner choices (form closes at 4:45pm): <a href="https://goo.gl/forms/3u6g0RXtsylhdFzu1">goo.gl/forms/3u6g0RXtsylhdFzu1</a>
        </p><p>
          Devpost submissions: <a href="https://royal-hackaway.devpost.com/">royal-hackaway.devpost.com</a>
        </p>
      </div>
    </div>
  </div>
</section>

<section id="internet">
  <div class="container inner-sm">
    <div class="row">
      <div class="col-md-4 center-block text-center">
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th class="text-center" colspan="2">Get Online</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Network SSID</b></td>
              <td><code>{{ site.event.internet.ssid }}</code></td>
            </tr>
            <tr>
              <td><b>Username</b></td>
              <td><code>{{ site.event.internet.username }}</code></td>
            </tr>
            <tr>
              <td><b>Password</b></td>
              <td><code>{{ site.event.internet.password }}</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<section id="map" class="height-sm"></section>

<script src="https://cdn.rawgit.com/HugoGiraudel/Countdown.js/master/countdown.js"></script>
<script type="text/javascript">
var c1 = new Countdown({
  selector: '#countdown-1',
  msgBefore: '<h1 id="countdown-2"></h1><p>until the hacking begins</p>',
  msgAfter: '<h1>It\'s all over now.</h1>',
  msgPattern: '<h1>{hours} hours {minutes} minutes {seconds} seconds</h1><p>left to hack</p>',
  dateStart: new Date('2018-01-13T12:00:00+00:00'),
  dateEnd: new Date('2018-01-14T12:00:00+00:00')
}), c2 = new Countdown({
  selector: '#countdown-2',
  msgBefore: '',
  msgAfter: '',
  msgPattern: '{hours} hours {minutes} minutes {seconds} seconds',
  dateStart: new Date(),
  dateEnd: new Date('2018-01-13T12:00:00+00:00')
});
</script>
<script type="text/javascript">
  function initMap() {
    var coords = {lat: 51.4253791, lng: -0.5674995},
    map = new google.maps.Map(document.getElementById('map'), {
      center: coords,
      zoom: 16,
      keyboardShortcuts: false,
      disableDefaultUI: true,
      scrollwheel: false,
      disableDoubleClickZoom: false,
      draggable: true
    }),
    service = new google.maps.places.PlacesService(map);
    service.getDetails({
      placeId: 'ChIJXUCjP_55dkgR4OIhA2pQA6A'
    }, function(place, status) {
      if (status ===
Saturday — Day 1
10:00 	Registration Opens
11:00 	Opening Ceremony
12:00 	Hacking Begins
13:00 	Lunch
15:00 	Using APIs (Workshop)
16:00 	Git and GitHub (Workshop)
16:00 	How to manage your team and win at hackathons (Workshop)
18:00 	Dinner
21:00 	MLH Minigame
23:59 	Midnight Pizza
Sunday — Day 2
08:00 	Breakfast
12:00 	Hacking Ends w/ Lunch
13:00 	Presentations
15:00 	Judging
16:00 	Closing Ceremony
Royal Hackaway 2019

Royal Hackaway 2019 is a 24 hour hackathon taking place on the 2nd-3rd January 2018. This is great opportunity for creative inventors, designers and programmers to come together to create awesome projects.

    Windsor Building, Royal Holloway, UoL
    13 January 2018
    10:00 AM

 google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        }), infowindow = new google.maps.InfoWindow();
        infowindow.setContent('<div><strong>'+place.name+'</strong><br>'+'<p>'+place.formatted_address+'</p></div>');
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map, marker);
        });
        google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
          infowindow.open(map, marker);
        });
      }
    });
  }
</script>
