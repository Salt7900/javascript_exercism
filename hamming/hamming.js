function Hamming() {
  this.compute = function(dna1, dna2) {
    if (dna1.length !== dna2.length) {
		    throw 'DNA strands must be of equal length.';
    } else {
      dna1 = dna1.split("");
      dna2 = dna2.split("");
      var hammingCount = 0
      for (var i = 0; i < dna1.length; i++){
        if (dna1[i] !== dna2[i]){
          hammingCount++
        };
      };
      return hammingCount;
    };
  };
}

module.exports = Hamming;
