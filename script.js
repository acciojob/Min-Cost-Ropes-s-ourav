function mincost(arr)
{ 
//write your code here
// return the min cost
	// 1 1 1 1 
	// 2 1 1    -2
	//3 1         -3
	
	cost=0
	for(i=0;arr.length>1;){
	    arr.sort((a,b)=>(a-b))
		res=arr[0]+arr[1]
		arr.splice(0,2,res)
		cost+=res//3 6 10 15
	}
	return cost
}

module.exports=mincost;
