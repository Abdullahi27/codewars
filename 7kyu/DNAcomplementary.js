// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript 
function DNAStrand(dna){
    let sequence = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    }
    return dna.split('').map(e => sequence[e]).join('')
  }
  
  // ex; "ATTGC" --> "TAACG"
  // ex; "GTAT" --> "CATA"