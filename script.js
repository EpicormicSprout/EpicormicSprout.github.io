const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target); // reveal once, stay visible
    }
  });
}, {
  threshold: 0.15 // fire once ~15% of the section is in view
});

revealEls.forEach(el => revealObserver.observe(el));

/* ---------- projects strips ---------- */

const strips = document.querySelectorAll('.strip');

strips.forEach(strip => {
  strip.addEventListener('click', (e) => {
    // don't collapse when clicking a link inside the open panel
    if (e.target.closest('.strip-link')) return;

    const alreadyExpanded = strip.classList.contains('is-expanded');

    strips.forEach(s => s.classList.remove('is-expanded', 'is-collapsed'));

    if (!alreadyExpanded) {
      strip.classList.add('is-expanded');
      strips.forEach(s => {
        if (s !== strip) s.classList.add('is-collapsed');
      });
    }
  });
});

/* ---------- sticky nav ---------- */

const hero = document.querySelector('.hero');
const nav = document.querySelector('.main-nav');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    nav.classList.toggle('is-fixed', !entry.isIntersecting);
  });
}, {
  threshold: 0,
  rootMargin: '0px 0px -40% 0px' // trigger once hero is ~40% scrolled past, not fully gone
});

navObserver.observe(hero);

/* ---------- lexicon popup modal ---------- */

const LEX_SUPABASE_URL = 'https://gvfcygdfjimmsrjakodo.supabase.co';
const LEX_SUPABASE_KEY = 'sb_publishable_sVgHLp9Kh_xeDuBqGWegow_lamYMIF2';

const lexOpenLink = document.getElementById('lex-open-link');
const lexBackdrop = document.getElementById('lex-modal-backdrop');
const lexCloseBtn = document.getElementById('lex-modal-close');
const lexInput = document.getElementById('lex-modal-input');
const lexResults = document.getElementById('lex-modal-results');

let lexDebounce;

function lexEscapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function lexRenderResults(data) {
  if (!data.length) {
    lexResults.innerHTML = '<div class="lex-status">no entries found</div>';
    return;
  }

  lexResults.innerHTML = data.map(entry => `
    <div class="lex-entry">
      <div class="lex-term">${lexEscapeHtml(entry.term)}</div>
      <div class="lex-definition">${lexEscapeHtml(entry.definition)}</div>
    </div>
  `).join('');
}

async function lexFetchTerms(query) {
  let url = `${LEX_SUPABASE_URL}/rest/v1/terms?select=term,definition&order=term.asc&limit=25`;

  if (query) {
    const encoded = encodeURIComponent(query);
    url += `&or=(term.ilike.*${encoded}*,definition.ilike.*${encoded}*)`;
  }

  try {
    const res = await fetch(url, {
      headers: {
        apikey: LEX_SUPABASE_KEY,
        Authorization: `Bearer ${LEX_SUPABASE_KEY}`
      }
    });

    if (!res.ok) throw new Error('bad response');

    const data = await res.json();
    lexRenderResults(data);
  } catch (err) {
    lexResults.innerHTML = '<div class="lex-status">lexicon unavailable right now</div>';
  }
}

function openLexModal() {
  lexBackdrop.classList.add('is-open');
  lexInput.value = '';
  lexResults.innerHTML = '';
  lexFetchTerms('');
  setTimeout(() => lexInput.focus(), 50);
}

function closeLexModal() {
  lexBackdrop.classList.remove('is-open');
}

if (lexOpenLink) {
  lexOpenLink.addEventListener('click', (e) => {
    e.preventDefault();
    openLexModal();
  });
}

lexCloseBtn.addEventListener('click', closeLexModal);

lexBackdrop.addEventListener('click', (e) => {
  if (e.target === lexBackdrop) closeLexModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lexBackdrop.classList.contains('is-open')) {
    closeLexModal();
  }
});

lexInput.addEventListener('input', function () {
  clearTimeout(lexDebounce);
  const query = this.value.trim();
  lexDebounce = setTimeout(() => lexFetchTerms(query), 300);
});
