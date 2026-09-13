try {
  const savedTheme = localStorage.getItem('pixel-code-theme')
  const theme = savedTheme === 'light' || savedTheme === 'dark'
    ? savedTheme
    : matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
} catch {}
