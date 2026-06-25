import{a as u,S as d,i}from"./assets/vendor--e875Ek4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="56433507-28871935314b081e8c424dd0b";function m(s){return u.get("https://pixabay.com/api/",{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const r=s.map(o=>`
        <li class="items-list">
            <a href="${o.largeImageURL}">
              <img src="${o.webformatURL}" class="img" alt="${o.tags}"/>
            </a>
          <div class="hits-p">
            <p>Likes:${o.likes}</p>
            <p>Views:${o.views}</p>
            <p>Comments:${o.comments}</p>
            <p>Downloads:${o.downloads}</p>
          </div>
        </li>`).join("");c.innerHTML=r,p.refresh()}function y(){c.innerHTML=""}function g(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",s=>{s.preventDefault();const r=s.currentTarget,n=new FormData(r).get("search-text");y(),g(),m(n).then(e=>{if(e.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(e.hits),r.reset()}).catch(e=>{i.error({title:"Error",message:"Something went wrong. Please try again later!"}),console.log(e)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
