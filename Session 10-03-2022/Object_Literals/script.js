const person = {
    firstName: 'Mick',
    lastName: 'Jagger'
}

const kitchenSink = {
    favNum: 92319023,
    isFunny: true,
    colors: ['red', ['orange']]
}

// to get the second item in person you use []
person['lastName']; // expected result = 'Jagger'
//you can also use . to get the goo

person.firstName // expected result is 'Mick'

const years = {
    1999: 'good',
    2020: 'bad'
}
years["1999"]
years[1999] // both would work 

const midTerms = {
    danielle: 96,
    thomas: 78,
}
midTerms.thomas = 79; // changes the value inside the object literal
midTerms.thomas = 'C+';
midTerms['danielle'] = 'A'; // both . notation and brackets work
midTerms.ezra = 'B-'; //adds another item to the object
midTerms['antonio'] = 'D';

const comments = [
    {
        username: 'Tammy',
        text: 'lolololo',
        votes: 9
    }, {
        username: 'FishBoi',
        text: 'glub glub',
        votes: 12387
    }
]
// hot to access glub glub? second elemnt index of 1
comments[1].text // expected output 'glub glub'