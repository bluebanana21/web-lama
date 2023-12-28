data = [
{
    'img1': "aset/donut almost.png",
    'img2': "aset/donut almost.png",
    'title': "Render",
    'subtitle': " Zenit",
    'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit eaque veniam deserunt nemo expedita!",
},
{
    'img1': "aset/Screenshot 2023-12-11 102433.png",
    'img2': "aset/Screenshot 2023-12-11 102433.png",
    'title': "Render",
    'subtitle': " Zenit",
    'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit eaque veniam deserunt nemo expedita!",
}
];

var container = document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML +=
    `<div class="project">
    <div class="img-project">
        <img src="`+element.img1+`"="">
        <img src="${element.img2}"="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <h2>${element.desc}</h2>
    </div>
    <button class="read-more">Read more</button>
</div>`
});

data_social_media = [{
    'icon1': '<iconify-icon icon="uil:instagram-alt" style="color:rgb(50, 130, 184);"></iconify-icon>',
    'icon2': '<iconify-icon icon="la:hotdog" style="color:rgb(50, 130, 184);"></iconify-icon>',
    'icon3': '<iconify-icon icon="mdi:github" style="color:rgb(50, 130, 184);"></iconify-icon>'
}]

var socialmediaHeader = document.querySelector('.nav-social-media')

data_social_media.forEach(element => {
    socialmediaHeader.innerHTML +=
    `<ul>
    <li>
        <a href="">
            <iconify-icon icon="uil:instagram-alt" style="color:rgb(50, 130, 184);"></iconify-icon>
        </a>
    </li>
    <li>
        <a href="https://www.pictureofhotdog.com/about">
            <iconify-icon icon="la:hotdog" style="color:rgb(50, 130, 184);"></iconify-icon>
        </a>
    </li>
    <li>
        <a href="https://github.com/bluebanana21">
            <iconify-icon icon="mdi:github" style="color:rgb(50, 130, 184);"></iconify-icon>
        </a>
    </li>
</ul>`
});

var socialmediaFooter = document.querySelector('.footer .nav-social-media')

data_social_media.forEach(element => {
    socialmediaFooter.innerHTML +=
    `<ul>
    <li>
        <a href="">
            <iconify-icon icon="uil:instagram-alt" style="color:rgb(50, 130, 184);"></iconify-icon>
        </a>
    </li>
    <li>
        <a href="https://www.pictureofhotdog.com/about">
            <iconify-icon icon="la:hotdog" style="color:rgb(50, 130, 184);"></iconify-icon>
        </a>
    </li>
    <li>
        <a href="https://github.com/bluebanana21">
            <iconify-icon icon="mdi:github" style="color:rgb(50, 130, 184);"></iconify-icon>
        </a>
    </li>
</ul>`
});

