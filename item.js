const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch('Haniwa.json')
  .then(res => res.json())
  .then(data => {
    const item = data.find(h => h.Item_number === id);

    if (!item) {
      document.body.textContent = 'Item not found.';
      return;
    }

    document.querySelector('.item-name').textContent = item.Name || '—';
    document.querySelector('.item-kanji').textContent = item.Kanji || '';
    document.querySelector('.item-tomb').textContent = item.Tomb_name || '—';
    document.querySelector('.item-period').textContent = item.Period_english || '—';
    document.querySelector('.item-height').textContent = item.Height_cm || '—';
    document.querySelector('.item-type').textContent = item.Type || '—';
    document.querySelector('.item-location').textContent = item.Location || '—';
    document.querySelector('.item-image').src = item.Image || '';
  })
  .catch(error => console.error(error));