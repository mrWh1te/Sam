// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  for (const versionType of ['chrome', 'electron', 'node']) {
    const element = document.getElementById(`${versionType}-version`)

    if (element !== null) {
      element.innerText = process.versions[versionType as any as keyof NodeJS.ProcessVersions]
    }
  }
})
