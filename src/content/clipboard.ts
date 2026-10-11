export function readClipboardText(): string {
  const previous = document.activeElement
  const sink = document.createElement('textarea')
  sink.style.position = 'fixed'
  sink.style.top = '0'
  sink.style.left = '0'
  sink.style.opacity = '0'
  sink.style.pointerEvents = 'none'
  sink.setAttribute('aria-hidden', 'true')
  document.documentElement.append(sink)
  sink.focus()
  document.execCommand('paste')
  const text = sink.value
  sink.remove()
  if (previous instanceof HTMLElement) previous.focus()
  return text
}
