let homeScoreDisplay = document.getElementById("home-score-display")
homeScore = 0

let guestScoreDisplay = document.getElementById("guest-score-display")
guestScore = 0

let resetBtn = document.getElementById("reset-btn")
resetScore = 0

//Home Score
function addHomeScore1() {
    homeScore += 1
    homeScoreDisplay.textContent = homeScore
}

function addHomeScore2() {
    homeScore += 2
    homeScoreDisplay.textContent = homeScore
}

function addHomeScore3() {
    homeScore += 3
    homeScoreDisplay.textContent = homeScore
}

//Guest Score
function addGuestScore1() {
    guestScore += 1
    guestScoreDisplay.textContent = guestScore
}

function addGuestScore2() {
    guestScore += 2
    guestScoreDisplay.textContent = guestScore
}

function addGuestScore3() {
    guestScore += 3
    guestScoreDisplay.textContent = guestScore
}

function resetScoreBtn() {
    guestScoreDisplay.textContent = resetScore
    guestScore = 0
    homeScoreDisplay.textContent = resetScore
    homeScore = 0
}
