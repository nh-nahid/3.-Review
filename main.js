import usersData from "./data.js";


document.addEventListener(`DOMContentLoaded`, function(){
 
const prevButton = document.querySelector(`.review-prev`)
const nextButton = document.querySelector(`.review-next`)
const surpriseButton = document.querySelector(`.review-surprise`)

// Next Button
nextButton.addEventListener(`click`, function(){
    const currentDataSerial = getCurrentSerial();
    const maxSerial = getMaxReviewSerial();
    const minSerial = 0

    if(currentDataSerial === maxSerial){
        // Show the last data if user review in first to the max
        showUserData(minSerial);
    } else{
        // Otherwise show the prev data
        showUserData(currentDataSerial + 1)
    }
})


// Prev Button
prevButton.addEventListener(`click`, function(){
    const currentDataSerial = getCurrentSerial();
    const minSerial = 0;
    const maxSerial = getMaxReviewSerial();

    if(currentDataSerial === minSerial){
        // Show the first data if user review reached to the max
        showUserData(maxSerial);
    } else{
        // Otherwise show the next data
        showUserData(currentDataSerial - 1)
    }
})

// Surprise Button
surpriseButton.addEventListener(`click`, function(){
       showUserData(getRandomGenerator())
})

/**
 * Get Current Serial
 * @returns {Number}
 */

function getCurrentSerial(){
    return Number( document.querySelector(`.review-container`).getAttribute("data-serial"))
}

/**
 * Return the last serial of review
 * @returns {Number}
 */
function getMaxReviewSerial(){
    return usersData.length -1;
}

/**
 * Function of data including
 */
function showUserData(serial){
   const reviewContainer = document.querySelector(`.review-container`)
   const img = document.querySelector(`.pic`);
   const userName = document.querySelector(`.name`);
   const profession = document.querySelector(`.profession`);
   const about = document.querySelector(`.about`);
   const userData = usersData[serial];

   reviewContainer.setAttribute(`data-serial`, serial)
   img.src = userData.image;
   userName.innerText = userData.name;
   profession.innerText = userData.profession;
   about.innerText = userData.about;
}  

// On page load
showUserData(1)


/**
 * Generating random number for surprise button
 * @returns {Number}
 */

function getRandomGenerator(){
    let randomNumber = Math.floor(Math.random() * getMaxReviewSerial())
    const currentSerial = getCurrentSerial();
  while(randomNumber === currentSerial){
    randomNumber = Math.floor(Math.random() * getMaxReviewSerial())
  }
    return randomNumber;
}
})