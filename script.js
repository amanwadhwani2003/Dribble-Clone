// console.log("Script Chal Rahi Hai")

// Handeling the video Seekbar Progress:-
const video = document.getElementById('video-player');
const seekbarProgress = document.getElementById('seekbar');
const muteButton = document.getElementById('muteBtn')

video.addEventListener('timeupdate', ()=> {
    const percentage = (video.currentTime / video.duration) * 100;
    seekbarProgress.style.width = percentage + '%';
});
video.addEventListener('mouseenter', ()=> {
    muteButton.style.opacity = '1';
})
video.addEventListener('mouseleave', ()=> {
    muteButton.style.opacity = '0';
})
muteButton.addEventListener('mouseenter', ()=> {
    muteButton.style.opacity = '1';
})
muteButton.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        muteButton.src = 'Media/volume.svg';
    } else {
        video.muted = true;
        muteButton.src = 'Media/mute.svg';
    }
});



// Making the for developer hovering section of the navbar:-
const hoverElement = document.getElementById('hover-parent');
const hiddenDiv = document.getElementById('hidden-div');
function showDiv() {
    hiddenDiv.style.visibility = 'visible';
    hiddenDiv.style.opacity = '1';
}
function hideDiv() {
    hiddenDiv.style.opacity = '0';
    setTimeout(() => {
        hiddenDiv.style.visibility = 'hidden';
    }, 300);
}

hoverElement.addEventListener('mouseenter', showDiv);
hiddenDiv.addEventListener('mouseenter', showDiv);
hoverElement.addEventListener('mouseleave', function () {
    setTimeout(() => {
        if (!hiddenDiv.matches(':hover')) {
            hideDiv();
        }
    }, 300);
});
hiddenDiv.addEventListener('mouseleave', hideDiv);


// Making video play/pause depending upon the percentage of video on the screen:-
function isElementPartiallyInViewport(el, percentage) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const elementHeight = rect.height;
    const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
    const visiblePercentage = (visibleHeight / elementHeight) * 100;
    return visiblePercentage >= percentage;
}
function handleVideoVisibility() {
    // const video = document.getElementById('myVideo');
    if (isElementPartiallyInViewport(video, 50)) {
        video.play();
    } else {
        video.pause();
    }
}

window.addEventListener('scroll', handleVideoVisibility);
window.addEventListener('resize', handleVideoVisibility);
handleVideoVisibility();


// Making tooltip view-on-hover for profile section:-
const tooltipNew = document.querySelector('.profile-tooltip-new');
const profileNew = document.querySelector('.profile-tooltip-parent');
const profileNameTooltip = document.getElementById('sticky-strap-name-a');
function showTooltip() {
    tooltipNew.style.display = 'block';
}
function hideTooltip() {
    tooltipNew.style.display = 'none';
}

profileNew.addEventListener('mouseenter', ()=> {
    setTimeout(() => {
        showTooltip()
    }, 1000);
});
profileNew.addEventListener('mouseleave', hideTooltip);
tooltipNew.addEventListener('mouseenter', showTooltip);
tooltipNew.addEventListener('mouseleave', hideTooltip);
profileNameTooltip.addEventListener('mouseenter', ()=> {
    setTimeout(() => {
        showTooltip()
    }, 1000);
});



// Making functionality of Aside Bar:-
const openAsideBtn = document.getElementById('openAsideBtn');
const closeAsideBtn = document.getElementById('closeAsideBtn');
const asideBar = document.getElementById('asideBar');
openAsideBtn.addEventListener('click', ()=> {
    asideBar.classList.add('open');
});
closeAsideBtn.addEventListener('click', ()=> {
    asideBar.classList.remove('open');
});


// Adding more functionalities of like, bookmark, share, etc. :-
const infoClick = document.getElementById('info-button');
const infoClick2 = document.getElementById('info-button-2')
const shareClick = document.getElementById('share-button');
const shareClick2 = document.getElementById('share-click')
const signupClick = document.getElementById('get-in-touch-button')
const signupClick2 = document.getElementById('get-in-touch-below-unfold')
const variableMessage = document.getElementById('variable-message')
const likeBtns = document.querySelectorAll('.like-click')
const bookmarkBtns = document.querySelectorAll('.bookmark-click')

function closeInfoPopup() {
    document.getElementById('popupContainer').style.display = "none";
    document.getElementById('info-popup').style.display = 'none';
}
function openInfoPopup() {
    document.getElementById('popupContainer').style.display = "block";
    document.getElementById('info-popup').style.display = 'block';
}
infoClick.addEventListener('click', ()=> {
    // document.body.style.backgroundColor = "Black";
    // document.getElementById('popupContainer').style.backgroundColor = "black";
    openInfoPopup();
})
infoClick2.addEventListener('click', ()=> {
    openInfoPopup();
})


function openSharePopup() {
    document.getElementById('popupContainer').style.display = "block";
    document.getElementById('share-popup').style.display = 'block';
}
function closeSharePopup() {
    document.getElementById('popupContainer').style.display = "none";
    document.getElementById('share-popup').style.display = 'none';
}
function copyLink() {
    var copyText = document.getElementById("shareLink");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    alert("Link copied: " + copyText.value);
}
shareClick.addEventListener('click', ()=> {
    openSharePopup()
})
shareClick2.addEventListener('click', ()=> {
    openSharePopup()
})


function openSignupPopup() {
    document.getElementById('popupContainer').style.display = "block";
    document.getElementById('signup-popup').style.display = 'block';
}
function closeSignupPopup() {
    document.getElementById('popupContainer').style.display = "none";
    document.getElementById('signup-popup').style.display = 'none';
}
signupClick.addEventListener('click', ()=> {
    openSignupPopup()
})
document.getElementById("close-btn").addEventListener("click", function() {
    closeSignupPopup()    
});
signupClick2.addEventListener('click', ()=> {
    openSignupPopup()
})

// console.log(Array.from(likeBtns))
Array.from(likeBtns).forEach((e)=> {
    variableMessage.innerHTML = "To like a shot, please create an account."
    e.addEventListener('click',openSignupPopup)
})

Array.from(bookmarkBtns).forEach((e)=> {
    variableMessage.innerHTML = "To save a shot, please create an account."
    e.addEventListener('click',openSignupPopup)
})


// Making of Mobile view Hamburger Functionality:-
const moreBtn = document.querySelector('.more-button')
moreBtn.addEventListener('click', () => {
    const mobileMoreImg = document.getElementById('mobile-more-img');
    const mobileNav = document.querySelector('.mobile-nav-list, .mobile-nav-list-view');
    if (mobileMoreImg.src.includes('more.svg')) {
        mobileNav.classList.remove('mobile-nav-list');
        mobileNav.classList.add('mobile-nav-list-view');
        mobileMoreImg.src = 'Media/cross.svg';
    } 
    else if (mobileMoreImg.src.includes('cross.svg')) {
        mobileNav.classList.remove('mobile-nav-list-view');
        mobileNav.classList.add('mobile-nav-list');
        mobileMoreImg.src = 'Media/more.svg';
    }
    // console.log(mobileNav);
});
