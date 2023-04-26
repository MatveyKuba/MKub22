const text = document.querySelector(".text p");

text.innerHTML = text.innerText.split("   ")
text.innerHTML = text.innerText.split("").map((letter, i) =>
`<span style="transform:rotate(${i * 8}deg")>${letter}</span>`
)
.join(" ");