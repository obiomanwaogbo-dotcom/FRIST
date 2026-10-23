(() => {
  const content = window.SITE_CONTENT;
  const $ = s => document.querySelector(s);
  const demos = [
    { title: '从一行代码，开始认识编程', category: '编程入门', description: '这里将放入编程入门视频：把复杂概念拆成能动手的小步骤。', coverStyle: 'code', label: 'HELLO, WORLD', demo: true },
    { title: '找到自己的学习节奏', category: '学习方法', description: '这里将分享学习方法与工具，让每一次投入更有收获。', coverStyle: 'notes', label: 'ONE STEP AT A TIME', demo: true },
    { title: '记录一个小小的「原来如此」', category: '随手记录', description: '这里将记录学习过程中的灵感、发现和小实践。', coverStyle: 'ideas', label: 'LITTLE DISCOVERIES', demo: true }
  ];
  const videos = content.videos.length ? content.videos : demos;
  let category = '全部';
  let lastTrigger;
  const page = document.body.dataset.page || 'home';
  const pageTitles = {home:'理工学习站',courses:'课程地图',course:'学习路线',lab:'交互实验台',about:'关于我',videos:'学习视频'};
  document.title = `${pageTitles[page] || '理工学习站'} · ${content.name}`;
  if (page === 'home' && ['#about', '#videos'].includes(location.hash)) { location.replace(new URL(location.hash === '#about' ? './about.html' : './videos.html', location.href)); return; }
  document.querySelectorAll('[data-site-name]').forEach(el => el.textContent = content.name + '.');
  if ($('#hero-intro')) $('#hero-intro').textContent = content.intro;
  if ($('#bio')) $('#bio').textContent = content.bio;
  $('#footer-name').textContent = content.title;
  $('#year').textContent = new Date().getFullYear();
  $('#profile-tags')?.replaceChildren(...content.tags.map(tag => { const el = document.createElement('span'); el.textContent = tag; return el; }));
  function safeUrl(value) {
    if (!value) return null;
    try { const url = new URL(value, location.href); return ['http:', 'https:'].includes(url.protocol) ? url.href : null; } catch { return null; }
  }
  const github = safeUrl(content.github);
  if (github) { $('#github-link').href = github; $('#github-link').textContent = 'GitHub ↗'; $('#github-link').target = '_blank'; $('#github-link').rel = 'noopener noreferrer'; }
  if ($('#preview-note')) $('#preview-note').hidden = !!content.videos.length;
  if ($('#video-count')) $('#video-count').textContent = content.videos.length ? `${content.videos.length} 条视频 · 持续更新` : '视频空间 · 筹备中';
  function showVideo(v, trigger) {
    const dialog = $('#video-dialog');
    lastTrigger = trigger;
    $('#dialog-title').textContent = v.title;
    $('#dialog-description').textContent = v.demo ? '这是栏目排版示例，目前还没有上传视频。正式内容发布后，可以在这里观看或前往视频平台。' : v.description;
    const player = $('#player'); player.replaceChildren();
    const url = safeUrl(v.url);
    if (v.demo || !url) {
      const empty = document.createElement('div'); empty.className = 'player-placeholder'; empty.textContent = '✳  内容正在酝酿中'; player.append(empty);
    } else if (v.type === 'mp4') {
      const video = document.createElement('video'); video.controls = true; video.playsInline = true; video.preload = 'metadata'; video.src = url; video.setAttribute('aria-label', v.title);
      const error = document.createElement('p'); error.className = 'video-error'; error.hidden = true; error.textContent = '视频暂时无法加载，请检查视频地址或稍后重试。'; video.addEventListener('error', () => error.hidden = false);
      player.append(video, error);
    } else {
      const a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.className = 'button primary'; a.textContent = '前往视频平台观看 ↗'; player.append(a);
    }
    dialog.showModal();
  }
  function render() {
    const query = $('#search').value.trim().toLocaleLowerCase();
    const filtered = videos.filter(v => (category === '全部' || v.category === category) && `${v.title} ${v.description || ''} ${v.category}`.toLocaleLowerCase().includes(query));
    $('#video-grid').replaceChildren(...filtered.map((v, index) => {
      const card = document.createElement('button'); card.className = 'video-card'; card.type = 'button';
      card.setAttribute('aria-label', `${v.demo ? '查看栏目预览：' : '观看视频：'}${v.title}`);
      const cover = document.createElement('div'); cover.className = `video-cover ${v.coverStyle || ['code', 'notes', 'ideas'][index % 3]}`;
      const coverUrl = safeUrl(v.cover);
      if (coverUrl) { const img = document.createElement('img'); img.src = coverUrl; img.alt = ''; img.loading = 'lazy'; cover.append(img); }
      else { const label = document.createElement('span'); label.className = 'cover-label'; label.textContent = v.label || v.category.toUpperCase(); const graphic = document.createElement('span'); graphic.className = 'cover-graphic'; graphic.textContent = v.category === '编程入门' ? '</>' : v.category === '学习方法' ? 'Aa' : '✳'; cover.append(label, graphic); }
      const badge = document.createElement('span'); badge.className = 'cover-badge'; badge.textContent = v.demo ? '待发布' : (v.duration || '观看视频');
      const arrow = document.createElement('span'); arrow.className = 'cover-arrow'; arrow.textContent = v.demo ? '↗' : '▶'; arrow.setAttribute('aria-hidden', 'true'); cover.append(badge, arrow);
      const meta = document.createElement('div'); meta.className = 'card-meta';
      const tag = document.createElement('span'); tag.textContent = v.category;
      const date = document.createElement('span'); date.textContent = v.demo ? '栏目预览' : v.date || ''; meta.append(tag, date);
      const title = document.createElement('h3'); title.textContent = v.title;
      const desc = document.createElement('p'); desc.textContent = v.description;
      card.append(cover, meta, title, desc); card.addEventListener('click', () => showVideo(v, card)); return card;
    }));
    $('#empty-state').hidden = filtered.length > 0;
  }
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
    category = button.dataset.category;
    document.querySelectorAll('.filter').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); }); render();
  }));
  $('#search')?.addEventListener('input', render);
  $('#reset-search')?.addEventListener('click', () => { $('#search').value = ''; document.querySelector('.filter').click(); });
  $('#close-dialog')?.addEventListener('click', () => $('#video-dialog').close());
  $('#video-dialog')?.addEventListener('click', e => { if (e.target === e.currentTarget) { const r = e.currentTarget.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.currentTarget.close(); } });
  $('#video-dialog')?.addEventListener('close', () => { $('#player').replaceChildren(); lastTrigger?.focus(); });
  if ($('#video-grid')) render();
  // Motion is optional, honors the system preference, and never changes scrolling.
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let savedMotion = null;
  try { savedMotion = localStorage.getItem('frist-motion'); } catch {}
  let motion = savedMotion !== 'off' && !reducedMotion.matches;
  function updateMotion() {
    document.body.classList.toggle('motion-enabled', motion);
    document.body.classList.toggle('motion-off', !motion);
    $('#motion-toggle').textContent = motion ? '动效：开' : '动效：关';
    $('#motion-toggle').setAttribute('aria-pressed', String(motion));
  }
  $('#motion-toggle').addEventListener('click', () => { motion = !motion; savedMotion = motion ? 'on' : 'off'; try { localStorage.setItem('frist-motion', savedMotion); } catch {} updateMotion(); });
  reducedMotion.addEventListener('change', e => { motion = !e.matches && savedMotion !== 'off'; updateMotion(); });
  updateMotion();
  const revealTargets = document.querySelectorAll('.section-heading, .library-toolbar, .about-intro, .about-row, .closing, .portal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('pending'); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    revealTargets.forEach(el => { el.classList.add('reveal', 'pending'); observer.observe(el); });
  }
  let scrollFrame = false;
  function setProgress() { const max = document.documentElement.scrollHeight - innerHeight; document.documentElement.style.setProperty('--progress', max > 0 ? scrollY / max : 0); scrollFrame = false; }
  addEventListener('scroll', () => { if (!scrollFrame) { scrollFrame = true; requestAnimationFrame(setProgress); } }, { passive: true });
  addEventListener('resize', setProgress); setProgress();
  if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
    const art = $('.hero-art');
    art?.addEventListener('pointermove', e => { if (!motion) return; const r = art.getBoundingClientRect(); art.style.setProperty('--tilt-x', `${-(e.clientY - r.top - r.height/2) / 25}deg`); art.style.setProperty('--tilt-y', `${(e.clientX - r.left - r.width/2) / 25}deg`); });
    art?.addEventListener('pointerleave', () => { art.style.setProperty('--tilt-x', '0deg'); art.style.setProperty('--tilt-y', '0deg'); });
    $('#video-grid')?.addEventListener('pointermove', e => { const card = e.target.closest('.video-card'); if (!motion || !card) return; const r = card.getBoundingClientRect(); card.style.setProperty('--card-x', `${-(e.clientY-r.top-r.height/2)/65}deg`); card.style.setProperty('--card-y', `${(e.clientX-r.left-r.width/2)/45}deg`); });
    $('#video-grid')?.addEventListener('pointerout', e => { const card = e.target.closest('.video-card'); if (card && !card.contains(e.relatedTarget)) { card.style.setProperty('--card-x', '0deg'); card.style.setProperty('--card-y', '0deg'); } });
  }
})();
