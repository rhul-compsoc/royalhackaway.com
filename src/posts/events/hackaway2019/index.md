---
name: Royal Hackaway 2019
short_name: Royal Hackaway 2019
subtitle: Create something awesome
render: true
is-public: true
is-over: true

# Mark that a page is destined to be posted at "/" instead of something like "/events/hackaway2019"
# Sets up (temporary) redirect from "/events/hackaway2019" to "/"
# Redirects array (permanently) redirects to the actual page
homepage: false
redirects:
  - /v2
  - /2019

# Enable/disable the countdown timer on the homepage
# It counts down to Hackaway V4 start (and then rests at 0 days, 0 hours, 0 minutes and 0 seconds)
countdown_timer_enable: false
event_start: 2019-02-02T09:30:00+00:00
event_end: 2019-02-03T17:00:00+00:00

# A wide (about 3:1 aspect ratio) picture to display for this event.
event_widescreen_logo:
  light: null
  dark: null

# Jumbotron Settings
# Enabling/Disabling the follow will show/hide the respective options.
jumbotron_enable_title: true
jumbotron_enable_widescreen_logo: false

# A text representation of the time period. Stick anything you like here.
display_date: Saturday 2nd February - Sunday 3rd February 2019

# The start and end of the hacking period
# Not used yet, but might be useful for the future
hacking_start: 2020-02-01T11:00:00+00
hacking_end: 2020-02-02T13:00:00+00

# A description of the event in hand.
# Short is currently not being used
# Full is used for the site jumbotron and for SSO
short-description: An exciting 24 hour hackathon, for students from any university.
full-description: >
  Royal Hackaway is Royal Holloway's annual hackathon.

  Open to university students from the UK and around the world,
  in this 24 hour hackathon you'll work as a group to build a project.
  You'll pick up new skills, try out new tech, and meet new people.
  This is our second time running this event, and we're excited to
  create a more inclusive and rewarding event for all.

# Enable the section which brings up the dictionary definition of what a hackathon is
hackathon_definition_enable: true

# Location Settings
# Describes the location the event is taking place
# Disabling the location embed hides the iframe for "location_embed_link"
location: Windsor Building, on Campus
location_embed_enable: true
location_embed_link: https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.759701888386!2d-0.5680310838687079!3d51.42584067962183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487679fe3dce3113%3A0x47f0f448b19730a3!2sWindsor+Building!5e0!3m2!1sen!2suk!4v1546448505106

# Ticket Settings
# Disabling the button greys it out
ticket_button_enable: false
ticket_button_link: https://royal-hackaway-v2.devpost.com/
ticket_button_label: Submit your 2019 project to DevPost

# Schedule Settings
# Disabling the schedule just hides the section
schedule_enable: true
schedule:
  - name: Saturday 2nd — Day 1
    events:
      - time: "09:30"
        activity: Registration Opens
      - time: "11:00"
        activity: Opening Ceremony and Team Building
      - time: "12:00"
        activity: Hacking Begins
      - time: "13:00"
        activity: Lunch
      - time: "14:00"
        activity: Digital Audio (Upstairs)
      - time: "14:00"
        activity: Digital Ocean (Downstairs)
      - time: "15:00"
        activity: Nexmo (Upstairs)
      - time: "15:00"
        activity: The Psychology of Dev Teams (Downstairs)
      - time: "16:00"
        activity: NotBinary Container Workshop (Upstairs)
      - time: "16:00"
        activity: GitHub Workshop (Downstairs)
      - time: "18:00"
        activity: Dinner
      - time: "20:00"
        activity: MLH Minigame
      - time: "23:59"
        activity: Midnight Pizza
  - name: Sunday 3rd — Day 2
    events:
      - time: "08:00"
        activity: Breakfast
      - time: "11:00"
        activity: Submissions Close
      - time: "12:00"
        activity: Hacking Ends with Lunch
      - time: "13:00"
        activity: Presentations
      - time: "15:00"
        activity: Judging
      - time: "16:00"
        activity: Closing Ceremony

# Sponsor Settings
# Disabling the sponsor document hides the "Sponsor Us!" button
# Please include relative link to a file (preferably a PDF). Word Documents are prohibited
sponsor_document_enable: true
sponsor_document: ./sponsordeck.pdf

# Disabling the sponsor list hides the section
# "Companies" are found in `/src/posts/companies`
# 1. Create a new folder
# 2. Create and populate `index.md`
# 3. Refer to company via the folder name (or filename if not "index.md")
sponsors_list_enable: true
sponsors:
  - name: Gold
    colour: gold
    tier: 1
    companies:
      - rhulcompsci50
  - name: Silver
    colour: silver
    tier: 2
    companies:
      - github
      - notbinary
      - nexmo
  - name: Bronze
    colour: "#CD7F32"
    tier: 3
    companies:
      - balsamiq
      - guardtime
      - ig
      - ukgovcamp
  - name: Supporter
    colour: null
    tier: 4
    companies:
      - gitkraken
      - mlh
      - stickermule
      - hacksmiths
      - nordicsemi

# People Settings
# Disabling the people section hides the people section
# "people[].person" are found in `/src/posts/people`
people_enable: false
people: []

# FAQ Settings
# Disabling the FAQ section hides the FAQ section
# "FAQ" are found in `/src/posts/faq`
faq_enable: true
faq:
  - can-i-go-home-overnight-leave-early
  - whats-a-hackathon
  - can-i-start-before-i-arrive
  - do-i-have-to-study-computer-science
  - do-i-need-to-come-with-a-team
  - do-you-have-a-code-of-conduct
  - how-much-does-it-cost
  - want-to-join-the-committee
  - who-can-attend
  - who-owns-my-project

# Livestream Settings
# Enabling the embed replaces the jumbotron description
# Enabling the button shows the Twitch/YouTube button
livestream_embed_enable: false
livestream_button_enable: false
# Valid options: ["twitch", "youtube"]
livestream_type: twitch
# The ID to link/embed
# Twitch: The channel name
# YouTube: The video ID
livestream_link: null

# Chat Settings
# Disabling the chat link hides the Discord button
chat_link_enable: false
chat_link: null

# MLH Badge
# Disabling the MLH badge hides the MLH Badge
mlh_badge_enable: true
mlh_badge_year: 2019
---

<!--
  The HTML content is not used as of yet.
  Use it in the future in case you need custom markup somewhere
-->
