module.exports = anagram;

function anagram( word ) {

  return {
    matches: function(subjects) {
      if (typeof subjects === "string"){
        subjects = Array.prototype.slice.call(arguments);
      }
      var sortedWord = word.toLowerCase().split("").sort().join("");
      var anagrams = [];
      subjects.forEach(function (subject) {
        var sortedSubject =subject.toLowerCase().split("").sort().join("")
        if (sortedSubject === sortedWord && word.toLowerCase()!=subject.toLowerCase()){
          anagrams.push(subject);
        }
      });
      return anagrams;
    }
  };

}
