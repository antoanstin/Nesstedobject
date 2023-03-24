const person = {
    first_name: 'Monica',
    last_name: 'Geller',
    phone: '915-996-9739',
    email: 'monica37@gmail.com',
    address: {
        street: {
            street_num: '495',
            street_name: 'Grove Street',
        },
        city: 'New York',
        country: 'USA',
    },
};
for(var t in person)
{
	if(person[t] instanceof Object)
	{
		for(let ti in person[t] )
		{
			if(person[t][ti] instanceof Object)
			{
				for(var tii in person[t][ti])
				{
					console.log(tii+"=>"+person[t][ti][tii]);
				}
			}
			else
			{
				console.log(ti+"=>"+person[t][ti]);
			}
		}
	}
	else
	{
	console.log(t+"=>"+person[t])
	}
}