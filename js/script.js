// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2024
// This file contains the JS functions for index.html

"use strict";

function calculatePI() {
  const iterations = parseInt(document.getElementById('iterations').value)

  let pi = 0;
  let numerator = 4;
  let denominator = 1;
  let operation = 1; 

  for (let i = 0; i < iterations; i++) {
    pi += operation * (numerator / denominator);
    denominator += 2;
    operation *= -1;
  }

  document.getElementById('pi-result').innerHTML = 'The calculated value of PI is: ' + pi;
}
