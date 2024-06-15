fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=cc1334e2c97049fd95df61f4b24554e2")
.then((response) => response.json())
.then((value) => {
  const articles = value.articles;
  const card = document.getElementById('card');
  
  articles.forEach(article => {
    const imageUrl = article.urlToImage ? article.urlToImage : '/images/noImage.jpg';
    const cardItem = `<a href="${article.url}" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ms-36 mt-14 h-80">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ms-16" src="${imageUrl}" alt="News Image">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${article.title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${article.description}</p>
      </div>
    </a>`;
    card.innerHTML += cardItem;
  });
})
.catch(error => console.error('Error fetching data:', error));