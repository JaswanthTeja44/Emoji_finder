    const emojiList = [
      { emoji: '😀', keywords: ['smile', 'happy', 'joy'] },
      { emoji: '😂', keywords: ['laugh', 'funny', 'lol'] },
      { emoji: '😢', keywords: ['sad', 'cry', 'tear'] },
      { emoji: '😍', keywords: ['love', 'heart', 'crush'] },
      { emoji: '🎉', keywords: ['party', 'celebrate', 'confetti'] },
      { emoji: '❤️', keywords: ['heart', 'love'] },
      { emoji: '🌟', keywords: ['star', 'sparkle', 'shine'] },
      { emoji: '🚀', keywords: ['rocket', 'launch', 'space'] },
      { emoji: '🌚', keywords: ['moon', 'night'] },
      { emoji: '🌿', keywords: ['plant', 'nature', 'eco'] },
    ];

    function searchEmojis() {
      const input = document.getElementById('searchInput').value.toLowerCase().trim();
      const resultsContainer = document.getElementById('results');
      const message = document.getElementById('message');

      resultsContainer.innerHTML = '';
      message.textContent = '';

      if (!input) {
        message.textContent = 'Please enter a keyword to search.';
        return;
      }

      const filtered = emojiList.filter(e =>
        e.keywords.some(keyword => keyword.includes(input))
      );

      if (filtered.length === 0) {
        message.textContent = 'No emojis found for your search.';
        return;
      }

      filtered.forEach(e => {
        const card = document.createElement('div');
        card.className = 'emoji-card';
        card.textContent = e.emoji;
        card.title = 'Click to copy';
        card.onclick = () => {
          navigator.clipboard.writeText(e.emoji).then(() => {
            message.textContent = `Copied "${e.emoji}" to clipboard!`;
          });
        };
        resultsContainer.appendChild(card);
      });
    }
