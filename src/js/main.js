const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
const header = document.getElementsByClassName('header-fixed')[0];

document.addEventListener('scroll', (ev) => {
    if (ev.pageY < vh && header.classList.contains('solid')) {
        header.classList.remove('solid')
    } else if (ev.pageY > vh && !header.classList.contains('solid')) {
        header.classList.add('solid');
    }
});
