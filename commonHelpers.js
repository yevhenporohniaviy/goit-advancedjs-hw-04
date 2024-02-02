import{S as y,i as c,a as b}from"./assets/vendor-64b55ca9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();var v=new y(".gallery a");function d(){v.refresh()}const i={form:document.querySelector("#search-form"),gallery:document.querySelector(".gallery")},o={query:"",page:1,loader:document.querySelector(".load-more"),showLoader:function(){this.loader.style.display="block"},hideLoader:function(){this.loader.style.display="none"},updateQuery:function(e){this.query=e},nextPage:function(){this.page++},resetPage:function(){this.page=1}};o.hideLoader();async function u(e,s){return await b.get("https://pixabay.com/api",{params:{key:"42155230-030ff0e38ddad02fbff1fc379",page:s,q:e}})}function f({hits:e,total:s,totalHits:n}){return e.map(({webformatURL:l,largeImageURL:t,tags:r,likes:a,views:p,comments:g,downloads:m})=>`
      <a class="photo-card" href="${t}">
        <img src="${l}" alt="${r}" loading="lazy" />
        <div class="info">
        <p class="info-item">
            <b>Likes</b>
            ${a}
        </p>
            <p class="info-item">
        <b>Views</b>
        ${p}
        </p>
        <p class="info-item">
            <b>Comments</b>
            ${g}
        </p>
        <p class="info-item">
            <b>Downloads</b>
            ${m}
        </p>
    </div>`).join("")}i.form.addEventListener("submit",L);function L(e){e.preventDefault();const{searchQuery:s}=e.currentTarget.elements;s.value&&(o.updateQuery(s.value.trim()),o.resetPage(),w())}async function w(){o.hideLoader();try{const{data:e}=await u(o.query,o.page);if(!e.hits.length)throw i.gallery.innerHTML="",c.show({color:"red",position:"topRight",message:`"We're sorry, but you've reached the end of search results."`}),new Error("Error");c.show({color:"green",position:"topRight",message:`"Hooray! We found ${e.totalHits} images."`}),i.gallery.innerHTML=f(e),h.observe(o.loader),d(),o.showLoader()}catch(e){console.log(e)}}let h=new IntersectionObserver(q,{rootMargin:"450px"});function q(e,s){e.forEach(n=>{n.isIntersecting&&(o.nextPage(),H())})}async function H(){try{const{data:e}=await u(o.query,o.page),s=Math.round(e.totalHits/5);o.page>s&&h.unobserve(o.loader),i.gallery.insertAdjacentHTML("beforeend",f(e));const{height:n}=i.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:n*2.5,behavior:"smooth"}),d()}catch(e){console.log(e)}}
//# sourceMappingURL=commonHelpers.js.map
