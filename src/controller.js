var fbGraph = new fbGraph();
var dataFetcher = new DataFetcher();

function run() {
  fbGraph.start(window);
  window.setTimeout(dataFetcher.getLastUser,2000);
}

run();
