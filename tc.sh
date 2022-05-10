#!/bin/bash
read -p "hh:mm:ss.nnn +/- hh:mm:ss.nnn #mind the spaces! # " CALC
node timecalc.js $CALC