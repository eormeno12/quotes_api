
const btSearch = document.getElementById('searchButton')
const inputSearch =  document.getElementById('searchInput')

btSearch.addEventListener("click", () => {
  let category = 'happiness' ||  inputSearch.value;
  const API = 'https://api.api-ninjas.com/v1/quotes?category=' + category + '&limit=10';

  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': 'oZeTIxvGkreGpJyJbEMx8A==eQazsO6HCgMb1LUg',
    }
  };
  const contentContainer = null || document.getElementById('content');
  
  async function fetchData(urlAPI, options){
      const response = await fetch(urlAPI, options);
      const data = await response.json();
      console.log(data);
      return data;
  }

  (async () =>{
    try{
        const quotes = await fetchData(API, options);
        let view = `${quotes.map(quote => `
                    <div class="card">
                      <div class="card-header">
                        <h2>"${quote.quote}"</h2>
                      </div>
                      <div class="card-footer">
                        <p>- "${quote.author}</p>
                      </div>
                    </div>`).join('')}`;
        console.log(view);

        contentContainer.innerHTML = view;
    }catch(error){
        console.error(error);
    }})();
})



