exports.filterCommand = function filter(data, param){   
    let filtredData = [];
    data.forEach(country => 
     country.people.forEach(p => { 
        if( p.animals.some(a=> a.name.includes(param)) &&
                                !filtredData.includes(country))
            filtredData.push(country);
        })
    );
    filtredData.forEach(country => {
        country.people.forEach(p => 
           p.animals = p.animals.filter(a=> a.name.includes(param))
        );
        country.people = country.people.filter(p => p.animals.length > 0) 
    })
    return filtredData;
}
