for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        document.querySelector('body>div:nth-of-type(' + i + ')>div:nth-of-type(' + j + ')').innerHTML = i * j
    }
}