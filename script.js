function mincost(arr)
{ 
//write your code here
// return the min cost
	
	cost=0
	for(i=0;arr.length>1;){
	    arr.sort()
		res=arr[0]+arr[1]
		arr.splice(0,2,res)
		cost+=res//3 6 10 15
		console.log(arr,cost)
	}
	cost+=res
	return res
}

module.exports=mincost;
