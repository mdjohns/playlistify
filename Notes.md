# Project Notes

## Tech Stack

- **Backend**: Express JS
- **DB**: ???
- **Frontend**: React, Vue, or Svelte
- WebSocket integration will be priority / challenge for real-time voting

## Feature Areas

### Account / User Types

**Admin**

- can create account & login
- can link Spotify to account
- can create an event
- can vote / suggest

**Guest**

- can join event with event code & set display name
- can vote / suggest

### Spotify Integration

- Create collaborative playlist on admin's account
- Search for songs/albums/artists
- Add to playlist
- Add to queue
- Start / stop playback

### Vote / Suggest

- Suggest a song (**Websocket**)
- Vote on song (**Websocket**)
- Display vote counts in real time (**Websocket**)
- Notify if song was added to playlist

## API breakdown

### Account

`/account`

- `/register`
  - `POST` request
  - body: email,password
- `/link_spotify`
  - `POST` / maybe `PATCH` request
  - will need sub URI to authorize with client secrets etc

### Event

`/event`

- `/create`
  - `POST` request
  - body: idk depends on DB stuff i think, maybe the username of the host?
- `/join`
  - `GET` request?
  - query params: `displayName`, `joinCode` maybe some other stuff

### Spotify

These are essentially just passthroughs to the various Spotify APIs
`/spotify` -- might need to be a sub URI of particular event (`/event?code=UXRF/spotify`)

- `/create_playlist`
  - request type depends on Spotify's API spec
- `/search`
  - `GET`
  - pass spotify's params probably (query type, query, # of results, etc)
- `/add_song`
  - `POST` ?
  - pass spotify's params probably (song id, etc)
- `/add_to_queue`
  - is this needed?
- `/toggle_playback`
  - this may need to be a future feature

### Vote

**This will likely all be Websockets.**
Once a guest/host joins an event, there should be a websocket connection open.
We will probably pass votes/suggestions through the same endpoint and specify type in the request but need to research more.

- `/suggest`
  - pass song id, title, artist, album
  - broadcast(?) suggestion. on the frontend this should trigger a suggestion modal overlay
- `/vote`
  - when suggestion is broadcast and modal overlay appears, it's time to vote
  - pass Boolean (most likely)
  - **would like to display vote totals in real time for each client**
  - once all connected clients have voted, we should trigger a vote notify
- `/vote_notify`
  - this can probably be standard HTTP if it is more convenient
  - return whether most recent song from voting was added
  - displays toast notification to frontend
