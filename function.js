const findOutlier=i=>
    i.filter(n=>n%2==0).length
      > i.filter(n=>n%2!=0).length
        ? i.filter(n=>n%2!=0)[0]
          : i.filter(n=>n%2==0)[0]
