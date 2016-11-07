class Actions {
  constructor(appState) {
    this.appState = appState;
  }
  loadData = (section) => {
    let request = new window.XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200) {
        this.appState.content = JSON.parse(request.responseText).body;
      }
    };
    request.open("GET", "https://jsonplaceholder.typicode.com/posts/" + (section + 1), true);
    request.send();
  };
}

export default Actions;
