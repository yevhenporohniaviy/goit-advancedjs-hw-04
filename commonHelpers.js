import{S as b,a as d,i as c}from"./assets/vendor-64b55ca9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();var w=new b(".gallery a");function u(){w.refresh()}d.defaults.baseURL="https://pixabay.com/";const n={form:document.querySelector("#search-form"),gallery:document.querySelector(".gallery")},r={query:"",page:1,loader:document.querySelector(".load-more"),showLoader:function(){this.loader.style.display="block"},hideLoader:function(){this.loader.style.display="none"},updateQuery:function(e){this.query=e},nextPage:function(){this.page++},resetPage:function(){this.page=1}};r.hideLoader();async function f(e,s){return await d.get("api/",{params:{key:"42155230-030ff0e38ddad02fbff1fc379",page:s,orientation:"horizontal",safesearch:!0,per_page:40,q:e}})}function h({hits:e,total:s,totalHits:a}){return e.map(({webformatURL:l,largeImageURL:t,tags:o,likes:i,views:g,comments:m,downloads:y})=>`
      <a class="photo-card" href="${t}">
        <img src="${l}" alt="${o}" loading="lazy" />
        <div class="info">
        <p class="info-item">
            <b>Likes</b>
            ${i}
        </p>
            <p class="info-item">
        <b>Views</b>
        ${g}
        </p>
        <p class="info-item">
            <b>Comments</b>
            ${m}
        </p>
        <p class="info-item">
            <b>Downloads</b>
            ${y}
        </p>
    </div>`).join("")}n.form.addEventListener("submit",L);function L(e){e.preventDefault();const{searchQuery:s}=e.currentTarget.elements,a=s.value.trim();a&&(r.updateQuery(a),r.resetPage(),v())}async function v(){r.hideLoader();try{const{data:e}=await f(r.query,r.page);if(!e.hits.length)throw n.gallery.innerHTML="",c.show({color:"red",position:"topRight",message:`"We're sorry, repeat search."`}),new Error("Error");c.show({color:"green",position:"topRight",message:`"Hooray! We found ${e.totalHits} images."`}),n.gallery.innerHTML=h(e),p.observe(r.loader),u(),window.scrollTo({top:0,behavior:"smooth"}),r.showLoader()}catch(e){console.log(e)}}let p=new IntersectionObserver(q,{rootMargin:"500px"});function q(e,s){e.forEach(a=>{a.isIntersecting&&(r.nextPage(),H())})}async function H(){try{const{data:e}=await f(r.query,r.page),s=Math.ceil(e.totalHits/40);if(r.page>s)r.hideLoader(),p.unobserve(r.loader),c.show({color:"red",position:"topRight",message:`"We're sorry, but you've reached the end of search results."`});else{n.gallery.insertAdjacentHTML("beforeend",h(e));const{height:a}=n.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2.5,behavior:"smooth"}),u()}}catch(e){console.log(e)}}
//# sourceMappingURL=commonHelpers.js.map
