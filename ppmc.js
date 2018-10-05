function smallestCommons(arr) {
  let max, min
    max=Math.max(...arr)
      min=Math.min(...arr)
        var n=[],a=min,b=max
          for(var i=0;i<=max-min;i++){n[i]=a;a++}
            //let mult = (e)=>n%e
              do{
                  b++
                    }while(n.some(e=>b%e))

                        return b;
                        }


                        console.log(smallestCommons([8,2]));
