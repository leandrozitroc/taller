function nonConstructibleChange1(coins) {
    let currentMinImpossibleChange = 1;
      
    const sortedCoins = coins.sort((a,b) => a-b)
      
    for(let i = 0; i < sortedCoins.length ; i += 1) {
      if(currentMinImpossibleChange < sortedCoins[i]) return currentMinImpossibleChange
      currentMinImpossibleChange += sortedCoins[i];
    }
      
    return currentMinImpossibleChange;
  }

  
  function nonConstructibleChange(coins) {
    // if no coins return 1
      coins.sort((a,b) => a - b);
      
      let currentValue = 0;
      for (let coin of coins) {
          if (coin > currentValue + 1) return currentValue + 1;
          
          currentValue += coin;
      }
      
      return currentValue + 1;
  }

  coin = [5, 7, 1, 1, 2, 3, 22]

  console.log(nonConstructibleChange(coin))
  console.log(nonConstructibleChange1(coin))