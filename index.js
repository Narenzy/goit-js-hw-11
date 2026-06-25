import{a as c,i as l}from"./assets/vendor-DR8Hm0BG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u="56433507-28871935314b081e8c424dd0b";function f(o){return c.get("https://pixabay.com/api/",{params:{key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function m(o){return o.map(r=>`
        <li>
            <a href="${r.largeImageURL}">
              <img src="${r.webformatURL}" alt="${r.tags}"/>
          </a>

          <p>Likes:${r.likes}</p>
          <p>Views:${r.views}</p>
          <p>Comments:${r.comments}</p>
          <p>Downloads:${r.downloads}</p>
    
        </li>`).join("")}const a=document.querySelector(".form"),p=document.querySelector(".gallery");a.addEventListener("submit",o=>{o.preventDefault();const n=new FormData(a).get("search-text");f(n).then(s=>{const e=s.data.hits;if(e.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const t=m(e);p.innerHTML=t,lightbox.refresh()}).catch(s=>{console.log(s)})});
//# sourceMappingURL=index.js.map
