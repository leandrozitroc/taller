const sortedSquares = (A) => {
    return A.map((element) => { // transform the given array
        return element*element   //square the element
    }).sort((a,b) => {
        return a-b // sort by ascending order
    })
   
};

a = [-2, -1]

b = [1, 2, 3, 5, 6, 8, 9]

console.log(sortedSquares(a))