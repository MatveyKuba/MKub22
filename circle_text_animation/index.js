const text2 = document.querySelector(".text p");

text2.innerHTML = text2.innerText.split("   ")
text2.innerHTML = text2.innerText.split("").map((letter, i) =>
`<span style="transform:rotate(${i * 8}deg")>${letter}</span>`
)
.join(" ");