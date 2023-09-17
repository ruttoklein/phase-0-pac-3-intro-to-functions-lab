function shout(string) {
    return string.toUpperCase();
  }
  function whisper(input) {
    return input.toLowerCase();
  }
  function logShout(string) {
    console.log(string.toUpperCase()); // Use toUpperCase() to log in all caps
  }
  function logWhisper(string) {
    console.log(string.toLowerCase()); // Use toLowerCase() to log in all lowercase
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else {
      // Handle the case when the string is not all lowercase
      // You can do something else here, like saying hello
      return "i would love to!";
    }
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string === "Let's have dinner together!") {
      return "I would love to!";
    } else {
      // Handle other cases if needed
      return "Hello!";
    }
  }
  
  // Now you can use the sayHiToHeadphonedRoommate function
  const result = sayHiToHeadphonedRoommate("Let's have dinner together!");
  console.log(result); // Outputs: "I would love to!"
  
  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  