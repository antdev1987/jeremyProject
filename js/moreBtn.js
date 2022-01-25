
let moreText = document.querySelectorAll(`.parent .more`);

for (const item of moreText) {
  item.style.display = 'none';
}

function readMore(city) {
  let dots = document.querySelector(`.parent[data-position="${city}"] .dots`);
  let moreText = document.querySelector(
    `.parent[data-position="${city}"] .more`
  );
  let btnText = document.querySelector(
    `.parent[data-position="${city}"] .myBtn`
  );
  let div = document.querySelector(".btnShow-end")

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = '<span>+</span> Read more';
    moreText.style.display = 'none';
    btnText.classList.add("btnflex")
  } else {
    dots.style.display = 'none';
    btnText.textContent = 'Read less';
    moreText.style.display = 'inline';
    div.classList.add("txt-end")
    btnText.classList.remove("btnflex")
  }
}
