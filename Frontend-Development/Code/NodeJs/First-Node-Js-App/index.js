console.log("Hello World!");

const userObject = {
  firstName: "Roderick",
  lastName: "Bernardo",
  favoriteSongs: [
    { artist: "SZA", song: "Saturn" },
    { artist: "Taylor Swift", song: "Cruel Summer" },
    { artist: "Dua Lipa", song: "Houdini" },
  ],
};

console.log(`First Name: ${userObject.firstName}`);
console.log(`Last Name: ${userObject.lastName}`);

userObject.favoriteSongs.forEach((favoriteSong) => {
  console.log(`Artist: ${favoriteSong.artist} Song: ${favoriteSong.song}`);
});
