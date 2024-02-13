document.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded event fired");

  // Selecting necessary elements
  var searchButton = document.getElementById("search_button");
  var back = document.getElementById("back");
  const url = "https://api.github.com/users";
  const searchInputEl = document.getElementById("input_item");
  const profileContainerEl = document.getElementById("profile_name");
  const loadingEl = document.getElementById("loading");
  const errormsgEL = document.getElementById("error");

  // Adding event listener to search button
  searchButton.addEventListener("click", async () => {
       
      const username = searchInputEl.value;
      console.log("Fetching profile for username:", username);
    
      profileContainerEl.innerHTML = `
      <div class="load"  >
      <div class="profile-name1">
        <div class="user-details1">
        <div class="image1">
  <div class="anim1"></div>
        </div>
        <div class="names1">
        <div class="name10">
          <div class="anim1"></div>
        </div>
        <div class="name11">
          <div class="anim1"></div>
        </div>
      </div>
      </div>
        <div class="follow-details1">
  <div class="followers10">
  <div class="follow-text1">
    <div class="anim1"></div>
  </div>
  <div class="follow-no1">
    <div class="anim1"></div>
  </div>
  </div>
  <div class="followers11">
    <div class="followers-text1">
      <div class="anim1"></div>
    </div>
    <div class="followers-no1">
      <div class="anim1"></div>
    </div>
    </div>
    <div class="followers12">
      <div class="repose-text1">
        <div class="anim"></div>
      </div>
      <div class="repose-no1">
        <div class="anim1"></div>
      </div>
      </div>
        </div>
      </div>
      
    </div>
      `
      
     ;
  loadingEl.innerText = "";
  loadingEl.style.color = "black";
  loadingEl.style.fontSize = "initial"; 
  
    
      try {
          const res = await fetch(`${url}/${username}`);
          const data = await res.json();
          console.log("API response:", data);
          
          if (data.bio) {
              loadingEl.innerText = "";
              const profileMarkup = generateProfile(data);
              console.log("Generated profile markup:", profileMarkup);
              profileContainerEl.innerHTML = profileMarkup;
          } else {
          
         
             
              profileContainerEl.innerHTML = 
              `  <div class="error">
              <div class="error-msg" id="error">
              <p class="p1">No data available
           </p><br><p class="p2">Try Again...
           </p>
              </div>
                  <div class="back-button20">
                      <button class="back" onclick='
                          document.getElementById("search_container").style.transform="translateX(0vw)";
                          document.getElementById("profile_name").style.transform="translateX(110vw)";
                      '>Search Again...</button>
                  </div>
                 </div>`;
          }
          
      } catch (error) {
          console.error("Error fetching profile:", error);
          errormsgEL.innerText = "";
       
      }
  });

  // Function to generate profile HTML markup
  const generateProfile = (profile) => {
      return `
      <div class="profile-box">
      <div class="buttons">
      <div class="back-button">
      <button class="back" id="back" onclick="
      document.getElementById('search_container').style.transform='translateX(0vw)';
      document.getElementById('profile_name').style.transform='translateX(110vw)';
      ">Search Again...</button>
      </div>
      <div class="profile-check">
      <a href="${profile.html_url}" target="_black">
      <img src="assets/github.png" alt="" srcset="" >
      <p>View User</p>
  </a>
      </div>
      </div>
   
      </div>
      <div class="p-details">
      <div class="profile-name">
      <div class="user-profile">
          <img alt="avatar" src="${profile.avatar_url}" / width="60%" height:"1%" style="border-radius:50%;">
       

      </div>
      <div class="user-name">
      <h1>${profile.name}</h1>
      <h3>@${profile.login}</h3>
      </div>
  </div>
  
  <div class="status">
  <div class="follows">
  <h3>Followers</h3>
  <p>${profile.followers}</p>
  </div>
  <div class="following">
  <h3>Followings</h3>
  <p>${profile.following}</p>
  </div>
  <div class="repose">
  <h3>Repos</h3>
  <p>${profile.public_repos}</p
</div>
  </div>
      </div>
     
      </div>
      `
     
  };
  searchButton.onclick=function(){
      document.getElementById('search_container').style.transform="translateX(-110vw)";
      document.getElementById('profile_name').style.transform="translateX(0vw)";
  }
  back.onclick=function(){
    
  }
  function back(){
      alert('dd')
  }

});
