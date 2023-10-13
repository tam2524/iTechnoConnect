const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;

        const increment = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
