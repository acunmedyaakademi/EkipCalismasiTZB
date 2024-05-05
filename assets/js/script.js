// zehra


function qs(selector) {
    let element = document.querySelector(selector)

    return element
}

const sunmode = qs(".sunmode")
const darkmode = qs(".darkmode")
const body = qs("body")

sunmode.addEventListener("click", (e) => {
    console.log("sdjngdkfjs");
    body.classList.add("darkModeActive")
    sunmode.style.display = "none"
    darkmode.style.display = "flex"
})

darkmode.addEventListener("click", (e) => {
    body.classList.remove("darkModeActive")
    sunmode.style.display = "flex"
    darkmode.style.display = "none"
})

// zehra

// busra
const formData = document.querySelector(".search")
const content = document.querySelector(".content")
formData.addEventListener("submit", init)



function getKullanici() {

    return localStorage.setItem('kullanicilar', JSON.stringify(kullanicilar));

}


let kullanicilar = JSON.parse(localStorage.getItem('kullanicilar')) || []



const yeniKullanicilar = qs(".yeniKullanici")



function eskiKullanicilar() {

    console.log(kullanicilar);

    yeniKullanicilar.innerHTML = ""
    for (const kullanici of kullanicilar) {


        yeniKullanicilar.innerHTML = `

        <img class="kullaniciimg" src="${kullanici.img}" alt="">

        <div class="kullanici-div">
            <h3>Kullanıcı Adı</h3>
            <h2>${kullanici.name}</h2>
        </div>
        <div class="kullanici-div">
            <h3>Lokasyon</h3>
            <h2>${kullanici.lokasyon}</h2>
        </div>
        <div class="kullanici-div">
            <h3>Bio</h3>
            <h2>${kullanici.bio}</h2>
        </div>
             
          
         
         
         `
    }

}







async function getData(user) {
    const request = await fetch(`https://api.github.com/users/${user}`);
    const data = await request.json();
    return data
}

async function init() {

    formData.addEventListener("submit", async function (e) {
        e.preventDefault();
        const searchValue = formData["arama"].value;
        const data = await getData(searchValue);
        console.log(data);

        const yeniKullanici = {
            img: data.avatar_url,
            name: data.login,
            bio: data.bio,
            lokasyon: data.location

        }
        kullanicilar.push(yeniKullanici)
        getKullanici()
        eskiKullanicilar()
        console.log(kullanicilar);

        return content.innerHTML = `
        <div class="photo">
                <img src="${data.avatar_url}" alt="">
            </div>
    
            <div class="text-content">
                <h3>${data.created_at}</h3>
                <p>Katıldığı Tarih</p>
                <div class="nickname">
                    <p>@${data.login}</p>
                    <div class="bio">
                        <p>${data.bio}</p>
                    </div>
                    <div class="user-info">
                        <div class="info">
                            <p>Repos</p>
                            <h4>${data.public_repos}</h4>
                        </div>
                        <div class="info">
                            <p>Followers</p>
                            <h4>${data.followers}</h4>
                        </div>
                        <div class="info">
                            <p>Following</p>
                            <h4>${data.following}</h4>
                        </div>
                    </div>
                    <div class="user-internet">
                        <div class="internet">
                            <img src="assets/img/local.svg" alt="">
                            <p>${data.location}</p>
                        </div>
                        <div class="internet">
                            <img src="assets/img/x.svg" alt="">
                            <p>${data.twitter_username}</p>
                        </div>
                        <div class="internet">
                            <img src="assets/img/link.svg" alt="">
                            <p>${data.html_url}</p>
                        </div>
                        <div class="internet">
                            <img src="assets/img/office.svg" alt="">
                            <p>${data.company}</p>
                        </div>
                    </div>
                </div>
            </div>
        `

        // document.body.insertAdjacentHTML('beforeend',content);

    })


}
init();
// busra bitis 