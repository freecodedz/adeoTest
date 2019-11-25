exports.countCommand = function count(data){
    data.forEach(country => {
        country.name = country.name + '['+ country.people.length+ ']';
        country.people.forEach(p => { 
            p.name = p.name+ '['+ p.animals.length +']';
        })
    });
    return data;
}