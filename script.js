document.addEventListener('DOMContentLoaded', () => {
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        observer.observe(content);
    });
});
