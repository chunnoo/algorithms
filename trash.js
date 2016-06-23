/*function addPointToTriangulation(triangulation, pt) {
  
  var badTriangles = [];
  
  for (var i = 0; i < triangulation.length; i++) { //find triangles that are not valid due to the new point
    
    
    if (triangulation[i].insideCircumcircle(pt)) { //pt is inside circumcircle of triangulation[i]
      badTriangles.push(triangulation[i]); //add triangulation[i] to badTriangles
    }
  }
  var polygon = [];
  
  for (var i = 0; i < badTriangles.length; i++) { //find the boundary of the polygonal hole
    for (var j = 0; j < 3; j++) { //add edge if it's not shared by other triangles
      var addEdge = true;
    
      for (var k = 0; k < badTriangles.length; k++) {
        if (i != k) {
          for (var l = 0; l < 3; l++) {
            if (badTriangles[i].edges[j].equal(badTriangles[k].edges[l])) {
              addEdge = false;
              break;
            }
          }
        }
      }
      if (addEdge) {
        polygon.push(badTriangles[i].edges[j]);
      }
    }
  }
  for (var i = 0; i < badTriangles.length; i++) { //remove badTriangles from triangulation
    for (var j = 0; j < triangulation.length; j++) {
      if (badTriangles[i].equal(triangulation[j])) {
        triangulation.splice(j, 1);
        break;
      }
    }
  }
  for (var i = 0; i < polygon.length; i++) { //re-triangulate polygonal hole
    triangulation.push(new triangle(pt, polygon[i].start, polygon[i].end)); //triangle from pt and each edge in polygon
  }
  if (mode == 0) {
    var tempTriangulation = [];
    for (var i = 0; i < triangulation.length; i++) {
      tempTriangulation.push(triangulation[i]);
    }
    triangulationArray.push(tempTriangulation);
  }
  
  return triangulation;
}*/

/*function triangulate(pts) {
  var triangulation = [];
  
  if (pts.length >= 3) {
    var temp0 = new point(-canvas.width, -canvas.height);
    var temp1 = new point(canvas.width*2, -canvas.height);
    var temp2 = new point(canvas.width*0.5, canvas.height*2);
    var tempTriangle = new triangle(temp0, temp1, temp2);
    
    triangulation.push(tempTriangle); //add super-triangle to triangulation
    
    for (var i = 0; i < pts.length; i++) {
      triangulation = addPointToTriangulation(triangulation, pts[i], true);
    }
    
    for (var i = 0; i < triangulation.length; i++) { //clean up
      for (var j = 0; j < 3; j++) {
        if (triangulation[i].points[j].equal(temp0) || triangulation[i].points[j].equal(temp1) || triangulation[i].points[j].equal(temp2)) {
          triangulation.splice(i,1);
          i--;
          break;
        }
      }
    }
  }
  
  return triangulation
}*/

/*function triangulate(pts) {
  var triangulation = [];
  
  var temp0 = new point(-canvas.width, -canvas.height);
  var temp1 = new point(canvas.width*2, -canvas.height);
  var temp2 = new point(canvas.width*0.5, canvas.height*2);
  var tempTriangle = new triangle(temp0, temp1, temp2);
  
  triangulation.push(tempTriangle); //add super-triangle to triangulation
  
  for (var i = 0; i < pts.length; i++) { //add points one by one
    var badTriangles = [];
    
    for (var j = 0; j < triangulation.length; j++) { //find triangles that are not valid due to the new point
      
      
      if (triangulation[j].insideCircumcircle(pts[i])) { //pts[i] is inside circumcircle of triangulation[j]
        badTriangles.push(triangulation[j]); //add triangulation[j] to badTriangles
      }
    }
    var polygon = [];
    
    for (var j = 0; j < badTriangles.length; j++) { //find the boundary of the polygonal hole
      for (var k = 0; k < 3; k++) { //add edge if it's not shared by other triangles
        var addEdge = true;
      
        for (var l = 0; l < badTriangles.length; l++) {
          if (j != l) {
            for (var m = 0; m < 3; m++) {
              if (badTriangles[j].edges[k].equal(badTriangles[l].edges[m])) {
                addEdge = false;
                break;
              }
            }
          }
        }
        if (addEdge) {
          polygon.push(badTriangles[j].edges[k]);
        }
      }
    }
    for (var j = 0; j < badTriangles.length; j++) { //remove badTriangles from triangulation
      for (var k = 0; k < triangulation.length; k++) {
        if (badTriangles[j].equal(triangulation[k])) {
          triangulation.splice(k, 1);
          break;
        }
      }
    }
    for (var j = 0; j < polygon.length; j++) { //re-triangulate polygonal hole
      triangulation.push(new triangle(pts[i], polygon[j].start, polygon[j].end)); //triangle from pts[i] and each edge in polygon
    }
    if (mode == 0) {
      var tempTriangulation = [];
      for (var j = 0; j < triangulation.length; j++) {
        tempTriangulation.push(triangulation[j]);
      }
      triangulationArray.push(tempTriangulation);
    }
  }
  for (var i = 0; i < triangulation.length; i++) { //clean up
    for (var j = 0; j < 3; j++) {
      if (triangulation[i].points[j].equal(temp0) || triangulation[i].points[j].equal(temp1) || triangulation[i].points[j].equal(temp2)) {
        triangulation.splice(i,1);
        i--;
        break;
      }
    }
  }
  return triangulation;
}*/

//test for insideCircumCircle(pt)//////////////////////////////////

/*ctx.strokeStyle = "#00f";
  ctx.beginPath();
  ctx.moveTo(mouse.x, mouse.y);
  ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI*2);
  ctx.stroke();
  
  var tempTriangle = new triangle(pointArray[0], pointArray[1], pointArray[2]);
  if (tempTriangle.insideCircumcircle(mouse)) {
    ctx.strokeStyle = "#0f0";
  } else {
    ctx.strokeStyle = "#f00";
  }
  ctx.beginPath();
  ctx.moveTo(tempTriangle.points[0].x, tempTriangle.points[0].y);
  ctx.lineTo(tempTriangle.points[1].x, tempTriangle.points[1].y);
  ctx.lineTo(tempTriangle.points[2].x, tempTriangle.points[2].y);
  ctx.closePath();
  ctx.stroke();*/


