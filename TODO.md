# TODO

## Login & Register

- [ ] Create models for `Host` and `Guest`
- [ ] Create serializers for `Host` and `Guest`
- [ ] Create endpoint for registration of a new `Host`. 
  - Application flow should be: Register as `Host` (supply username & data) -> Link Spotify -> Go to event home page
- [ ] Create endpoint for joining event as `Guest`.
  - Like Jackbox Games, the `Guest` shouldn't have a password. They just choose a username, input an event code, and they're in.
  - Application flow should be: Join Event (input event code and username) -> Go to event home page (same as `Host`)

## Suggest a Song

- [ ] Implement endpoint for searching using the Spotify API.
  - This will need to apply some data massaging of the JSON, because Spotify's response on their Search API is huge.
  - Need to determine whether the application key from Spotify will have the bandwidth for mimicing the native Spotify instant update search.
- [ ] Implement endpoint / Django Channels connection for receiving song suggestion.
  
## Vote

- [ ] Share suggestions from above with Django Channels.
- [ ] Implement endpoint / Django Channels connection for receiving votes on suggestion.

## Playlist & Playback Management

- [ ] Implement endpoint to create playlist for event setup.
- [ ] Add successful suggestion to playlist and queue.
