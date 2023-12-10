let seeMore = document.getElementById('see-more');
let moreProjects = document.getElementsByClassName('more-projects');
let showMore = () => {
    for (let i = 0; i < moreProjects.length; i++){
        moreProjects[i].style.display = "block";
    }
}

seeMore.onclick = showMore;