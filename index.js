import{a as f,S as m,i}from"./assets/vendor--e875Ek4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="56433507-28871935314b081e8c424dd0b";function h(s){return f.get("https://pixabay.com/api/",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(r=>`
        <li class="items-list">
            <a href="${r.largeImageURL}">
              <img src="${r.webformatURL}" class="img" alt="${r.tags}"/>
            </a>
          <div class="hits-p">
            <p>Likes:${r.likes}</p>
            <p>Views:${r.views}</p>
            <p>Comments:${r.comments}</p>
            <p>Downloads:${r.downloads}</p>
          </div>
        </li>`).join("");u.innerHTML=o,y.refresh()}function L(){u.innerHTML=""}function w(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget,n=new FormData(l).get("search-text");L(),w(),h(n).then(e=>{if(c(),e.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(e.hits),o.reset()}).catch(e=>{c(),i.error({title:"Error",message:"Something went wrong. Please try again later.!"}),console.log(e)})});
//# sourceMappingURL=index.js.map
