import{a as d,S as f,i as m}from"./assets/vendor--e875Ek4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="56433507-28871935314b081e8c424dd0b";function y(o){return d.get("https://pixabay.com/api/",{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const s=o.map(r=>`
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
        </li>`).join("");l.innerHTML=s,h.refresh()}function L(){l.innerHTML=""}function b(){u.classList.remove("hidden")}function i(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",o=>{o.preventDefault();const s=o.currentTarget,n=new FormData(c).get("search-text");L(),b(),y(n).then(e=>{i();const t=e.data.hits;if(t.length===0){m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(t),s.reset()}).catch(e=>{i(),console.log(e)})});
//# sourceMappingURL=index.js.map
