const fullPhotos = [
   "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg"
    
]
let fullPhotoPopup = document.querySelector('.popup')
let fullPhoto = document.querySelector('.full-photo-img')
let previews = document.querySelectorAll('.gallery-photo_preview')
document.addEventListener('keydown', function (evt) {
    if ((evt.code === 'Escape' || evt.code === 'Enter')  && !fullPhoto.classList.contains('hidden')) {
        console.log('Popup hidden with button ' + evt.code)
        fullPhotoPopup.classList.add('hidden')
    }
})
for (let i = 0; i < previews.length; i++) {
    previews[i].addEventListener('click', function () {
        fullPhoto.src = fullPhotos[i]

        fullPhotoPopup.classList.remove('hidden')
    })
}