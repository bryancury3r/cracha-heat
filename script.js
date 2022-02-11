
const linksSocialMedia = {
  github: 'bryancury3r',
  youtube: '6DN2Nj7yp0LQ3wAT9U67eg',
  facebook: 'Bryancuryy',
  twitter: 'maykbrito',
  instagram: 'gabriel_swcury'
}

function changeSocialMediaLinks() {
 
  for(let li of socialLinks.children){
   const social = li.getAttribute('class');

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  
  }
}

changeSocialMediaLinks()


function getGithubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGithubProfileInfos()


