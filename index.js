
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
content.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogDetails.innerHTML = `<h3> Description:</h3>
<p>
    This gentle dog is aloof toward her owner, and never comes when called.
    She always acts as though any stranger she meets will harm her,
    and dislikes other animals.
</p>
<h3>Feeding Times:</h3>
<ul>
    <li>9:00 am</li>
    <li>12:00 pm</li>
    <li>5:00 pm</li>
</ul>`
content.append(dogDetails) 


