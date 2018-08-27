let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay  = (message as string).endsWith('c');


// These type assertions allow us to have intellisense even though we don't
// explicitly define our variables with data types