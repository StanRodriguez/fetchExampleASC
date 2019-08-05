fetch("https://randomuser.me/api/")
  .then(response => {
    // console.log(response);

    return response.json();
  })
  .then(function(myJson) {
    document.body.innerText = myJson.results[0].name.first;
    console.log(myJson);
    // console.log(JSON.stringify(myJson));
  });
