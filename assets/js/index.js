const sites = {
  blog: 'https://blog.dogrod.com',
  fmf: 'http://fmf.buzz',
  github: 'https://github.com/dogrod',
}

const handleClickPlate = (e) => {
  const target = e.target.getAttribute('data-target')

  const url = sites[target]

  window.location.href = url
}

const plates = document.querySelectorAll('.plate')

plates.forEach(plate => plate.addEventListener('click', handleClickPlate))
