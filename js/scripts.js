/**
 * Created by h205p2 on 4/13/17.
 */
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());


    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    if(window.location.pathname == 'http://otisscott.github.io/ShareTube/') {
        location.href = "http://otisscott.github.io/ShareTube/postsignin.html";
    }
}
