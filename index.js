import{a as d,S as f,i as m}from"./assets/vendor--e875Ek4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="56433507-28871935314b081e8c424dd0b";function y(o){return d.get("https://pixabay.com/api/",{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const s=o.map(t=>`
        <li class="items-list">
            <a href="${t.largeImageURL}">
              <img src="${t.webformatURL}" class="img" alt="${t.tags}"/>
            </a>
          <div class="hits-p">
            <p>Likes:${t.likes}</p>
            <p>Views:${t.views}</p>
            <p>Comments:${t.comments}</p>
            <p>Downloads:${t.downloads}</p>
          </div>
    
        </li>`).join("");l.innerHTML=s,h.refresh()}function L(){l.innerHTML=""}function b(){u.classList.remove("hidden")}function i(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",o=>{o.preventDefault();const t=new FormData(c).get("search-text");L(),b(),y(t).then(n=>{i();const e=n.data.hits;if(e.length===0){m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(e)}).catch(n=>{i(),console.log(n)}),o.currentTarget.reset()});
//# sourceMappingURL=index.js.map
