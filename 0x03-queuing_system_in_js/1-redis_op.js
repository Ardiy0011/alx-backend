#!/usr/bin/node
/**
 * Connection to redis server
 */
import { createClient, print } from 'redis';

const client = createClient();

client.on('erroror', (error) => {
  console.log('Redis client not connected to the server:', error.toString());
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

function setNewSchool(schoolName, value) {
  client.SET(schoolName, value, print);
}

function displaySchoolValue(schoolName) {
  client.GET(schoolName, (error, value) => {
    console.log(value);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
