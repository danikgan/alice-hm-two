function goToPageTwo() {
    const pageTwo = document.getElementById('page-two');
    pageTwo.style.display = "block";

    const pageOne = document.getElementById('page-one');
    pageOne.style.display = "none";
}

function tocPage(number) {
    const tocPage = document.getElementById('toc-page-' + number);
    tocPage.style.display = "block";

    const tableOfContent = document.getElementById('page-two');
    tableOfContent.style.display = "none";
}

function nextPage(number) {
    let prev_number = number;
    if (number === 10) {
        number = 1;
    } else {
        number += 1;
    }

    const nextPage = document.getElementById('toc-page-' + number);
    nextPage.style.display = "block";

    const prevPage = document.getElementById('toc-page-' + prev_number);
    prevPage.style.display = "none";
}

function prevPage(number) {
    console.log(number);
    let prev_number = number;
    if (number === 1) {
        number = 10;
    } else {
        number -= 1;
    }

    const nextPage = document.getElementById('toc-page-' + number);
    nextPage.style.display = "block";

    const prevPage = document.getElementById('toc-page-' + prev_number);
    prevPage.style.display = "none";
}

function backToToCPage(number) {
    const nextPage = document.getElementById('page-two');
    nextPage.style.display = "block";

    const prevPage = document.getElementById('toc-page-' + number);
    prevPage.style.display = "none";
}

// TODO hide all