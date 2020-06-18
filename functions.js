/* 
xin Luo
June 10, 2020
*/

// This function returns a random number between (and including both) minimum and maximum
function getRandomInteger (minimum, maximum) {
  minimum = Math.ceil(minimum) // minimum is inclusive
  maximum = Math.floor(maximum + 1) // maximum is exclusive so we add one
  return Math.floor(Math.random() * (maximum - minimum)) + minimum
}

// Povided Arrays
const nouns = ['Devon', 'boyfriend','cutie','ten','love','card','beach','kiss','laugh','hug','rendezvous']

const verbs = ['walked', 'kiss','propose','chase','hug','shine','jog','chat','hum','sing']

const adverbs = ['menacingly', 'intentionally','magically','surprisingly','seriously','carefully','amazingly','slowly','slightly','happily']

const adjectives = ['wild', 'slippery','shining','lovely','warm','sweet','cheerful','silently','gradually']

const proNouns = ['they', 'we', 'you', 'he', 'she', 'I', 'it']

const openings = ['A year from now', 'I dance to hippop','in the future','I love you','baby you are sweet','we are going to church','get married on mars','universe wedding','invisible dimond ring','Angels are singing','Demons are cryind and bleeding','the cutest couple ever',
'my cat dresses tuxedo to be my bridesmaid','I cannot let you burn me up, nor can I resist you.','He stepped down, trying not to look long at her, as if she were the sun, yet he saw her, like the sun, even without looking.',
'You should be kissed and often, and by someone who knows how.','Then he kissed her','At his lips’ touch she blossomed for him like a flower and the incarnation was complete','We are asleep until we fall in love','He sweeps her hair back from her ears; he swings her above his head. He says she is his émerveillement. He says he will never leave her, not in a million years']


const closings = ['with extra cheese', 'the end','finally', 'in a word', 'in brief', 'briefly', 'in conclusion', 'on the whole', 'thus', 'to conclude', 'to summarize', 'in sum', 'to sum up', 'in summary','finito','period']

// Instructions:

// Arrays:
// Each provided array (except for proNouns) must have at least 10 elements (words or phrases)
// Add/replace words to each array based on any theme you like (keep it tasteful!)
// You do not have to use the example words in any of the provided arrays

// Functions:

// First function:
// Create a function that outputs the text/value sent to it using console.log()
// There should be a newline ("\n") both before and after the value is output
// Name this function appropriately
// Note this function does not return any value

// Second function:
// Create a function that builds a sentence using the 7 provided arrays
// Using the provided getRandomInteger function you will randomly use content from each array based on the random number returned by getRandomInt.
// Because you are using an array the minimum value should always be zero
// The maximum value should be the array length - 1

// The sentence created (concatinated) inside this function should be structured like this:
//      Get a random element from the openings array and add it to your new sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the adjectives array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the nouns array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the pro_nouns array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the verbs array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the adverbs array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the adjectives array and add it to your sentence
//      add closing punctuation.

// Note Feel free to re-arrange your sentence as you wish, just make sure you use the 7 provided arrays
// Note add more arrays if you wish

// Name this function appropriately
// This function should return the completed sentence

// Program Flow:

// inside a loop that repeats 10 times

// Your program will call the "sentence creating" function that you are required to build
// using a new variable you will capture the returned value (the sentence) from this function. Name this variable appropriately

// next you will send this variable to the other function you created used for output
// this will result in your random sentence being output.

// Other considerations:
// Everyones code should be different
// This is a fun exercise so... have fun!

// Submission
// Submit your GitHub repo URL through the LMS.
