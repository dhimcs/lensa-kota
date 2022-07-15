const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", () => {
    alert("Sorry, We Don't Have This Feature Right Now!");
});

// Navbar
const homeLinkUl = document.querySelector("#home-link");
const aboutLinkUl = document.querySelector("#about-link");
const contactLinkUl = document.querySelector("#contact-link");
const homeLink = document.querySelector(".home-link");
const aboutLink = document.querySelector(".about-link");
const contactLink = document.querySelector(".contact-link");
// Body
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");

homeLinkUl.addEventListener("click", () => {
    // navbar
    homeLink.classList.add("link-secondary");
    aboutLink.classList.remove("link-secondary");
    contactLink.classList.remove("link-secondary");
    // body
    home.classList.remove("none");
    about.classList.add("none");
    contact.classList.add("none");

})
aboutLinkUl.addEventListener("click", () => {
    // navbar
    homeLink.classList.remove("link-secondary");
    aboutLink.classList.add("link-secondary");
    contactLink.classList.remove("link-secondary");
    // body
    home.classList.add("none");
    about.classList.remove("none");
    contact.classList.add("none");
})

contactLinkUl.addEventListener("click", () => {
    homeLink.classList.remove("link-secondary");
    aboutLink.classList.remove("link-secondary");
    contactLink.classList.add("link-secondary");
    // body
    home.classList.add("none");
    about.classList.add("none");
    contact.classList.remove("none");
})


// Fetch External Data
function getExternalData(data){
    return fetch(data)
    .then((response) => response.json())
    .then((response) => response.List);
}
// ARTICLES
homeLink.addEventListener("click", async () => {
    const article = await getArticleList();
    updateUIArticles(article);
});

const getArticleList = async () => {
    const article = await getExternalData("https://raw.githubusercontent.com/odhimm/json/main/Tugas2/articles.json");
    updateUIArticles(article);
}
getArticleList();

const updateUIArticles = async (article) => {
    let cards = "";
    article.forEach((element) => {
        cards += articleCardList(element);
    });
    const articleContainer = document.querySelector(".articles");
    articleContainer.innerHTML = cards;
}

const articleCardList = (article) => {
    return `<div class="home pt-5 px-4">
    <article>
        <section>
            <div class="card shadow-sm border-light">
                <div class="card-body pb-5">
                    <h5 class="card-title fs-3">${article.title}</h5>
                    <p class="card-text">${article.description}</p>
                    <p class="position-absolute bottom-0 start-0 pb-2 ps-3 text-black-50">${article.writer}, ${article.date}</p>
                    <a href="${article.link}" class=" btn-link-more position-absolute bottom-0 end-0 pb-4 pe-4">Read More</a>
                </div>
            </div>
        </section>
    </article>
</div>`
}


// ABOUT
aboutLink.addEventListener("click", async () => {
    const about = await getAboutList();
    updateUIAbout(about);
});

const getAboutList = async () => {
    const about = await getExternalData("https://raw.githubusercontent.com/odhimm/json/main/Tugas2/about.json");
    updateUIAbout(about);
}

const updateUIAbout = async (about) => {
    let cards = "";
    about.forEach((element) => {
        cards += aboutCardList(element);
    });
    const aboutContainer = document.querySelector(".profiles");
    aboutContainer.innerHTML = cards;

}

function aboutCardList(about){
    return `<div class="col-md-6 py-3">
    <div class="card border-white shadow">
        <div class="card-body">
            <h3 class="card-title">${about.name}</h3>
            <h6>${about.description}</h6>
            <span class="iconify" data-icon="akar-icons:link-chain" style="color: black;" data-width="24"></span>
            <a href="${about.link1st}" class="text-link pe-3">${about.link1stTitle}</a>
            <span class="iconify" data-icon="akar-icons:instagram-fill" style="color: black;" data-width="24"></span>
            <a href="${about.link2nd}" class="text-link pe-3">${about.link2ndTitle}</a>
        </div>
    </div>
</div>`
}