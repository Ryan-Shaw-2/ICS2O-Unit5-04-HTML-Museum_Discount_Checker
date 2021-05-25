// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function checkClicked () {
  // this function checks whether the user will get a discount at the museum

  // input
  const userDay = document.getElementById("user-day").value
  const userAge = parseInt(document.getElementById("user-age").value)

  // process
  if ((userDay == "tuesday" || userDay == "thursday") || (userAge > 12 && userAge < 21)) {
    // output
    document.getElementById("user-answer").innerHTML = "You will get a discount"
  } else {
    // output
    document.getElementById("user-answer").innerHTML = "You will pay full price"
  }
}
