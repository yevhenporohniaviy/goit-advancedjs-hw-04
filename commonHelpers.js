import{S as b,a as d,i as c}from"./assets/vendor-64b55ca9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();var L=new b(".gallery a");function u(){L.refresh()}d.defaults.baseURL="https://pixabay.com/";const i={form:document.querySelector("#search-form"),gallery:document.querySelector(".gallery")},o={query:"",page:1,loader:document.querySelector(".load-more"),showLoader:function(){this.loader.style.display="block"},hideLoader:function(){this.loader.style.display="none"},updateQuery:function(e){this.query=e},nextPage:function(){this.page++},resetPage:function(){this.page=1}};o.hideLoader();async function f(e,s){return await d.get("api/",{params:{key:"42155230-030ff0e38ddad02fbff1fc379",page:s,q:e}})}function h({hits:e,total:s,totalHits:a}){return e.map(({webformatURL:l,largeImageURL:t,tags:r,likes:n,views:g,comments:m,downloads:y})=>`
      <a class="photo-card" href="${t}">
        <img src="${l}" alt="${r}" loading="lazy" />
        <div class="info">
        <p class="info-item">
            <b>Likes</b>
            ${n}
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
    </div>`).join("")}i.form.addEventListener("submit",v);function v(e){e.preventDefault();const{searchQuery:s}=e.currentTarget.elements;s.value&&(o.updateQuery(s.value.trim()),o.resetPage(),w())}async function w(){o.hideLoader();try{const{data:e}=await f(o.query,o.page);if(!e.hits.length)throw i.gallery.innerHTML="",c.show({color:"red",position:"topRight",message:`"We're sorry, but you've reached the end of search results."`}),new Error("Error");c.show({color:"green",position:"topRight",message:`"Hooray! We found ${e.totalHits} images."`}),i.gallery.innerHTML=h(e),p.observe(o.loader),u(),o.showLoader()}catch(e){console.log(e)}}let p=new IntersectionObserver(q,{rootMargin:"450px"});function q(e,s){e.forEach(a=>{a.isIntersecting&&(o.nextPage(),H())})}async function H(){try{const{data:e}=await f(o.query,o.page),s=Math.round(e.totalHits/5);o.page>s&&p.unobserve(o.loader),i.gallery.insertAdjacentHTML("beforeend",h(e));const{height:a}=i.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2.5,behavior:"smooth"}),u()}catch(e){console.log(e)}}
//# sourceMappingURL=commonHelpers.js.map
