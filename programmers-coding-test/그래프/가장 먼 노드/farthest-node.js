/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */

class DestinationNode {
  constructor(destinationNode) {
    this.destinationNode = destinationNode;
    this.routes = [];
  }

  // 최단거리일 때의 거리 반환
  // 거리 반환이 되면, 다른 Route들은 정지시켜야 한다.
  getShortestWay() {
    DestinationNode.startEdge.forEach((e) => {
      this.routes.push(new Route(1, this.destinationNode, e));
    });

    // 각 route가 다음 도달위치를 반환한다.
    this.routes.forEach((route) => {
      const currentWay = route.findway();
      if (currentWay === this.destinationNode) {
        // 도달위치가 목표 노드와 같은 경우 그때 동안의 거리를 반환한다.
        return route.pastRoute.length;
      }
    });
  }
}

class Route {
  constructor(endStartNode, destinationNode, pastRoute) {
    this.endStartNode = endStartNode;
    this.destinationNode = destinationNode;
    this.pastRoute = pastRoute; // [[1, 3], [3, 5], ...]
  }

  // 목적지 노드까지 길찾고, 목적지 도착하면 거리반환
  findWay() {
    // 3가지 길이 나온다면, 그 모든 길을 위해 
    let currentWay;
    // 현재 목적지를 반환한다.
    while (currentWay !== this.destinationNode) {
      if (this.destinationNode) {
        return 거리;
      }
    }
    return this.pastRoute.length;
  }
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

  const shortestDistanceOfNodes = [];
  for (let i = 2; i <= n; i++) {
    const destinationNode = new DestinationNode(i);
    destinationNodes.push(destinationNode.getShortestWay());
    
  }

  // shortestDistanceOfNodes 중에 가장 긴 녀석들의 node-number를 찾는다.
}

solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]);
