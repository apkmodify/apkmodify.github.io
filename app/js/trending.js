let trendings = new XMLHttpRequest();
trendings.open('get', 'app/json/trending.json', 'json/trending.json', true);
trendings.send();
trendings.onload = function(){
	if(this.readyState == 4 && this.status == 200){
		let trending = JSON.parse(this.responseText);
		let output = "";
		for(let item of trending){
			output += `
<a href="${item.link}" class="shadow-0 swiper-slide">
  <div class="item p-1">
    <div class="card rounded-9 bg-light hover-shadow" style="max-width: 9em; min-width: 9em; min-height: 15em; max-height: 15em">
      <img src="${item.images}" class="rounded-7 card-img-top" alt="${item.alt}" loading="lazy"/>
        <span class="badge fs-badge rounded-pill fw-bold bg-danger position-absolute shadow-2 mt-1 ms-1 top-0 start-0">${item.badge}</span>
      <div class="card-body bg-light rounded-8 p-2">
        <h2 class="card-title fs-title text text-danger fw-bold">${item.title}</h2>
        <p class="card-text fs-sm fw-bold text-muted">${item.descriptions}</p>
      </div>
    </div>
  </div>
</a>
			`;}
document.querySelector(".trending").innerHTML = output;
}}