db.zips.aggregate([
    {$project: 
     {
	first_char: {$substr : ["$city",0,1]},
	city: "$city",
	pop: "$pop"
     }	 
   },
   {$match:
    {
	first_char: {$regex: /\d/}
    }
   },
   {$group:
    {
	_id: null,
	sum: {$sum: "$pop"}
    }
   }
])
