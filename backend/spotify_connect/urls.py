'''
 Spotify API endpoint URLs
'''

# Authorization

'''
 1. Initial authorization
 
 Request:
    client_id: from user_settings.py
    response_type: 'code'
    redirect_uri: redirect url to complete authorization
    state: [optional] hash string to provide additional security
    scope: [optional] what access does this app get to user's data?
    show_dialog: [optional] prompt user to approve app if they have already. true or false

 Response:
    code: auth code to exchange for access token
    state: value of state from request. compare to original to verify authenticity

 2. Access Token
 
 Request:
    grant_type: "authorization_code"
    code: auth code from above
    redirect_uri: just used for validation, no redirect. must match
    
    Header: Authorization: Authorization: Basic [base64 encoded client_id]:[base64 encoded client_secret]

 Response:
    access_token: store in db with Host
    token_type: Bearer [always]
    scope: scopes granted
    expires_in: time in seconds until expiration
    refresh_token: use in place of authorization_code in new POST request to intial_auth_url 
'''

initial_auth_url = 'https://accounts.spotify.com/authorize'
access_token_url = 'https://accounts.spotify.com/api/token'
redirect_uri = 'http://localhost:3000/callback/'