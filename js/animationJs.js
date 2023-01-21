// animation
window.onload = () => {
    const options = {
      root: null,
      rootMargin: '100px 0px 0px 0px',
      threshold: 0.5
    }
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImg = entry.target
  
          lazyImg.classList.add('active');
  
          observer.unobserve(lazyImg)
        }
      })
    }, options)
  
    const arr = document.querySelectorAll('section , .container , .headline')
    arr.forEach(i => {
      observer.observe(i)
    })
  }
  // animation