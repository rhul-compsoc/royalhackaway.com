---
name: Royal Hackaway v5
short_name: Royal Hackaway v5
subtitle: Create something awesome
render: true
is-public: true
is-over: false

# Mark that a page is destined to be posted at "/" instead of something like "/events/hackawayv5"
# Sets up (temporary) redirect from "/events/hackawayv5" to "/"
# Redirects array (permanently) redirects to the actual page
homepage: false
redirects:
  - /v5
  - /2022

# Enable/disable the countdown timer on the homepage
# It counts down to Hackaway V4 start (and then rests at 0 days, 0 hours, 0 minutes and 0 seconds)
start_timer_enable: true
start: "2022-02-05T10:00:00+00:00"
end: "2022-02-06T18:00:00+00:00"

# A text representation of the time period. Stick anything you like here.
display_date: Saturday 5th February - Sunday 6th February 2022

# The start and end of the hacking period
# Not used yet, but might be useful for the future
hacking_start: 2022-02-05T11:00:00+00
hacking_end: 2022-02-06T13:00:00+00

# A description of the event in hand.
# Short is currently not being used
# Full is used for the site jumbotron and for SSO
short-description: An exciting two-day online Hackathon, for students across the UK or around the world
full-description: >
  Royal Hackaway is Royal Holloway's annual hackathon.

  Open to university students from the UK and around the world,
  in this two-day hackathon you'll work as a team to build a project.
  You'll pick up new skills, try out new tech, and meet new people.


  This is our fifth time running this event, and we're excited to
  create a more inclusive and rewarding event for all.

# Enable the section which brings up the dictionary definition of what a hackathon is
hackathon_definition_enable: true

# Location Settings
# Describes the location the event is taking place
# Disabling the location embed hides the iframe for "location_embed_link"
location: Windsor Building, Royal Holloway, University of London
location_embed_enable: true
location_embed_link: https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.759701888386!2d-0.5680310838687079!3d51.42584067962183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487679fe3dce3113%3A0x47f0f448b19730a3!2sWindsor+Building!5e0!3m2!1sen!2suk!4v1546448505106

# Ticket Settings
# Disabling the button greys it out
ticket_button_enable: false
ticket_button_link: https://tickets.royalhackaway.com/
ticket_button_label: Coming soon...

# Schedule Settings
# Disabling the schedule just hides the section
schedule_enable: false
schedule: []

# Sponsor Settings
# Disabling the sponsor document hides the "Sponsor Us!" button
# Please include relative link to a file (preferably a PDF). Word Documents are prohibited
sponsor_document_enable: false
sponsor_document: null

# Disabling the sponsor list hides the section
# "Companies" are found in `/src/posts/companies`
# 1. Create a new folder
# 2. Create and populate `index.md`
# 3. Refer to company via the folder name (or filename if not "index.md")
sponsors_list_enable: true
sponsors: []

# People Settings
# Disabling the people section hides the people section
# "people[].person" are found in `/src/posts/people`
people_enable: true
people:
  - person: ash
    role: President

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
livestream_link: hackathonsuk

# Chat Settings
# Disabling the chat link hides the Discord button
chat_link_enable: true
chat_link: https://discord.gg/c8mq6cDwjF

# MLH Badge
# Disabling the MLH badge hides the MLH Badge
mlh_badge_enable: false
mlh_badge_year: 2022
---

<!--
  The HTML content is not used as of yet.
  Use it in the future in case you need custom markup somewhere
-->
