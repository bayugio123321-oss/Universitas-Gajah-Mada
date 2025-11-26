// script.js
// kecil: buat smooth scroll dan highlight nav ketika scroll
document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click', e=>{
    if(a.hash){
      e.preventDefault();
      document.querySelector(a.hash).scrollIntoView({behavior:'smooth', block:'start'});
      document.querySelectorAll('.nav a').forEach(x=>x.classList.remove('active'));
      a.classList.add('active');
    }
  });
});

window.addEventListener('scroll', ()=>{
  const fromTop = window.scrollY + 80;
  document.querySelectorAll('section[id]').forEach(section=>{
    if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
      const id = section.getAttribute('id');
      document.querySelectorAll('.nav a').forEach(link=>{
        link.classList.toggle('active', link.getAttribute('href') === ('#'+id));
      });
    }
  });
});

/* Section */
.section {
    padding: 70px 0;
}

.section-title {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 5px;
}

.section-title .accent {
    color: #e6c100; /* kuning */
}

.sub {
    text-align: center;
    margin-bottom: 40px;
    color: #777;
}

/* Grid Alumni */
.alumni-grid {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
}

.alumni-card {
    display: flex;
    gap: 20px;
    width: 480px;
}

.alumni-card img {
    width: 150px;
    height: 200px;
    object-fit: cover;
    border-radius: 6px;
}

.alumni-info h3 {
    font-size: 22px;
    margin-bottom: 5px;
}

.muted {
    color: gray;
    font-size: 14px;
    margin-bottom: 10px;
}

.desc {
    font-size: 14px;
    color: #444;
    margin-bottom: 15px;
}

.det {
    color: #0077cc;
    font-weight: 600;
    text-decoration: none;
}

.det:hover {
    text-decoration: underline;
}