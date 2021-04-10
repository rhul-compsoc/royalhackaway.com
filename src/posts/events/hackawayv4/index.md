---
name: Royal Hackaway v4 Online
short_name: Royal Hackaway v4
subtitle: Create something awesome
render: true
is-public: true
is-over: true

# Mark that a page is destined to be posted at "/" instead of something like "/events/hackawayv4"
# Sets up (temporary) redirect from "/events/hackawayv4" to "/"
# Redirects array (permanently) redirects to the actual page
homepage: true
redirects:
  - /v4
  - /2021

# Enable/disable the countdown timer on the homepage
# It counts down to Hackaway V4 start (and then rests at 0 days, 0 hours, 0 minutes and 0 seconds)
countdown_timer_enable: false
event_start: "2021-02-06T10:00:00+00:00"
event_end: "2021-02-07T18:00:00+00:00"

# A wide (about 3:1 aspect ratio) picture to display for this event.
event_widescreen_logo:
  light: null
  dark: null

# Jumbotron Settings
# Enabling/Disabling the follow will show/hide the respective options.
jumbotron_enable_title: true
jumbotron_enable_widescreen_logo: false

# A text representation of the time period. Stick anything you like here.
display_date: Saturday 6th February - Sunday 7th February 2021

# The start and end of the hacking period
# Not used yet, but might be useful for the future
hacking_start: 2021-02-06T11:00:00+00
hacking_end: 2021-02-07T13:00:00+00

# A description of the event in hand.
# Short is currently not being used
# Full is used for the site jumbotron and for SSO
short-description: An exciting two-day online Hackathon, for students across the UK or around the world
full-description: >
  Royal Hackaway is Royal Holloway's annual hackathon, open to university students from anywhere around the UK and the world!
  Spend the two days as a team working together on a project, attend any of our workshops or talks, and meet new people virtually!


  Royal Hackaway v4 will be our first online-only event, and streamed live to you.

# Enable the section which brings up the dictionary definition of what a hackathon is
hackathon_definition_enable: true

# Location Settings
# Describes the location the event is taking place
# Disabling the location embed hides the iframe for "location_embed_link"
location: "Fully virtual, on Discord and Twitch"
location_embed_enable: false
location_embed_link: ""

# Ticket Settings
# Disabling the button greys it out
ticket_button_enable: false
ticket_button_link: https://tickets.royalhackaway.com/
ticket_button_label: Get your tickets here

# Schedule Settings
# Disabling the schedule just hides the section
schedule_enable: true
schedule:
  - name: Saturday 5th — Day 1
    events:
      - time: "09:00"
        activity: Discord Server opens!
      - time: "10:00"
        activity: Opening Ceremony
      - time: "10:20"
        activity: Q&A Session
      - time: "10:40"
        activity: Team Building on Discord - by Megi
      - time: "11:00"
        activity: 🟢 Hacking Begins 🟢
      - time: "11:00"
        activity: Introduction to GitHub - By Ash
      - time: "12:00"
        activity: Introduction to Rust talk - By Isaac
      - time: "13:00"
        activity: Lunch
      - time: "14:00"
        activity: Esoteric Languages - By Louise and Shaw
      - time: "16:00"
        activity: Pictionary Challenge - By Hackathons UK
      - time: "18:00"
        activity: How to Play BAMZOOKi - By Dipo
      - time: "18:15"
        activity: The Mods Play BAMZOOKi
      - time: "19:00"
        activity: Games Social - With GameSoc and Hack Productions
      - time: "21:00"
        activity: Day One Live-stream Ends - Goodnight!
  - name: Sunday 6th — Day 2
    events:
      - time: "10:00"
        activity: Good Morning!
      - time: "11:00"
        activity: Social - With Megi
      - time: "12:00"
        activity: DevPost Submission Process Walkthrough - By Joshua
      - time: ""
        activity: BlackRock competition with MLH
      - time: "13:00"
        activity: Lunch
      - time: "14:00"
        activity: Hacker Community Panel - With Hackathons UK and MLH
      - time: "16:00"
        activity: ⚠ DevPost Submission Deadline ⚠
      - time: ""
        activity: BAMZOOKi Competition
      - time: "17:00"
        activity: 📸 DOCUMENTATION & VIDEO DEADLINE 📄
      - time: "18:00"
        activity: 🚨 Coding Ends - Submission Deadline 🚨
      - time: "19:00"
        activity: Judging takes place
      - time: "20:30"
        activity: "Results Ceremony - Winners Announced"
      - time: "21:00"
        activity: See you next year!

# Sponsor Settings
# Disabling the sponsor document hides the "Sponsor Us!" button
# Please include relative link to a file (preferably a PDF). Word Documents are prohibited
sponsor_document_enable: false
sponsor_document: ./SponsorDeckV4.pdf

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
      - rhulcompsci
  - name: Silver
    colour: silver
    tier: 2
    companies:
      - digitalocean
      - 20i
  - name: Bronze
    colour: "#CD7F32"
    tier: 3
    companies:
      - github
  - name: Partner
    colour: null
    tier: 4
    companies:
      - stickermule
      - mlh
      - hackathonsuk

# People Settings
# Disabling the people section hides the people section
# "people[].person" are found in `/src/posts/people`
people_enable: true
people:
  - person: jcsawyer123
    role: Lead Organiser
  - person: ash
    role: Planning Lead
  - person: sevencoil
    role: Logistics Lead
  - person: hexillium
    role: Bot Whisperer
  - person: megui
    role: Secretary
  - person: ayw
    role: Vice President
  - person: thewitherbane
    role: Academic Director
  - person: tayma
    role: Outreach Director
  - person: isaac
    role: Treasurer

# FAQ Settings
# Disabling the FAQ section hides the FAQ section
# "FAQ" are found in `/src/posts/faq`
faq_enable: true
faq:
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
livestream_link: hackathonsuk

# Chat Settings
# Disabling the chat link hides the Discord button
chat_link_enable: true
chat_link: https://discord.gg/c8mq6cDwjF

# MLH Badge
# Disabling the MLH badge hides the MLH Badge
mlh_badge_enable: true
mlh_badge_year: 2021
---

<!--
  The HTML content is not used as of yet.
  Use it in the future in case you need custom markup somewhere
-->
