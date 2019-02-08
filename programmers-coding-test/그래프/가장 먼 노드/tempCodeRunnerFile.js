/* eslint-disable no-plusplus */

class DestinationNode {
  constructor(destinationNode) {
    this.destinationNode = destinationNode;
  }

  // 최단거리일 때의 거리 반환
  // 거리 반환이 되면, 다른 Route들은 정지시켜야 한다.
  // getShortestWay() {
  //   new Route().findWay();
  // }
}

class Route {
  constructor(destinationNode, pastRoutes) {
    this.destinationNode = destinationNode;
    this.pastRoutes = pastRoutes;
    this.isContinue = true;
  }

  // 목적지 노드까지 길찾고, 목적지 도착하면 거리반환
  // findWay() {
  //   while(true) {
  //     if (!this.isContinue) {
  //       break;
  //     }

  //     if (this.destinationNode) {
  //       return 거리;
  //     }
  //   }
    
  // }
}

function solution(n, edge) {
  Route.edge = edge;
  DestinationNode.startEdge = []; // [[1, 3], [1, 2], ...]
  edge.forEach((e) => {
    for (let i = 0; i < e.length; i++) {
      if (e[i] === 1) {
        DestinationNode.startEdge.push(e);
        break;
      }
    }
  });

  console.log(DestinationNode.startEdge);

  // const routeArray = [];
  // for (let i = 2; i <= n; i++) {
  //   const oneRoute = new Route(i, []);
  //   routeArray.push(oneRoute);
  //   if (oneRoute.checkReached()) {
  //     // retur
  //   }
  // }
}

solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]);
