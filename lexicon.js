const SUPABASE_URL = 'https://gvfcygdfjimmsrjakodo.supabase.co';
const SUPABASE_KEY = 'sb_publishable_sVgHLp9Kh_xeDuBqGWegow_lamYMIF2';

const searchInput = document.getElementById('lex-search');
const statusEl = document.getElementById('lex-status');
const entriesEl = document.getElementById('lex-entries');

let debounceTimer;

function renderEntries(data) {
  if (!data.length) {
    entriesEl.innerHTML = '';
    statusEl.textContent = 'no entries found';
    return;
  }

  statusEl.textContent = '';
  entriesEl.innerHTML = data.map(entry => `
    <div class="lex-entry">
      <div class="lex-term">${escapeHtml(entry.term)}</div>
      ${entry.etymology ? `<div class="lex-etymology">${escapeHtml(entry.etymology)}</div>` : ''}
      <div class="lex-definition">${escapeHtml(entry.definition)}</div>
      ${entry.notes ? `<div class="lex-notes">${escapeHtml(entry.notes)}</div>` : ''}
    </div>
  `).join('');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

async function fetchTerms(query) {
  statusEl.textContent = 'searching…';

  let url = `${SUPABASE_URL}/rest/v1/terms?select=term,definition,etymology,notes&order=term.asc&limit=50`;

  if (query) {
    const encoded = encodeURIComponent(query);
    url += `&or=(term.ilike.*${encoded}*,definition.ilike.*${encoded}*)`;
  }

  try {
    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`
      }
    });

    if (!res.ok) throw new Error('bad response');

    const data = await res.json();
    renderEntries(data);
  } catch (err) {
    statusEl.textContent = 'lexicon unavailable right now';
    entriesEl.innerHTML = '';
  }
}

searchInput.addEventListener('input', function () {
  clearTimeout(debounceTimer);
  const query = this.value.trim();
  debounceTimer = setTimeout(() => fetchTerms(query), 300);
});

// load the full lexicon alphabetically on page open
fetchTerms('');
