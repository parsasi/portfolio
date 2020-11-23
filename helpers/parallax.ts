export function applyParallax(element , rate , e){
    const scrolled = e.currentTarget.scrollTop
    const scrollRate = scrolled * rate

    element.style.transform = `translate3d(0px , ${scrollRate}px , 0)`
 }