// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

// Notes
// You can see another examples in the "Sample tests".

let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"

function meeting(s) {
    let names = s.toUpperCase().split(";")
    let alphaSortedNames = [];
    for(let i=0; i<names.length; i++){
      alphaSortedNames.push(names[i].split(":").reverse())
    }
    alphaSortedNames.sort();
    let sortedLastFirst = alphaSortedNames.sort((a,b) => {
      a[1].localeCompare(b[1]);
    })
    let finalSorted = sortedLastFirst.map((eachName) => {
      return `(${eachName[0]}, ${eachName[1]})`
    })
    return finalSorted.join("").toString();
}


meeting(s);