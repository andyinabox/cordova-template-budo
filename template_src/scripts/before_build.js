#!/usr/bin/env node

var exec = require('child_process').execSync

exec('npm run clean; npm run build');