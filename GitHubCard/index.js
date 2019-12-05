/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/JvyJay')
  .then(response => {
    console.log(response)
    const info = response.data;

    const cards = document.querySelector('.cards');
    const i = userCards(info)
    cards.appendChild(i)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'NolanPic',
  'Matt-Github',
  'lydiecherilus',
  'kroaix',
  'Dazmen'
];

followersArray.forEach(person => {
  axios.get(`https://api.github.com/users/${person}`)
    .then(item => {
      let card = userCards(item.data)
      let cards = document.querySelector('.cards')
      cards.appendChild(card)
    })
})

// const followersArray = [
//   {
//     img: 'https://avatars2.githubusercontent.com/u/8883343?v=4',
//     name: 'Daniel Frehner',
//     username: 'tetondan',
//     location: 'Jackson Hole, Wy',
//     profile: 'https://api.github.com/users/tetondan',
//     followers: 92,
//     following: 8,
//     bio: `Program Manager (PT Web) @ Lambda School
//   ↵`
//   },
//   {
//     img: 'https://avatars0.githubusercontent.com/u/10288477?v=4',
//     name: 'Dustin Myers',
//     username: 'dustinmyers',
//     location: 'St George, UT',
//     profile: 'https://api.github.com/users/dustinmyers',
//     followers: 116,
//     following: 11,
//     bio: null
//   },
//   {
//     img: 'https://avatars2.githubusercontent.com/u/397632?v=4',
//     name: 'Dan Levy',
//     username: 'justsml',
//     location: 'Denver, CO',
//     profile: 'https://api.github.com/users/justsml',
//     followers: 353,
//     following: 279,
//     bio: `❤️ OSS
//     ↵Purveyor of farm-to-table JavaScript.
//     ↵Contributor to projects I use: NodeJS, ReactRouter, lodash, mongodb, docker, minio, bluebird & slate.`
//   },
//   {
//     img: 'https://avatars3.githubusercontent.com/u/4186993?v=4',
//     name: 'Luis Hernandez',
//     username: 'luishrd',
//     location: 'Provo, UT',
//     profile: 'https://api.github.com/users/luishrd',
//     followers: 124,
//     following: 7,
//     bio: `requirements => cleanCode;`
//   },
//   {
//     img: 'https://avatars2.githubusercontent.com/u/1958368?v=4',
//     name: 'Josh Knell',
//     username: 'BigKnell',
//     location: null,
//     profile: 'https://api.github.com/users/BigKnell',
//     followers: 161,
//     following: 1,
//     bio: null
//   }
// ];




/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/


function userCards(stuff) {
  let cardDiv = document.createElement('div');
  let cardImg = document.createElement('img');
  let infoDiv = document.createElement('div');
  let h3Name = document.createElement('h3');
  let usernameP = document.createElement('p');
  let locationP = document.createElement('p');
  let profileP = document.createElement('p');
  let linkA = document.createElement('a');
  let followersP = document.createElement('p');
  let followingP = document.createElement('p');
  let bioP = document.createElement('p');
  let linkTing = stuff.html_url;

  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(infoDiv);
  infoDiv.appendChild(h3Name);
  infoDiv.appendChild(usernameP);
  infoDiv.appendChild(locationP);
  infoDiv.appendChild(profileP);
  profileP.appendChild(linkA);
  infoDiv.appendChild(followersP);
  infoDiv.appendChild(followingP);
  infoDiv.appendChild(bioP);

  cardImg.src = stuff.avatar_url;
  h3Name.textContent = stuff.name;
  usernameP.textContent = stuff.login;
  locationP.textContent = `Location: ${stuff.location}`;
  // profileP.textContent = `Profile: ${stuff.html_url} `;
  linkA.innerHTML = `Profile: ${linkTing.link(stuff.html_url)}`;
  // linkA.href = stuff.html_url;
  // linkA.textContent = stuff.html_url;
  followersP.textContent = `Followers: ${stuff.followers}`;
  followingP.textContent = `Following: ${stuff.following}`;
  bioP.textContent = `Bio: ${stuff.bio}`;

  cardDiv.classList.add('card');
  infoDiv.classList.add('card-info');
  h3Name.classList.add('name');
  usernameP.classList.add('username');

  return cardDiv;
}

// followersArray.forEach(stuff => {
//   container.appendChild(userCards(stuff.img, stuff.name, stuff.username, stuff.location, stuff.profile, stuff.followers, stuff.following, stuff.bio))
// })

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/