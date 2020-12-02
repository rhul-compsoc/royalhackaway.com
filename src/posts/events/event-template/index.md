---
name: ""
render: true
is-public: false
is-over: false

start: "2099-01-01T12:00:00+00:00"
end: "2001-01-01T12:00:00+00:00"

short-description: ""
full-description: ""

# Used for styling

color: "#FFFFFF"
display-date: ""
layout: event
location: ""
jumbotron-image:
jumbotron-image-adjust: "rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)"

display-logo: true
small-logo: ../../../assets/images/logo/rh-small.svg
logo-width: 1

show-map: false
map-src: "https://maps.google.com/maps?q=windsor%20building%2C%20royal%20holloway%20university%20of%20london&t=&z=13&ie=UTF8&iwloc=&output=embed"

show-floor-plan: false
venue-floor-plan: ""

enable-ticket-button: true
disable-button: true
tickets: "https://tickets.royalhackaway.com/"
ticket-button-text: "RSVP"

show-wifi-details: false
internet:
  ssid: ""
  username: ""
  password: ""

show-schedule: true
schedule:
  - name: Saturday — Day 1
    events:
      - time: "10:00"
        activity: Registration Opens
      - time: "11:00"
        activity: Opening Ceremony
      - time: "12:00"
        activity: Hacking Begins
      - time: "13:00"
        activity: Lunch
      - time: "15:00"
        activity: Using APIs (Workshop)
      - time: "16:00"
        activity: Git and GitHub (Workshop)
      - time: "16:00"
        activity: How to manage your team and win at hackathons (Workshop)
      - time: "18:00"
        activity: Dinner
      - time: "19:00"
        activity: Tapir Appreciation Hour
      - time: "21:00"
        activity: MLH Minigame
      - time: "23:59"
        activity: Midnight Pizza
  - name: Sunday — Day 2
    events:
      - time: "08:00"
        activity: Breakfast
      - time: "12:00"
        activity: Hacking Ends w/ Lunch
      - time: "13:00"
        activity: Presentations
      - time: "15:00"
        activity: Judging
      - time: "16:00"
        activity: Closing Ceremony

show-sponsors-list: false
show-sponsor-button: false
sponsor-document: null
sponsors:
  - colour: "#FFD700"
    name: Gold
    tier: 1
    tier-sponsors:
      - colour: "#1C1616"
        image: ../../../assets/images/sponsors/compsci.png
        link: "https://www.royalholloway.ac.uk/research-and-teaching/departments-and-schools/computer-science/"
        name: "Royal Holloway, University of London Computing Department"
        shadow-colour: "#696969"
# For more tiers, copy the gold tier and edit it
---

<section id="event-extra-content" style="background-color: {{ page.color }}">
  <div class="container text-light">
 <p class=""> this is some example extra content.</p>
</section>

This is some extra example content.
